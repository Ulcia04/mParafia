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

  static styles = [
    styles,
    css`
      .item-container {
        display: flex;
        align-items: center;
        gap: 4px;
        color: var(--color-sand-light);
        padding: 2px 4px;
        border-radius: 4px;
        font-size: 10px;
        cursor: pointer;
        transition: transform 0.1s, filter 0.1s;
        margin-bottom: 3px;
        box-shadow: 0 2px 4px rgba(127, 69, 29, 0.15);
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
      }

      .item-container.is-multiline .name {
        white-space: normal;
        overflow: visible;
        line-height: 1.3;
      }

      sl-icon {
        font-size: 10px;
        opacity: 0.8;
      }

      .item-container.is-multiline sl-icon {
        margin-top: 2px;
      }

      .wydarzenie { background-color: var(--color-wood-dark); }
      .domowy { background-color: #B87333; }
      .lso { background-color: #4A69BD; }
      .schola { background-color: #D4AF37; }
      .biblijna { background-color: #6B8E23; }
      .oaza { background-color: #829583; }
      .rada { background-color: #535C68; }
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
      <div class="item-container ${this.category} ${this.multiline ? 'is-multiline' : ''}" @click="${this.handleClick}">
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