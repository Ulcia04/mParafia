import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
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

  async firstUpdated() {
    try {
      const res = await fetch('http://localhost:3000/api/announcements');
      if (res.ok) {
        const data: Announcement[] = await res.json();
        
        // Wybieramy WSZYSTKIE zaznaczone jako główne
        this.mainAnnouncements = data.filter(a => a.isMain);
        
        // Reszta idzie do archiwum
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

  static styles = [
    sharedStyles,
    css`
      :host { display: block; padding: 15px; max-width: 800px; margin: 0 auto; }
      .paper { background: #fff; border: 1px solid var(--color-wood-medium); border-radius: 8px; padding: 25px; margin-bottom: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
      .title { color: var(--color-wood-dark); text-align: center; margin: 0; }
      .date { color: #777; text-align: center; display: block; margin-bottom: 15px; font-size: 0.9rem; }
      .content { white-space: pre-line; line-height: 1.6; color: #333; }
      .archive-list { margin-top: 20px; display: flex; flex-direction: column; gap: 15px; }
      .archive-item { padding: 15px; border-left: 4px solid var(--color-wood-medium); background: #fdfdfd; }
    `
  ];

  render() {
    if (this.isLoading) return html`<div style="text-align:center"><sl-spinner></sl-spinner></div>`;

    return html`
      ${this.mainAnnouncements.map(ann => html`
        <div class="paper">
          <h2 class="title">${ann.title}</h2>
          <span class="date">${this.formatDate(ann.date)}</span>
          <sl-divider></sl-divider>
          <div class="content">${ann.content}</div>
        </div>
      `)}

      ${this.mainAnnouncements.length === 0 ? html`
        <div class="paper" style="text-align: center; color: #777;">
          Brak aktualnych ogłoszeń na ten tydzień.
        </div>
      ` : ''}

      <div style="text-align: center; margin-top: 20px;">
        <sl-button pill @click="${() => this.showArchive = !this.showArchive}">
          <sl-icon slot="prefix" name="${this.showArchive ? 'chevron-up' : 'archive'}"></sl-icon>
          ${this.showArchive ? 'Ukryj Archiwum' : 'Zobacz Archiwum Ogłoszeń'}
        </sl-button>
      </div>

      ${this.showArchive ? html`
        <div class="archive-list">
          ${this.archive.map(ann => html`
            <div class="archive-item">
              <h4 style="margin:0">${ann.title}</h4>
              <small>${this.formatDate(ann.date)}</small>
              <p class="content" style="font-size: 0.9rem; margin-top: 10px;">${ann.content}</p>
            </div>
          `)}
        </div>
      ` : ''}
    `;
  }
}