import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { styles as sharedStyles } from '../styles/shared-styles';
import { apiFetch } from '../utils/api';

import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

@customElement('app-kancelaria')
export class AppKancelaria extends LitElement {
  @state() private kancelariaItems: any[] = [];
  @state() private activeItem: any = null;
  @query('#kancelaria-dialog') dialog!: any;

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('change-title', {
      detail: { title: 'Kancelaria Parafialna' },
      bubbles: true, composed: true
    }));
  }

  async firstUpdated() {
    try {
      const res = await apiFetch('/kancelaria');
      if (res.ok) {
        this.kancelariaItems = await res.json();
      }
    } catch (e) {
      console.error(e);
    }
  }

  openDialog(item: any) {
    this.activeItem = item;
    this.dialog.show();
  }

  static styles = [
    sharedStyles,
    css`
      :host { display: block; padding: 10px; width: 100%; max-width: 900px; margin: 0 auto; box-sizing: border-box; }
      .wrapper { display: flex; flex-direction: column; gap: 15px; }

      .paper { background-color: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; padding: 15px; }
      .title-container { display: flex; align-items: center; gap: 10px; color: var(--color-wood-dark); margin-bottom: 8px; }
      .title-container h2 { margin: 0; font-size: 1.25rem; }
      .title-container sl-icon { font-size: 1.25rem; }
      .content { color: var(--color-wood-dark); line-height: 1.5; font-size: 1rem; }
      .content p { margin: 8px 0; }

      .bank-section { text-align: center; }
      .piggy-icon { font-size: 7rem; color: var(--color-wood-dark); margin-bottom: 10px; }
      .account-name { color: var(--color-wood-dark); font-size: 1rem; margin-bottom: 5px; }
      .account-number { font-family: monospace; font-size: 1.1rem; color: var(--color-wood-dark); letter-spacing: 1px; }

      .contact-list { display: flex; flex-direction: column; gap: 8px; margin-top: 5px; }
      .contact-item { display: flex; align-items: center; gap: 10px; color: var(--color-wood-dark); text-decoration: none; font-size: 1rem; }

      .kancelaria-header { text-align: center; margin: 30px 0 20px 0; }
      .kancelaria-header h2 { color: var(--color-wood-dark); margin: 0; font-size: 1.5rem; font-weight: bold; }

      .kancelaria-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        margin-bottom: 20px;
      }

      .kancelaria-card {
        border: 2px solid var(--color-wood-dark);
        border-radius: 15px;
        padding: 25px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.2s;
      }
      .kancelaria-card:hover { background-color: var(--color-cookie-medium); }

      .icon-circle {
        width: 90px; height: 90px; border-radius: 50%;
        border: 2px solid var(--color-wood-dark);
        display: flex; align-items: center; justify-content: center;
        background-color: #fff; margin-bottom: 15px;
      }
      .icon-circle sl-icon { font-size: 2.5rem; color: var(--color-wood-dark); }
      .kancelaria-name { font-weight: bold; color: var(--color-wood-dark); font-size: 1.1rem; text-transform: uppercase; text-align: center; }

      sl-dialog { --sl-panel-background-color: var(--color-sand-light); color: var(--color-wood-dark); }
      sl-dialog::part(title) { color: var(--color-wood-dark); font-weight: bold; font-size: 1.3rem; }

      .dialog-content ul { padding-left: 20px; line-height: 1.6; color: var(--color-wood-dark); }
      .dialog-content li { margin-bottom: 8px; }
      .file-download-box { background-color: var(--color-cookie-medium); border: 1px dashed var(--color-wood-dark); border-radius: 8px; padding: 15px; display: flex; justify-content: space-between; align-items: center; margin-top: 20px; }
      .file-info { display: flex; align-items: center; gap: 10px; color: var(--color-wood-dark); font-weight: 500; }

      .btn-download::part(base) { background-color: #d84a4a; border-color: #d84a4a; color: white; border-radius: 20px; padding: 0 15px; transition: transform 0.2s; }
      .btn-download::part(base):hover { background-color: #b91c1c; border-color: #b91c1c; transform: scale(1.05); }
      .btn-download::part(label) { color: white !important; }
    `
  ];

  render() {
    return html`
      <div class="wrapper">
        <div class="paper">
          <div class="title-container"><sl-icon name="person-heart"></sl-icon><h2>Godziny urzędowania</h2></div>
          <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>
          <div class="content">
            <p><strong>W roku szkolnym:</strong><br>Poniedziałek, środa: 16.00 – 17.00<br>Piątek: 19.00 – 20.00</p>
            <p><strong>W wakacje:</strong><br>Czwartek: 16.00 – 17.00<br>Piątek: 19.00 – 20.00</p>
          </div>
        </div>

        <div class="paper">
          <div class="title-container"><sl-icon name="person-lines-fill"></sl-icon><h2>Kontakt</h2></div>
          <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>
          <div class="contact-list">
            <a href="tel:122622004" class="contact-item"><sl-icon name="telephone-fill"></sl-icon> 12 262 20 04</a>
            <a href="mailto:parafia@mbkp.eu" class="contact-item"><sl-icon name="envelope-fill"></sl-icon> parafia@mbkp.eu</a>
          </div>
        </div>

        <div class="kancelaria-header">
          <h2>Sprawy do załatwienia w Kancelarii</h2>
        </div>

        <div class="kancelaria-grid">
          ${this.kancelariaItems.map(item => html`
            <div class="kancelaria-card" @click=${() => this.openDialog(item)}>
              <div class="icon-circle"><sl-icon name="${item.icon}"></sl-icon></div>
              <span class="kancelaria-name">${item.title}</span>
            </div>
          `)}
        </div>

        <div class="paper bank-section">
          <div class="account-name"> #zbieram punkty do nieba </div>
          <sl-icon name="piggy-bank" class="piggy-icon"></sl-icon>
          <div class="account-name">Parafia Rzymsko-katolicka pw. Matki Bożej Królowej Polski</div>
          <div class="account-number">10 1240 1444 1111 0000 0936 3511</div>
        </div>

        <sl-dialog id="kancelaria-dialog" label="${this.activeItem?.title || ''}">
          ${this.activeItem ? html`
            <div class="dialog-content">
              <div class="content">${unsafeHTML(this.activeItem.content)}</div>

              ${this.activeItem.fileUrl ? html`
                <div class="file-download-box">
                  <div class="file-info">
                    <sl-icon name="file-earmark-pdf" style="font-size: 1.5rem;"></sl-icon>
                    <span>${this.activeItem.fileName}</span>
                  </div>
                  <sl-button class="btn-download" href="${this.activeItem.fileUrl}" download target="_blank">Pobierz plik</sl-button>
                </div>
              ` : ''}

              ${this.activeItem.footer ? html`
                <p style="font-size: 0.95rem; font-style: italic; margin-top: 20px; opacity: 0.9;">
                  ${this.activeItem.footer}
                </p>
              ` : ''}
            </div>
          ` : ''}
        </sl-dialog>
      </div>
    `;
  }
}