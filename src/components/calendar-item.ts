import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from '../styles/shared-styles';

@customElement('calendar-item')
export class CalendarItem extends LitElement {

  @property({ type: String }) time = '';
  @property({ type: String }) name = '';
  @property({ type: String }) targetUrl = '';

  @property({ type: String }) category = 'wydarzenie';

  static styles = [
    styles,
    css`
      .item-container {
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--color-sand-light);
        padding: 4px 8px;
        border-radius: 6px;
        font-size: 12px;
        cursor: pointer;
        transition: transform 0.1s, filter 0.1s;
        margin-bottom: 4px;
        box-shadow: 0 2px 4px rgba(127, 69, 29, 0.15);
      }

      .item-container:active {
        transform: scale(0.97);
        filter: brightness(0.9);
      }

      .time {
        font-weight: bold;
        white-space: nowrap;
      }

      .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        flex: 1;
      }

      sl-icon {
        font-size: 10px;
        opacity: 0.8;
      }

      /* --- PALETA KOLORÓW GRUP --- */

      /* 0. Jednorazowe wydarzenie (Ciemne Drewno z Twojej głównej palety) */
      .wydarzenie { background-color: var(--color-wood-dark); }

      /* 1. Domowy Kościół (Ciepły, rdzawy brąz/miedź) */
      .domowy { background-color: #B87333; }

      /* 2. Liturgiczna Służba Ołtarza / LSO (Solemnny, stonowany granat) */
      .lso { background-color: #4A69BD; }

      /* 3. Schola "Aniołki Królowej" (Muted, zgaszony ochrowy żółty/złoty) */
      .schola { background-color: #D4AF37; }

      /* 4. Grupa biblijna (Głęboki, oliwkowy zielony) */
      .biblijna { background-color: #6B8E23; }

      /* 5. Oaza (Zgaszony, jaśniejszy sage green) */
      .oaza { background-color: #829583; }

      /* 6. Rada Parafialna (Cool, stalowy szary/niebieski) */
      .rada { background-color: #535C68; }

      /* 7. Oaza Dzieci Bożych (Muted, zgaszony różowy/łososiowy) */
      .odb { background-color: #C98B8B; }
    `
  ];

  private handleClick() {
    if (!this.targetUrl) return;

    const base = (import.meta as any).env.BASE_URL;
    const fullPath = base === '/' ? this.targetUrl : base + this.targetUrl.substring(1);

    window.history.pushState({}, '', fullPath);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  render() {
    const isEvent = this.category === 'wydarzenie';

    return html`

<div class="item-container ${this.category}" @click="${this.handleClick}">
        <span class="time">${this.time}</span>
        <span class="name">${this.name}</span>


${isEvent
          ? html`<sl-icon name="star-fill"></sl-icon>`
          : html`<sl-icon name="people-fill"></sl-icon>`
        }
      </div>
    `;
  }
}