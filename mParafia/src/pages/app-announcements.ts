import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles } from '../styles/shared-styles'; // Import zgodny z szablonem
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';

interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
  isMain: boolean;
}

@customElement('app-announcements')
export class AppAnnouncements extends LitElement {
  @state() private mainAnnouncements: Announcement[] = [];
  @state() private archive: Announcement[] = [];
  @state() private showArchive = false;
  @state() private isLoading = true;

  connectedCallback() {
    super.connectedCallback();
    const event = new CustomEvent('change-title', {
      detail: { title: 'Ogłoszenia Parafialne' }, // Twój tytuł strony
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  async firstUpdated() {
    try {
      const res = await fetch('http://localhost:3000/api/announcements');
      if (res.ok) {
        const data: Announcement[] = await res.json();
        this.mainAnnouncements = data.filter(a => a.isMain);
        this.archive = data
          .filter(a => !a.isMain)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      }
    } finally {
      this.isLoading = false;
    }
  }

  private formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('pl-PL', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
  }

  // 2. Struktura stylów identyczna jak w szablonie
  static styles = [
    styles,
    css`
      :host {
        display: block;
        padding: 10px;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .paper {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        padding: 25px;
        margin-bottom: 20px;
      }

      .title {
        color: var(--color-wood-dark);
        text-align: center;
        margin: 0;
      }

      .date {
        color: var(--color-wood-medium);
        text-align: center;
        display: block;
        margin-bottom: 15px;
        font-size: 0.9rem;
      }

      .content {
        white-space: pre-line;
        line-height: 1.6;
        color: var(--color-wood-dark);
      }

      .custom-archive-btn {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        color: var(--color-wood-dark);
        border-radius: 25px;
        padding: 10px 20px;
        font-size: 1rem;
        font-weight: bold;
        font-family: inherit;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: transform 0.2s ease, background-color 0.2s ease;
      }

      .custom-archive-btn:active {
        transform: scale(0.98);
        background-color: var(--color-cookie-medium);
      }

      @media (hover: hover) {
        .custom-archive-btn:hover {
          background-color: var(--color-cookie-medium);
        }
      }

      .archive-list {
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .archive-item {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        padding: 15px;
      }
    `
  ];

  render() {
    if (this.isLoading) return html`<div style="text-align:center; padding: 40px;"><sl-spinner style="font-size: 2rem; --indicator-color: var(--color-wood-medium);"></sl-spinner></div>`;

    return html`
      <div>
        ${this.mainAnnouncements.map(ann => html`
          <div class="paper">
            <h2 class="title">${ann.title}</h2>
            <span class="date">${this.formatDate(ann.date)}</span>
            <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>
            <div class="content">${ann.content}</div>
          </div>
        `)}

        ${this.mainAnnouncements.length === 0 ? html`
          <div class="paper" style="text-align: center; color: var(--color-wood-medium);">
            Brak aktualnych ogłoszeń na ten tydzień.
          </div>
        ` : ''}

        <div style="text-align: center; margin-top: 25px;">
          <button class="custom-archive-btn" @click="${() => this.showArchive = !this.showArchive}">
            <sl-icon name="${this.showArchive ? 'chevron-up' : 'archive'}"></sl-icon>
            ${this.showArchive ? 'Ukryj Archiwum' : 'Zobacz Archiwum Ogłoszeń'}
          </button>
        </div>

        ${this.showArchive ? html`
          <div class="archive-list">
            ${this.archive.map(ann => html`
              <div class="archive-item">
                <h4 style="margin:0; color: var(--color-wood-dark);">${ann.title}</h4>
                <small style="color: var(--color-wood-medium);">${this.formatDate(ann.date)}</small>
                <p class="content" style="font-size: 0.95rem; margin-top: 10px;">${ann.content}</p>
              </div>
            `)}
          </div>
        ` : ''}
      </div>
    `;
  }
}