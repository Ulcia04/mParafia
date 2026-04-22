import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';

@customElement('app-event-mock-detail')
export class AppEventMockDetail extends LitElement {

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('change-title', {
      detail: { title: 'Strona w przygotowaniu' },
      bubbles: true,
      composed: true
    }));
  }

  private _navHome() {
    window.history.pushState({}, '', '/mParafia/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
        color: var(--color-wood-dark);
      }

      .placeholder-content {
        background: var(--color-sand-light);
        padding: 40px 20px;
        border-radius: 12px;
        border: 2px dashed var(--color-wood-medium);
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
      }

      .button-group {
        display: flex;
        gap: 10px;
        margin-top: 20px;
        flex-wrap: wrap;
        justify-content: center;
      }

      sl-button[variant="default"]::part(base) {
        background-color: var(--color-sand-light) !important;
        color: var(--color-wood-dark) !important;
        border-color: var(--color-wood-medium) !important;
      }

      sl-button[variant="primary"]::part(base):hover,
      sl-button[variant="primary"]::part(base):active {
        filter: brightness(1.1) !important;
        background-color: var(--color-wood-dark) !important;
        border-color: var(--color-wood-dark) !important;
      }

      sl-button[variant="default"]::part(base):hover,
      sl-button[variant="default"]::part(base):active {
        background-color: var(--color-sand-light) !important;
        border-color: var(--color-wood-dark) !important;
        color: var(--color-wood-dark) !important;
        filter: brightness(0.95) !important;
      }

      sl-button::part(base):focus-visible {
        outline: none !important;
        box-shadow: 0 0 0 3px rgba(127, 69, 29, 0.2) !important;
      }

    `
  ];

  render() {
    return html`
      <div class="placeholder-content">
        <sl-icon name="info-circle" style="font-size: 3rem; color: var(--color-wood-medium);"></sl-icon>
        <h2>Strona w przygotowaniu</h2>
        <p>Tu znajdą się szczegółowe informacje o wybranej grupie lub wydarzeniu.</p>

        <div class="button-group">
          <sl-button variant="primary" @click=${this._navHome}>
            <sl-icon slot="prefix" name="house"></sl-icon>
            Strona Główna
          </sl-button>

          <sl-button variant="default" @click=${() => window.history.back()}>
            <sl-icon slot="prefix" name="arrow-left"></sl-icon>
            Wróć
          </sl-button>
        </div>
      </div>
    `;
  }
}