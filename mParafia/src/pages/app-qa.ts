import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';

import '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';

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
  @query('#author-input') authorInput!: any;

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
      :host {
        display: block;
        padding: 10px;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .qa-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .page-title {
        color: var(--color-wood-dark);
        margin: 0 0 5px 0;
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 1.6rem;
      }

      .ask-section {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .ask-section p {
        margin: 0;
        color: var(--color-wood-dark);
        font-weight: bold;
        font-size: 1.1rem;
      }

      sl-input, sl-textarea {
        --sl-input-background-color: var(--color-sand-light);
        --sl-input-background-color-hover: var(--color-sand-light);
        --sl-input-background-color-focus: var(--color-sand-light);

        --sl-input-border-color: var(--color-wood-medium);
        --sl-input-border-color-hover: var(--color-wood-dark);
        --sl-input-border-color-focus: var(--color-wood-dark);

        --sl-input-color: var(--color-wood-dark);
        --sl-input-color-hover: var(--color-wood-dark);
        --sl-input-color-focus: var(--color-wood-dark);

        --sl-input-placeholder-color: var(--color-wood-dark);
        --sl-focus-ring-color: var(--color-wood-dark)
      }

      .custom-btn {
        background-color: var(--color-wood-medium);
        border: none;
        color: var(--color-sand-light);
        border-radius: 25px;
        padding: 10px 20px;
        font-size: 1rem;
        font-weight: bold;
        font-family: inherit;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: transform 0.2s ease, background-color 0.2s ease;
        align-self: flex-end;
      }

      .custom-btn:active {
        transform: scale(0.98);
        background-color: var(--color-wood-dark);
      }

      @media (hover: hover) {
        .custom-btn:hover {
          background-color: var(--color-wood-dark);
        }
      }

      .custom-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none;
      }

      .qa-item {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .question {
        font-size: 1.05rem;
        color: var(--color-wood-dark);
        display: flex;
        gap: 10px;
        align-items: flex-start;
      }

      .question sl-icon {
        font-size: 1.4rem;
        color: var(--color-wood-medium);
        flex-shrink: 0;
        margin-top: 1px;
      }

      .answer {
        background-color: var(--color-cookie-medium);
        border-left: 4px solid var(--color-wood-dark);
        padding: 10px 15px;
        border-radius: 0 8px 8px 0;
        color: var(--color-wood-dark);
        line-height: 1.5;
      }

      .answer-text {
        white-space: pre-wrap;
      }

      .date {
        font-size: 0.8rem;
        color: var(--color-wood-medium);
        text-align: right;
        margin-top: -2px;
      }
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
      <div class="qa-wrapper">
        <div class="ask-section">
          <p>Masz pytanie dotyczące życia parafii? Zadaj je tutaj!</p>
          <sl-input id="author-input" placeholder="Twoje imię (zostaw puste, aby zapytać anonimowo)"></sl-input>

          <sl-textarea id="new-question" placeholder="Napisz swoje pytanie..." rows="4" resize="auto"></sl-textarea>

          <button class="custom-btn" @click=${this.submitQuestion} ?disabled=${this.isSubmitting}>
            ${this.isSubmitting
              ? html`Wysyłanie... <sl-spinner style="--indicator-color: white;"></sl-spinner>`
              : html`Wyślij pytanie <sl-icon name="send-fill-sand"></sl-icon>`
            }
          </button>
        </div>

        ${this.publishedQuestions.length === 0 ? html`
          <div class="qa-item" style="text-align: center; color: var(--color-wood-medium);">
            Brak opublikowanych odpowiedzi. Bądź pierwszy i zadaj pytanie!
          </div>
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
              <strong style="display:block; margin-bottom: 2px;">Odpowiedź duszpasterza:</strong>
              <div class="answer-text">${q.answer ? q.answer.trim() : html`<span style="color: red;">Błąd: Brak tekstu odpowiedzi w bazie danych!</span>`}</div>
            </div>
            <div class="date">${new Date(q.createdAt).toLocaleDateString('pl-PL')}</div>
          </div>
        `)}
      </div>
    `;
  }
}