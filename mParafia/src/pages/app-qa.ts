import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';

interface Question {
  id: number;
  content: string;
  answer: string;
  author: string | null;
  createdAt: string;
}

@customElement('app-qa')
export class AppQa extends LitElement {
  @state() private publishedQuestions: Question[] = [];
  @state() private isSubmitting = false;

  @query('#new-question') questionInput!: any;
  @query('#author-input') authorInput!: any; // <--- NOWE POLE

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('change-title', {
      detail: { title: 'Pytania do Księdza' },
      bubbles: true, composed: true
    }));
  }

  static styles = [
    sharedStyles,
    css`
      :host { display: block; padding: 15px; max-width: 800px; margin: 0 auto; }
      .qa-container { background-color: #fff; border: 2px solid var(--color-wood-medium); border-radius: 12px; padding: 25px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
      .title { color: var(--color-wood-dark); margin-top: 0; display: flex; align-items: center; gap: 10px; }
      .ask-section { background: var(--color-sand-light); padding: 15px; border-radius: 8px; margin-bottom: 25px; border: 1px dashed var(--color-wood-medium); display: flex; flex-direction: column; gap: 10px;}
      .ask-section p { margin: 0; color: var(--color-wood-dark); font-weight: bold; }

      .qa-item { margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #eee; }
      .qa-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }

      .question { font-size: 1.05rem; color: var(--color-wood-dark); margin-bottom: 10px; display: flex; gap: 10px; align-items: flex-start; }
      .question sl-icon { margin-top: 3px; color: var(--color-wood-medium); }

      .answer { background: #f9fdfa; border-left: 4px solid #198754; padding: 12px 15px; border-radius: 0 8px 8px 0; margin-left: 25px; color: #333; line-height: 1.5; white-space: pre-wrap;}
      .date { font-size: 0.8rem; color: #999; margin-left: 25px; margin-top: 5px; display: block; }
    `
  ];

  async firstUpdated() {
    await this.fetchQuestions();
  }

  async fetchQuestions() {
    try {
      const res = await fetch('http://localhost:3000/api/questions');
      if (res.ok) this.publishedQuestions = await res.json();
    } catch (e) { console.error(e); }
  }

  async submitQuestion() {
    const content = this.questionInput.value;
    const authorRaw = this.authorInput.value;
    // Jeśli pole imienia jest puste, wysyłamy null (czyli anonim)
    const author = authorRaw && authorRaw.trim() !== '' ? authorRaw.trim() : null;

    if (!content || content.trim() === '') {
      alert('Proszę wpisać treść pytania.');
      return;
    }

    this.isSubmitting = true;
    try {
      const res = await fetch('http://localhost:3000/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, author })
      });

      if (res.ok) {
        alert('Dziękujemy! Twoje pytanie zostało wysłane. Pojawi się tutaj, gdy ksiądz na nie odpowie.');
        this.questionInput.value = '';
        this.authorInput.value = '';
      } else {
        alert('Wystąpił błąd podczas wysyłania pytania.');
      }
    } catch (e) { alert('Brak połączenia z serwerem.'); }
    finally { this.isSubmitting = false; }
  }

  render() {
    return html`
      <div class="qa-container">
        <h2 class="title"><sl-icon name="chat-dots"></sl-icon> Pytania do Księdza</h2>

        <div class="ask-section">
          <p>Masz pytanie dotyczące życia parafii? Zadaj je tutaj!</p>
          <sl-input id="author-input" placeholder="Twoje imię (zostaw puste, aby zapytać anonimowo)"></sl-input>
          <sl-textarea id="new-question" placeholder="Napisz swoje pytanie..." rows="3"></sl-textarea>
          <sl-button variant="primary" ?loading=${this.isSubmitting} @click=${this.submitQuestion}>
            <sl-icon slot="prefix" name="send"></sl-icon> Wyślij pytanie
          </sl-button>
        </div>

        ${this.publishedQuestions.length === 0 ? html`
          <p style="text-align: center; color: #777;">Brak opublikowanych odpowiedzi. Bądź pierwszy i zadaj pytanie!</p>
        ` : ''}

        ${this.publishedQuestions.map(q => html`
          <div class="qa-item">
            <div class="question">
              <sl-icon name="person-circle"></sl-icon>
              <div>
                <strong>${q.author ? q.author : 'Anonimowy'}:</strong> ${q.content}
              </div>
            </div>
            <div class="answer">
              <strong>Odpowiedź duszpasterza:</strong><br />
              ${q.answer ? q.answer : html`<span style="color: red;">Błąd: Brak tekstu odpowiedzi w bazie danych!</span>`}
            </div>
            <span class="date">${new Date(q.createdAt).toLocaleDateString('pl-PL')}</span>
          </div>
        `)}
      </div>
    `;
  }
}