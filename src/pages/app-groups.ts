import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';

interface ParishGroup {
  id: string;
  name: string;
  photoUrl: string;
}

@customElement('app-groups')
export class AppGroups extends LitElement {

  @state() private groups: ParishGroup[] = [
    { id: 'domowy', name: 'Domowy Kościół', photoUrl: 'dk_small.jpg' },
    { id: 'lso', name: 'Liturgiczna Służba Ołtarza', photoUrl: 'lso_small.jpg' },
    { id: 'schola', name: 'Schola "Aniołki Królowej"', photoUrl: 'schola_small.jpg' },
    { id: 'biblijna', name: 'Grupa biblijna', photoUrl: 'biblijna_small.jpg' },
    { id: 'oaza', name: 'Oaza', photoUrl: 'oaza_small.png' },
    { id: 'rada', name: 'Rada Parafialna', photoUrl: 'rada_small.png' },
    { id: 'odb', name: 'Oaza Dzieci Bożych', photoUrl: 'odb_small.png' },
  ];

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('change-title', {
      detail: { title: 'Grupy Parafialne' },
      bubbles: true, composed: true
    }));
  }

  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        padding: 15px;
        max-width: 800px;
        margin: 0 auto;
      }

      .groups-grid {
        display: flex;
        flex-direction: column;
        gap: 25px;
      }

      .group-card {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        padding: 15px;
        display: flex;
        align-items: center;
        gap: 15px;
        cursor: pointer;
        transition: transform 0.2s ease, background-color 0.2s ease;
      }

      .group-card:active {
        transform: scale(0.98);
        background-color: var(--color-cookie-medium);
      }

      @media (hover: hover) {
        .group-card:hover {
          background-color: var(--color-cookie-medium);
        }
      }

      .group-photo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid var(--color-wood-dark);
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        flex-shrink: 0;
      }

      .group-photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .group-info h3 {
        margin: 0;
        color: var(--color-wood-dark);
        font-size: 1.1rem;
      }
    `
  ];

  render() {
    return html`
      <div class="groups-grid">
        ${this.groups.map(group => html`
          <div class="group-card" @click=${() => window.location.href = '/mParafia/mock-event'}>
            <div class="group-photo">
              <img src="/mParafia/photos/${group.photoUrl}" alt="${group.name}">
            </div>
            <div class="group-info">
              <h3>${group.name}</h3>
            </div>
            <sl-icon name="chevron-right" style="margin-left: auto; color: var(--color-wood-medium);"></sl-icon>
          </div>
        `)}
      </div>
    `;
  }
}