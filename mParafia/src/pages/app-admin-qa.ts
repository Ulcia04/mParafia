import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';

interface Question {
  id: number;
  content: string;
  answer: string | null;
  author: string | null;
  isPublished: boolean;
  createdAt: string;
}

@customElement('app-admin-qa')
export class AppAdminQa extends LitElement {
  @state() private questions: Question[] = [];
  @state() private isSubmitting = false;
  @state() private editingPublishedId: number | null = null;

  static styles = [
    sharedStyles,
    css`
      :host { display: block; padding: 10px 0; }

      p { color: var(--color-wood-dark); }

      .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
      .header h2 { margin: 0; color: var(--color-wood-dark); font-size: 1.3rem; }

      .question-card {
        background: var(--color-sand-light);
        border: 1px solid var(--color-wood-medium);
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 15px;
      }

      .q-header { display: flex; justify-content: space-between; margin-bottom: 10px; }
      .date { font-size: 0.85rem; color: #666; }
      .content { font-size: 1.1rem; color: var(--color-wood-dark); font-weight: 500; margin-bottom: 15px; }

      .answer-section {
        background: rgba(255,255,255,0.6);
        padding: 12px;
        border-radius: 6px;
        margin-bottom: 10px;
        color: var(--color-wood-dark);
        border-left: 3px solid #198754;
      }

      .actions { display: flex; gap: 10px; justify-content: flex-end; margin-top: 10px;}
    `
  ];

  async firstUpdated() {
    await this.fetchQuestions();
  }

  async fetchQuestions() {
    try {
      const res = await fetch('http://localhost:3000/api/questions/all');
      this.questions = await res.json();
    } catch (e) {
      console.error(e);
    }
  }

  async handleSave(id: number) {
    const textarea = this.shadowRoot?.getElementById(`answer-${id}`) as any;
    const answer = textarea?.value;

    if (!answer || answer.trim() === '') {
      alert('Odpowiedź nie może być pusta!');
      return;
    }

    this.isSubmitting = true;
    try {
      const res = await fetch(`http://localhost:3000/api/questions/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer, isPublished: true })
      });

      if (res.ok) {
        this.editingPublishedId = null;
        await this.fetchQuestions();
      }
    } catch (e) {
      alert('Błąd podczas zapisywania.');
    } finally {
      this.isSubmitting = false;
    }
  }

  async handleDelete(id: number) {
    if (!confirm('Czy na pewno usunąć to pytanie?')) return;
    try {
      const res = await fetch(`http://localhost:3000/api/questions/${id}`, { method: 'DELETE' });
      if (res.ok) await this.fetchQuestions();
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const pending = this.questions.filter(q => !q.isPublished);
    const published = this.questions.filter(q => q.isPublished);

    return html`
      <div class="header">
        <h2>Panel Zarządzania Q&A</h2>
      </div>

      <h3 style="color: var(--color-wood-dark);">Nowe pytania (${pending.length})</h3>
      ${pending.length === 0 ? html`<p>Brak nowych pytań od parafian.</p>` : ''}

      ${pending.map(q => html`
        <div class="question-card" style="border-left: 5px solid #d97706;">
          <div class="q-header">
            <sl-badge variant="warning">Nowe</sl-badge>
            <span class="date">${new Date(q.createdAt).toLocaleString('pl-PL')}</span>
          </div>
          <div class="content">
            <sl-icon name="person-circle"></sl-icon>
            <strong>${q.author ? q.author : 'Anonimowy'}:</strong> ${q.content}
          </div>

          <sl-textarea id="answer-${q.id}" placeholder="Twoja odpowiedź..." rows="3"></sl-textarea>

          <div class="actions">
            <sl-button size="small" variant="danger" outline @click=${() => this.handleDelete(q.id)}>Usuń</sl-button>
            <sl-button size="small" variant="success" ?loading=${this.isSubmitting} @click=${() => this.handleSave(q.id)}>
               Odpowiedz i publikuj
            </sl-button>
          </div>
        </div>
      `)}

      <sl-divider></sl-divider>

      <h3 style="color: var(--color-wood-dark);">Opublikowane odpowiedzi (${published.length})</h3>

      ${published.map(q => html`
        <div class="question-card">
          <div class="q-header">
            <sl-badge variant="success">Widoczne dla wszystkich</sl-badge>
            <span class="date">${new Date(q.createdAt).toLocaleString('pl-PL')}</span>
          </div>
          <div class="content">
            <sl-icon name="person-circle"></sl-icon>
            <strong>${q.author ? q.author : 'Anonimowy'}:</strong> ${q.content}
          </div>

          ${this.editingPublishedId === q.id ? html`
            <sl-textarea id="answer-${q.id}" .value=${q.answer || ''} rows="3"></sl-textarea>
            <div class="actions">
              <sl-button size="small" @click=${() => this.editingPublishedId = null}>Anuluj</sl-button>
              <sl-button size="small" variant="success" ?loading=${this.isSubmitting} @click=${() => this.handleSave(q.id)}>
                Zapisz poprawkę
              </sl-button>
            </div>
          ` : html`
            <div class="answer-section">
               <strong>Odpowiedź duszpasterza:</strong><br/>
               ${q.answer}
            </div>
            <div class="actions">
              <sl-button size="small" variant="danger" outline @click=${() => this.handleDelete(q.id)}>Usuń</sl-button>
              <sl-button size="small" variant="default" @click=${() => this.editingPublishedId = q.id}>
                <sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj treść
              </sl-button>
            </div>
          `}
        </div>
      `)}
    `;
  }
}