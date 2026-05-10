import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';

@customElement('app-spowiedz')
export class AppSpowiedz extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('change-title', {
      detail: { title: 'Sakrament Pokuty' },
      bubbles: true, composed: true
    }));
  }

  static styles = [
    sharedStyles,
    css`
      :host { display: block; padding: 10px; max-width: 900px; margin: 0 auto; box-sizing: border-box; }
      .paper { background-color: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; padding: 25px; }
      .title-container { display: flex; align-items: center; gap: 12px; color: var(--color-wood-dark); margin-bottom: 10px; }
      .title-container h2 { margin: 0; font-size: 1.4rem; }
      .content { color: var(--color-wood-dark); line-height: 1.8; font-size: 1.1rem; }
      .item { margin-bottom: 15px; display: flex; gap: 10px; align-items: flex-start; }
      .item sl-icon { color: var(--color-wood-medium); font-size: 1.3rem; margin-top: 4px; }
    `
  ];

  render() {
    return html`
      <div class="paper">
        <div class="title-container">
          <sl-icon name="chat-heart"></sl-icon>
          <h2>Okazja do spowiedzi św.</h2>
        </div>
        <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>
        <div class="content">
          <div class="item">
            <sl-icon name="check2-circle"></sl-icon>
            <div><strong>Dni powszednie:</strong><br>30 min przed Mszą św.</div>
          </div>
          <div class="item">
            <sl-icon name="check2-circle"></sl-icon>
            <div><strong>Niedziela:</strong><br>W czasie każdej Mszy św.</div>
          </div>
          <div class="item">
            <sl-icon name="check2-circle"></sl-icon>
            <div><strong>I piątek miesiąca:</strong><br>Od 17.00 do 18.00 oraz podczas wieczornej adoracji.</div>
          </div>
        </div>
      </div>
    `;
  }
}