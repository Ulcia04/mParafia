import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from '../styles/shared-styles';

@customElement('app-events') // <-- !!!!!!!!!!! Koniecznie zmienic na nazwe pliku np
export class AppHome extends LitElement {
  connectedCallback() {
    super.connectedCallback();

    const event = new CustomEvent('change-title', {
      detail: { title: 'Wydarzenia' }, // <-- TYTUŁ
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(event);
  }

  static styles = [
    styles,
    css`
      /* style  css tylko dla tej konkretnej podstrony */
    `
  ];

  render() {
    return html`
      <div>
        <!-- wnętrze podstrony -->
      </div>
    `;
  }
}