import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';
import { apiFetch } from '../utils/api';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';

interface Question { id: number; content: string; answer: string | null; author: string | null; isPublished: boolean; createdAt: string; }

@customElement('app-admin-qa')
export class AppAdminQa extends LitElement {
  @state() private questions: Question[] = [];
  @state() private isSubmitting = false;
  @state() private editingId: number | null = null;

  static styles = [
    sharedStyles,
    css`
      :host { display: block; padding: 10px; max-width: 900px; width: 100%; margin: 0 auto; box-sizing: border-box; }
      p { color: var(--color-wood-dark); }
      .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
      .header h2 { margin: 0; color: var(--color-wood-dark); font-size: 1.3rem; }
      .question-card { background: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; padding: 20px; margin-bottom: 20px; transition: background-color 0.2s ease, border-color 0.2s ease; }
      .question-card[style*="border-left"] { border-left: 6px solid var(--sl-color-warning-500) !important; }
      .q-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
      .date { font-size: 0.9rem; color: var(--color-wood-dark); opacity: 0.8; }

      /* --- POPRAWIONE STYLE DLA TREŚCI --- */
      .content {
        display: flex;
        gap: 10px;
        align-items: flex-start;
        font-size: 1.1rem;
        color: var(--color-wood-dark);
        font-weight: 500;
        margin-bottom: 15px;
        line-height: 1.5;
      }
      .content sl-icon {
        font-size: 1.4rem;
        flex-shrink: 0;
        margin-top: 2px;
      }
      /* ---------------------------------- */

      .answer-section { background: var(--color-cookie-medium); padding: 15px 20px; border-radius: 8px; margin-bottom: 15px; color: var(--color-wood-dark); border-left: 4px solid var(--sl-color-success-600); line-height: 1.5; }
      .actions { display: flex; gap: 10px; justify-content: flex-end; margin-top: 15px;}
      sl-textarea { --sl-input-color: var(--color-wood-dark); --sl-input-color-hover: var(--color-wood-dark); --sl-input-color-focus: var(--color-wood-dark); --sl-input-label-color: var(--color-wood-dark); --sl-input-placeholder-color: var(--color-wood-medium); --sl-input-background-color: var(--color-sand-light); --sl-input-background-color-hover: var(--color-sand-light); --sl-input-background-color-focus: var(--color-sand-light); --sl-input-border-color: var(--color-wood-medium); --sl-input-border-color-hover: var(--color-wood-medium); --sl-input-border-color-focus: var(--color-wood-medium); }
      .btn-edit::part(base) { background-color: #d97706; border-color: #d97706; }
      .btn-edit::part(base):hover { background-color: #db6104; border-color: #db6104; }
      .btn-edit::part(label), .btn-edit::part(prefix) { color: var(--color-sand-light) !important; }
      .btn-delete::part(base) { background-color: rgba(220, 38, 38, 0.8); border-color: transparent; }
      .btn-delete::part(base):hover { background-color: rgba(220, 38, 38, 1); }
      .btn-delete::part(label), .btn-delete::part(prefix) { color: var(--color-sand-light) !important; }
      .btn-save::part(base) { background-color: #15803d; border-color: #15803d; }
      .btn-save::part(base):hover { background-color: #166534; border-color: #166534; }
      .btn-save::part(label), .btn-save::part(prefix) { color: var(--color-sand-light) !important; }
      .btn-cancel::part(base) { color: var(--color-wood-dark); border-color: var(--color-wood-medium); background-color: transparent; }
      .btn-cancel::part(base):hover { background-color: var(--color-cookie-medium); border-color: var(--color-wood-dark); }
      sl-divider { --color: var(--color-wood-medium); margin: 25px 0; }
    `
  ];

  async firstUpdated() { await this.fetchQuestions(); }

  async fetchQuestions() {
    try {
      const res = await apiFetch('/questions/all');
      if (res.ok) this.questions = await res.json();
    } catch (e) { console.error(e); }
  }

