import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { styles as sharedStyles } from '../styles/shared-styles';
import { apiFetch } from '../utils/api';

import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';

@customElement('app-kancelaria-detail')
export class AppKancelariaDetail extends LitElement {
  @state() private item: any = null;
  @state() private isLoading = true;

  async firstUpdated() {
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get('id');

    if (idParam) {
      try {
        const res = await apiFetch('/kancelaria');
        if (res.ok) {
          const items = await res.json();
          this.item = items.find((i: any) => i.id === parseInt(idParam, 10));

          if (this.item) {
            this.dispatchEvent(new CustomEvent('change-title', {
              detail: { title: this.item.title },
              bubbles: true, composed: true
            }));
          }
        }
      } catch (e) {
        console.error('Błąd pobierania danych kancelarii:', e);
      }
    }
    this.isLoading = false;
  }

  private goBack() {
    window.history.back();
  }

  static styles = [
    sharedStyles,
    css`
      :host { display: block; padding: 10px; width: 100%; max-width: 900px; margin: 0 auto; box-sizing: border-box; }

      .header-actions { display: flex; align-items: center; gap: 15px; margin-bottom: 25px; }
      .header-actions h2 { margin: 0; color: var(--color-wood-dark); font-size: 1.5rem; }

      .btn-back::part(base) {
        background-color: var(--color-wood-dark);
        border-color: var(--color-wood-dark);
        border-radius: 8px;
        transition: background-color 0.2s ease;
      }
      .btn-back::part(base):hover {
        background-color: var(--color-wood-medium);
        border-color: var(--color-wood-medium);
      }
      .btn-back::part(label), .btn-back::part(prefix) { color: var(--color-sand-light) !important; }

      .paper {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        padding: 30px;
        box-shadow: 0 4px 15px rgba(127, 69, 29, 0.05);
      }

      .icon-header { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; color: var(--color-wood-dark); }
      .icon-header img { width: 60px; height: 60px; border-radius: 50%; object-fit: cover; border: 2px solid var(--color-wood-dark); }
      .icon-header h3 { margin: 0; font-size: 1.6rem; }

      .content-body {
        color: var(--color-wood-dark);
        line-height: 1.6;
        font-size: 1.05rem;
        text-align: justify;
        white-space: pre-wrap;
      }
      .content-body ul { padding-left: 20px; text-align: left; }
      .content-body li { margin-bottom: 8px; }

      /* Kontener na wiele plików */
      .files-container { display: flex; flex-direction: column; gap: 10px; margin-top: 30px; }

      .file-download-box {
        background-color: var(--color-cookie-medium);
        border: 2px dashed var(--color-wood-medium);
        border-radius: 8px;
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .file-info { display: flex; align-items: center; gap: 10px; color: var(--color-wood-dark); font-weight: bold; }

      .btn-download-link {
        background-color: var(--color-wood-dark);
        border: 2px solid var(--color-wood-dark);
        color: var(--color-sand-light);
        border-radius: 8px;
        padding: 10px 20px;
        font-weight: bold;
        text-decoration: none;
        font-size: 0.95rem;
        transition: all 0.2s ease;
        display: inline-block;
      }
      .btn-download-link:hover {
        background-color: var(--color-wood-medium);
        border-color: var(--color-wood-medium);
        transform: translateY(-1px);
        box-shadow: 0 4px 10px rgba(127, 69, 29, 0.15);
      }

      .footer-note { font-size: 0.95rem; font-style: italic; margin-top: 30px; opacity: 0.9; color: var(--color-wood-dark); text-align: center; }
      .center-content { display: flex; justify-content: center; padding: 50px; }
    `
  ];

  render() {
    if (this.isLoading) return html`<div class="center-content"><sl-spinner style="font-size: 2.5rem;"></sl-spinner></div>`;
    if (!this.item) return html`
      <div class="header-actions"><sl-button class="btn-back" @click=${this.goBack}><sl-icon slot="prefix" name="arrow-left"></sl-icon> Wróć</sl-button></div>
      <div class="paper center-content"><h3 style="color: var(--color-wood-dark);">Nie znaleziono takiej sprawy.</h3></div>
    `;

    // Upewniamy się, że mamy tablicę
    const filesArray = this.item.files && Array.isArray(this.item.files) ? this.item.files : [];

    return html`
      <div class="header-actions">
        <sl-button class="btn-back" @click=${this.goBack}><sl-icon slot="prefix" name="arrow-left"></sl-icon> Kancelaria</sl-button>
      </div>

      <div class="paper">
        <div class="icon-header">
          ${this.item.photoUrl ? html`<img src="${this.item.photoUrl}">` : ''}
          <h3>${this.item.title}</h3>
        </div>
        <sl-divider style="--color: var(--color-wood-medium); margin-bottom: 20px;"></sl-divider>

        <div class="content-body">${unsafeHTML(this.item.content)}</div>

        ${filesArray.length > 0 ? html`
          <div class="files-container">
            <h4 style="margin: 0 0 5px 0; color: var(--color-wood-dark);">Pliki do pobrania:</h4>
            ${filesArray.map((f: any) => html`
              <div class="file-download-box">
                <div class="file-info">
                  <sl-icon name="file-earmark-pdf" style="font-size: 1.8rem;"></sl-icon>
                  <span>${f.name}</span>
                </div>
                <a class="btn-download-link" href="${f.url}" download="${f.name}" target="_blank">
                  Pobierz plik
                </a>
              </div>
            `)}
          </div>
        ` : ''}

        ${this.item.footer ? html`<div class="footer-note">${this.item.footer}</div>` : ''}
      </div>
    `;
  }
}