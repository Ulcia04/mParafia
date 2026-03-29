import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  connectedCallback() {
    super.connectedCallback();
    const event = new CustomEvent('change-title', {
      detail: { title: 'Strona Główna' },
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(event);
  }

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

      /* --- STYLE DLA LOGO --- */
      .logo-container {
        text-align: center;
        margin-bottom: 20px;
      }

      .logo-img {
        width: 90px;
        border-radius: 22px;
        box-shadow: 0 4px 15px rgba(127, 69, 29, 0.3);
      }

      /* --- STYLE DLA SIATKI KAFELKÓW --- */
      .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        width: 100%;
        max-width: 500px;
      }

      /* --- STYLE DLA POJEDYNCZEGO KAFELKA --- */
      sl-button.tile-button::part(base) {
        background-color: var(--color-wood-dark);
        border-color: var(--color-wood-dark);
        transition: all 0.2s ease;
        padding: 0;
        height: 110px;
        width: 100%;
      }

      sl-button.tile-button::part(base):hover,
      sl-button.tile-button::part(base):active {
        background-color: var(--color-wood-medium);
        border-color: var(--color-wood-medium);
        transform: scale(0.98);
      }

      sl-button.tile-button::part(label) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        gap: 8px;
        padding-top: 4px;
      }

      sl-button.tile-button sl-icon {
        color: var(--color-sand-light);
        font-size: 28px;
      }

      sl-button.tile-button span {
        color: var(--color-sand-light);
        font-weight: 500;
        font-size: 15px;
      }

      /* --- STYLE DLA SEKCJI INSTALACJI PWA --- */
      .install-section {
        margin-top: 20px;
        width: 100%;
        max-width: 400px;
        display: flex;
        justify-content: center;
      }

      sl-button.install-btn::part(base) {
        width: 100%;
        color: var(--color-sand-light);
        justify-content: center;
      }

      sl-button.install-btn sl-icon {
        color: var(--color-sand-light);
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

  private handleNavigation(path: string) {
    const base = (import.meta as any).env.BASE_URL;
    const fullPath = base === '/' ? path : base + path.substring(1);
    window.history.pushState({}, '', fullPath);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  render() {
    return html`
      <main>

        <div class="logo-container">
          <img src="./icons/icon_512.png" class="logo-img" alt="Ikona mParafia">
        </div>

        <div class="grid-container">

          <sl-button class="tile-button" @click="${() => this.handleNavigation('/kalendarz')}">
            <sl-icon name="calendar3"></sl-icon>
            <span>Kalendarz</span>
          </sl-button>

          <sl-button class="tile-button" @click="${() => this.handleNavigation('/ogloszenia')}">
            <sl-icon name="journal-text"></sl-icon>
            <span>Ogłoszenia</span>
          </sl-button>

          <sl-button class="tile-button" @click="${() => this.handleNavigation('/wydarzenia')}">
            <sl-icon name="people-fill"></sl-icon>
            <span>Wydarzenia</span>
          </sl-button>

          <sl-button class="tile-button" @click="${() => this.handleNavigation('/grupy')}">
            <sl-icon name="star-fill"></sl-icon>
            <span>Grupy</span>
          </sl-button>

          <sl-button class="tile-button" @click="${() => this.handleNavigation('/kancelaria')}">
            <sl-icon name="person-lines-fill"></sl-icon>
            <span>Kancelaria</span>
          </sl-button>

          <sl-button class="tile-button" @click="${() => this.handleNavigation('/dojazd')}">
            <sl-icon name="geo-alt"></sl-icon>
            <span>Dojazd</span>
          </sl-button>

        </div>

        ${this.deferredPrompt ? html`
          <div class="install-section">
            <sl-button variant="primary" pill class="install-btn" @click="${this.installApp}">
              <sl-icon slot="prefix" name="download"></sl-icon>
              Zainstaluj mParafię
            </sl-button>
          </div>
        ` : null}
      </main>
    `;
  }
}