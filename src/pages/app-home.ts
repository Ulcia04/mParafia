import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  @state() private deferredPrompt: any = null;

static styles = [
    styles,
    css`
    main {
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }

    sl-button.tile-button::part(base) {
      background-color: var(--color-wood-dark);
      border-color: var(--color-wood-dark);
      transition: all 0.2s ease;
    }

    sl-button.tile-button::part(base):hover,
    sl-button.tile-button::part(base):active {
      background-color: var(--color-wood-medium);
      border-color: var(--color-wood-medium);
      transform: scale(0.98);
    }

    sl-button.tile-button sl-icon,
    sl-button.tile-button span {
      color: var(--color-sand-light); 
    }

    sl-button span {
      font-weight: 500;
    }

    .grid-container {
      display: grid; 
      grid-template-columns: 1fr 1fr; 
      gap: 15px; 
      width: 100%;
      max-width: 500px;
    }

    sl-card {
      width: 100%;
      max-width: 500px;
      --border-radius: 16px;
      border: none;
      --sl-panel-border-color: transparent; 
      --sl-panel-border-width: 0px;
      --sl-color-neutral-0: var(--color-wood-medium); 
      --sl-panel-background-color: var(--color-wood-medium);
      box-shadow: none; 
      outline: none;
    }

    sl-card::part(header),
    sl-card::part(body) {
      color: var(--color-wood-dark);
    }

    sl-card::part(header) {
      border-bottom: 2px solid var(--color-wood-dark);
    }

    sl-card [slot="header"] sl-icon {
      color: var(--color-wood-dark);
    }

    .install-section {
      margin-top: 20px;
      width: 100%;
      max-width: 400px;
    }
  `
  ];

  constructor() {
    super();
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
    });

    window.addEventListener('appinstalled', () => {
      this.deferredPrompt = null;
    });
  }

  async installApp() {
    if (!this.deferredPrompt) return;
    
    this.deferredPrompt.prompt();
    const { outcome } = await this.deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      this.deferredPrompt = null;
    }
  }

 render() {
    return html`
      <main>
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="./assets/icons/icon_512.png" style="width: 90px; border-radius: 22px; box-shadow: 0 4px 15px rgba(127, 69, 29, 0.3);">
          <h1 style="color: var(--color-wood-dark); margin-top: 15px;">mParafia</h1>
        </div>

        <sl-card>
          <div slot="header" style="font-weight: bold; display: flex; align-items: center; gap: 8px;">
            <sl-icon name="megaphone"></sl-icon> 
            Ogłoszenia parafialne
          </div>
          Zapraszamy na nabożeństwo majowe o godzinie 18:00.
        </sl-card>

        <div class="grid-container">
          
          <sl-button class="tile-button" style="height: 110px;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <sl-icon name="calendar3" style="font-size: 28px;"></sl-icon>
              <span>Msze św.</span>
            </div>
          </sl-button>

          <sl-button class="tile-button" style="height: 110px;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <sl-icon name="journal-text" style="font-size: 28px;"></sl-icon>
              <span>Intencje</span>
            </div>
          </sl-button>

          <sl-button class="tile-button" style="height: 110px;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <sl-icon name="person-lines-fill" style="font-size: 28px;"></sl-icon>
              <span>Kancelaria</span>
            </div>
          </sl-button>

          <sl-button class="tile-button" style="height: 110px;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <sl-icon name="geo-alt" style="font-size: 28px;"></sl-icon>
              <span>Dojazd</span>
            </div>
          </sl-button>

        </div>

        ${this.deferredPrompt ? html`
          <div class="install-section">
            <sl-button variant="primary" pill @click="${this.installApp}" style="width: 100%;">
              <sl-icon slot="prefix" name="download"></sl-icon>
              Zainstaluj mParafię
            </sl-button>
          </div>
        ` : null}
      </main>
    `;
  }
}