  async handleSave(id: number, originalContent: string) {
    const textareaAnswer = this.shadowRoot?.getElementById(`answer-${id}`) as any;
    const textareaQuestion = this.shadowRoot?.getElementById(`question-${id}`) as any;
    const answer = textareaAnswer?.value;
    const content = textareaQuestion ? textareaQuestion.value : originalContent;

    if (!answer || answer.trim() === '') return alert('Odpowiedź nie może być pusta!');
    if (!content || content.trim() === '') return alert('Treść pytania nie może być pusta!');

    this.isSubmitting = true;
    try {
      const res = await apiFetch(`/questions/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ answer, content, isPublished: true })
      });

      if (res.ok) { this.editingId = null; await this.fetchQuestions(); }
    } catch (e) { alert('Błąd podczas zapisywania.'); }
    finally { this.isSubmitting = false; }
  }

  async handleDelete(id: number) {
    if (!confirm('Czy na pewno usunąć to pytanie?')) return;
    try {
      const res = await apiFetch(`/questions/${id}`, { method: 'DELETE' });
      if (res.ok) await this.fetchQuestions();
    } catch (e) { console.error(e); }
  }

  render() {
    const pending = this.questions.filter(q => !q.isPublished);
    const published = this.questions.filter(q => q.isPublished);

    return html`
      <div class="header"><h2>Panel Zarządzania Q&A</h2></div>
      <h3 style="color: var(--color-wood-dark);">Nowe pytania (${pending.length})</h3>
      ${pending.length === 0 ? html`<p>Brak nowych pytań od parafian.</p>` : ''}

      ${pending.map(q => html`
        <div class="question-card" style="border-left: 5px solid #d97706;">
          <div class="q-header"><sl-badge variant="warning">Nowe</sl-badge><span class="date">${new Date(q.createdAt).toLocaleString('pl-PL')}</span></div>
          ${this.editingId === q.id ? html`
            <sl-textarea id="question-${q.id}" label="Treść pytania (${ q.author || ' Anonimowy'})" .value=${q.content} rows="2" style="margin-bottom: 15px;"></sl-textarea>
            <sl-textarea id="answer-${q.id}" label="Twoja odpowiedź" placeholder="Wpisz odpowiedź..." rows="3"></sl-textarea>
            <div class="actions">
              <sl-button size="small" class="btn-cancel" @click=${() => this.editingId = null}>Anuluj</sl-button>
              <sl-button size="small" class="btn-save" ?loading=${this.isSubmitting} @click=${() => this.handleSave(q.id, q.content)}>Odpowiedz i publikuj</sl-button>
            </div>
          ` : html`
            <div class="content">
              <sl-icon name="person-circle"></sl-icon>
              <div><strong>${q.author ? q.author : 'Anonimowy'}:</strong> ${q.content}</div>
            </div>
            <sl-textarea id="answer-${q.id}" placeholder="Twoja odpowiedź..." rows="3"></sl-textarea>
            <div class="actions">
              <sl-button size="small" class="btn-delete" @click=${() => this.handleDelete(q.id)}>Usuń</sl-button>
              <sl-button size="small" class="btn-edit" @click=${() => this.editingId = q.id}><sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj pytanie</sl-button>
              <sl-button size="small" class="btn-save" ?loading=${this.isSubmitting} @click=${() => this.handleSave(q.id, q.content)}>Odpowiedz i publikuj</sl-button>
            </div>
          `}
        </div>
      `)}

      <sl-divider></sl-divider>
      <h3 style="color: var(--color-wood-dark);">Opublikowane odpowiedzi (${published.length})</h3>

      ${published.map(q => html`
        <div class="question-card">
          <div class="q-header"><sl-badge variant="success">Widoczne dla wszystkich</sl-badge><span class="date">${new Date(q.createdAt).toLocaleString('pl-PL')}</span></div>
          ${this.editingId === q.id ? html`
            <sl-textarea id="question-${q.id}" label="Treść pytania (${ q.author || ' Anonimowy'})" .value=${q.content} rows="2" style="margin-bottom: 15px;"></sl-textarea>
            <sl-textarea id="answer-${q.id}" label="Odpowiedź duszpasterza" .value=${q.answer || ''} rows="3"></sl-textarea>
            <div class="actions">
              <sl-button size="small" class="btn-cancel" @click=${() => this.editingId = null}>Anuluj</sl-button>
              <sl-button size="small" class="btn-save" ?loading=${this.isSubmitting} @click=${() => this.handleSave(q.id, q.content)}>Zapisz poprawkę</sl-button>
            </div>
          ` : html`
            <div class="content">
              <sl-icon name="person-circle"></sl-icon>
              <div><strong>${q.author ? q.author : 'Anonimowy'}:</strong> ${q.content}</div>
            </div>
            <div class="answer-section"><strong>Odpowiedź duszpasterza:</strong><br/>${q.answer}</div>
            <div class="actions">
              <sl-button size="small" class="btn-delete" @click=${() => this.handleDelete(q.id)}>Usuń</sl-button>
              <sl-button size="small" class="btn-edit" @click=${() => this.editingId = q.id}><sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj</sl-button>
            </div>
          `}
        </div>
      `)}
    `;
  }
}