import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from '../styles/shared-styles';

@customElement('app-szablon') 
export class AppHome extends LitElement {
  connectedCallback() {
    super.connectedCallback();

    const event = new CustomEvent('change-title', {
      detail: { title: 'Wklej tu swój tytuł' }, 
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