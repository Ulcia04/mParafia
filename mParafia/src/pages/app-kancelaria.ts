import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';
import { apiFetch } from '../utils/api';

import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';

@customElement('app-kancelaria')
export class AppKancelaria extends LitElement {
  @state() private kancelariaItems: any[] = [];

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

  private navigateToDetails(id: number) {
    const base = (import.meta as any).env.BASE_URL || '/';
    const path = `kancelaria-detale?id=${id}`;
    const fullPath = base === '/' ? '/' + path : base + path;
    window.location.href = fullPath;
  }

  static styles = [
    sharedStyles,
    css`
      :host { display: block; padding: 10px; width: 100%; max-width: 900px; margin: 0 auto; box-sizing: border-box; }
      .wrapper { display: flex; flex-direction: column; gap: 15px; }

      .paper {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        padding: 20px;
      }

      .title-container { display: flex; align-items: center; gap: 10px; color: var(--color-wood-dark); margin-bottom: 8px; }
      .title-container h2 { margin: 0; font-size: 1.25rem; }
      .title-container sl-icon { font-size: 1.25rem; }
      .content { color: var(--color-wood-dark); line-height: 1.5; font-size: 1rem; }
      .content p { margin: 8px 0; }

      .bank-section { text-align: center; }
      .piggy-icon { font-size: 7rem; color: var(--color-wood-dark); margin-bottom: 10px; }
      .account-name { color: var(--color-wood-dark); font-size: 1rem; margin-bottom: 5px; }
      .account-number { font-family: monospace; font-size: 1.1rem; color: var(--color-wood-dark); letter-spacing: 1px; }

      .contact-list { display: flex; flex-direction: column; gap: 10px; margin-top: 5px; }
      .contact-item { display: flex; align-items: center; gap: 10px; color: var(--color-wood-dark); text-decoration: none; font-size: 1.05rem; }
      .contact-item:hover { color: var(--color-wood-medium); }

      .kancelaria-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
        margin-top: 15px;
      }

      .kancelaria-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        cursor: pointer;
        padding: 10px;
        /* Usuwamy background i border */
        background-color: transparent;
        border: none;
      }

      .card-photo {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid var(--color-wood-medium);
        transition: transform 0.3s ease, border-color 0.3s ease;
      }

      .kancelaria-name {
        margin-top: 12px;
        font-weight: bold;
        color: var(--color-wood-dark);
        font-size: 1rem;
        transition: opacity 0.3s ease; /* Płynne znikanie napisu */
      }

      /* Interakcja po najechaniu */
      .kancelaria-card:hover .card-photo {
        transform: scale(1.15); /* Powiększenie zdjęcia */
        border-color: var(--color-wood-dark);
      }

      .kancelaria-card:hover .kancelaria-name {
        opacity: 0; /* Napis znika */
      }

      @media (max-width: 600px) { .kancelaria-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 400px) { .kancelaria-grid { grid-template-columns: 1fr; } }
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

        <div class="paper">
          <div class="title-container">
            <sl-icon name="folder2-open"></sl-icon>
            <h2>Sprawy do załatwienia</h2>
          </div>
          <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>

          <div class="kancelaria-grid">
            ${this.kancelariaItems.map(item => html`
              <div class="kancelaria-card" @click=${() => this.navigateToDetails(item.id)}>
                ${item.photoUrl
                  ? html`<img src="${item.photoUrl}" class="card-photo">`
                  : html`<sl-icon name="folder" style="font-size: 2.5rem; color: var(--color-wood-dark); margin-bottom: 12px;"></sl-icon>`}
                <span class="kancelaria-name">${item.title}</span>
              </div>
            `)}
          </div>
        </div>

        <div class="paper bank-section">
          <div class="account-name"> #zbieram punkty do nieba </div>
          <sl-icon name="piggy-bank" class="piggy-icon"></sl-icon>
          <div class="account-name">Parafia Rzymsko-katolicka pw. Matki Bożej Królowej Polski</div>
          <div class="account-number">10 1240 1444 1111 0000 0936 3511</div>
        </div>
      </div>
    `;
  }
}