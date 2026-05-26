import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from '../styles/shared-styles';

@customElement('calendar-item')
export class CalendarItem extends LitElement {

  @property({ type: String }) time = '';
  @property({ type: String }) name = '';
  @property({ type: String }) targetUrl = '';
  @property({ type: String }) category = 'wydarzenie';
  @property({ type: Boolean }) multiline = false;
  @property({ type: String }) groupColor = '';

  static styles = [
    styles,
    css`
      :host {
        display: block;
        width: 100%;
      }

      .item-container {
        display: flex;
        align-items: center;
        gap: 4px;
        color: var(--color-sand-light);
        padding: var(--item-padding, 2px 4px);
        border-radius: 4px;
        font-size: var(--item-font-size, 10px);
        width: 100%;
        box-sizing: border-box;
        cursor: pointer;
        transition: transform 0.1s, filter 0.1s;
        margin-bottom: 3px;
        box-shadow: 0 2px 4px rgba(127, 69, 29, 0.15);
        /* Używamy zmiennej przekazanej przez atrybut style, z fallbackiem do domyślnego koloru, wymuszając priorytet */
        background-color: var(--local-bg-color, var(--color-wood-dark)) !important;
      }

      .item-container.is-multiline {
        align-items: flex-start;
        padding: 4px 6px;
      }

      .item-container:active {
        transform: scale(0.97);
        filter: brightness(0.9);
      }

      .time {
        font-weight: bold;
        white-space: nowrap;
      }

      .item-container.is-multiline .time {
        margin-top: 1px;
      }

      .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        flex: 1;
        min-width: 0;
      }

      .item-container.is-multiline .name {
        white-space: normal;
        overflow: visible;
        line-height: 1.3;
        word-break: break-word;
        overflow-wrap: break-word;
      }

      sl-icon {
        font-size: 10px;
        opacity: 0.8;
      }

      .item-container.is-multiline sl-icon {
        margin-top: 2px;
      }
    `
  ];

  private handleClick() {
    if (!this.targetUrl) return;
    const fullPath = '/mParafia/mock-event';
    window.history.pushState({}, '', fullPath);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  render() {
    const isEvent = this.category === 'wydarzenie';
    const isIntention = this.category === 'intencja';

    // Ustalamy kolor tła - jeśli brak przekazanego koloru, Lit użyje fallbacku z CSS (var(--color-wood-dark))
    const bgColor = this.groupColor ? this.groupColor : '';

    return html`
      <div
        class="item-container ${this.multiline ? 'is-multiline' : ''}"
        style="${bgColor ? `--local-bg-color: ${bgColor};` : ''}"
        @click="${this.handleClick}"
      >
        <span class="time">${this.time}</span>
        <span class="name">${this.name}</span>

        ${isIntention
          ? html`<sl-icon name="bookmark-fill"></sl-icon>`
          : isEvent
            ? html`<sl-icon name="star-fill"></sl-icon>`
            : html`<sl-icon name="people-fill"></sl-icon>`
        }
      </div>
    `;
  }
}