import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

@customElement('app-dojazd')
export class AppDojazd extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('change-title', {
      detail: { title: 'Lokalizacja i Dojazd' },
      bubbles: true, composed: true
    }));
  }

  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        padding: 10px;
        max-width: 900px;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .paper {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .address-link {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 20px;
        color: var(--color-wood-dark);
        text-decoration: none;
        transition: background-color 0.2s ease;
      }

      @media (hover: hover) {
        .address-link:hover {
          background-color: rgba(127, 69, 29, 0.05);
        }
      }

      .address-link sl-icon {
        font-size: 2.2rem;
        color: var(--color-wood-medium);
      }

      .address-text {
        font-size: 1.2rem;
        line-height: 1.4;
      }

      .address-text strong {
        display: block;
        color: var(--color-wood-dark);
      }

      .hint {
        padding: 10px 20px;
        font-size: 0.85rem;
        color: var(--color-wood-medium);
        background-color: var(--color-cookie-medium);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .map-container {
        width: 100%;
        height: 400px;
        border-top: 2px solid var(--color-wood-medium);
        position: relative;
        overflow: hidden;
        background-color: #e5e3df;
      }

      iframe {
        position: absolute;
        top: -10px;
        left: -50px;
        width: calc(100% + 100px);
        height: calc(100% + 70px);
        border: none;
      }
    `
  ];

  render() {
    const destinationName = encodeURIComponent('Kościół MB Królowej Polski w Nowym Ruczaju, Zamiejska 6, 30-382 Kraków');
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destinationName}`;

    return html`
      <div class="paper">

        <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="address-link">
          <sl-icon name="geo-alt-fill"></sl-icon>
          <div class="address-text">
            <strong>Parafia MB Królowej Polski</strong>
            ul. Zamiejska 6, 30-382 Kraków
          </div>
          <sl-icon name="chevron-right" style="margin-left: auto; font-size: 1.2rem;"></sl-icon>
        </a>

        <div class="hint">
          <sl-icon name="info-circle"></sl-icon>
          Kliknij adres powyżej, aby wyznaczyć trasę w Google Maps.
        </div>

        <div class="map-container">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=19.895,50.020,19.925,50.030&layer=mapnik&marker=50.0253,19.9095"
            allowfullscreen>
          </iframe>
        </div>

      </div>
    `;
  }
}