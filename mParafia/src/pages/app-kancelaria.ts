import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';

@customElement('app-kancelaria')
export class AppKancelaria extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('change-title', {
      detail: { title: 'Kancelaria Parafialna' },
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

      .wrapper { display: flex; flex-direction: column; gap: 15px; }

      .paper {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        padding: 15px;
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

      .contact-list { display: flex; flex-direction: column; gap: 8px; margin-top: 5px; }
      .contact-item {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--color-wood-dark);
        text-decoration: none;
        font-size: 1rem;
        transition: color 0.2s ease;
      }
      .contact-item sl-icon { font-size: 1.25rem; color: var(--color-wood-medium); }

      @media (hover: hover) {
        .contact-item:hover { color: var(--color-wood-medium); }
      }
    `
  ];

  render() {
    return html`
      <div class="wrapper">
        <div class="paper">
          <div class="title-container">
            <sl-icon name="person-heart"></sl-icon>
            <h2>Godziny urzędowania</h2>
          </div>
          <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>
          <div class="content">
            <p><strong>W roku szkolnym:</strong><br>
            Poniedziałek, środa: 16.00 – 17.00<br>
            Piątek: 19.00 – 20.00</p>

            <p><strong>W wakacje:</strong><br>
            Czwartek: 16.00 – 17.00<br>
            Piątek: 19.00 – 20.00</p>

            <p><em>W szczególnych wypadkach po Mszy św. wieczornej.</em></p>
          </div>
        </div>

        <div class="paper">
          <div class="title-container">
            <sl-icon name="person-lines-fill"></sl-icon>
            <h2>Kontakt</h2>
          </div>
          <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>
          <div class="contact-list">
            <a href="tel:122622004" class="contact-item">
              <sl-icon name="telephone-fill"></sl-icon> 12 262 20 04
            </a>
            <a href="mailto:parafia@mbkp.eu" class="contact-item">
              <sl-icon name="envelope-fill"></sl-icon> parafia@mbkp.eu
            </a>
            <a href="https://www.facebook.com/profile.php?id=100077415243903" target="_blank" rel="noopener noreferrer" class="contact-item">
              <sl-icon name="facebook"></sl-icon> Parafia na Facebooku
            </a>
          </div>
        </div>

        <div class="paper bank-section">
          <div class="account-name"> #zbieram punkty do nieba </div>
          <sl-icon name="piggy-bank" class="piggy-icon"></sl-icon>
          <div class="account-name">Parafia Rzymsko-katolicka pw. Matki Bożej Królowej Polski</div>
          <sl-divider style="--color: var(--color-wood-medium); margin: 15px 0;"></sl-divider>
          <div class="account-number">10 1240 1444 1111 0000 0936 3511</div>
          <p style="margin-top: 10px; font-size: 0.9rem; color: var(--color-wood-medium);">Bank Pekao S.A.</p>
        </div>
      </div>
    `;
  }
}