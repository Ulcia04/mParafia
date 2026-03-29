import { LitElement, css, html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
// @ts-ignore
import { Router } from '@vaadin/router';

import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
const basePath = (import.meta as any).env.BASE_URL;
setBasePath(`${basePath}shoelace-assets`);

import { styles } from './styles/shared-styles';

// IMPORTY WIDOKÓW: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import './pages/app-home';
import './pages/app-calendar';
import './pages/app-groups';
import './pages/app-events';
import './pages/app-event-mock-detail';

@customElement('app-index')
export class AppIndex extends LitElement {
  @query('sl-drawer') drawer!: any;
  @state() private pageTitle = 'mParafia';

  private touchStartX = 0;
  private touchStartY = 0;
  private touchEndX = 0;
  private touchEndY = 0;

  static styles = [
    styles,
    css`
      * {
        -webkit-tap-highlight-color: transparent !important;
      }

      sl-button::part(base),
      sl-icon-button::part(base),
      sl-drawer::part(base),
      sl-drawer::part(panel) {
        -webkit-tap-highlight-color: transparent !important;
        outline: none !important;
      }

      .app-layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: var(--color-sand-light);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: calc(10px + env(safe-area-inset-top));
        padding-bottom: 10px;
        padding-left: 16px;
        padding-right: 16px;
        background-color: var(--color-sand-light);
        color: var(--color-wood-dark);
        border-bottom: none;
        box-shadow: 0 4px 15px rgba(127, 69, 29, 0.15);

        position: sticky;
        top: 0;
        z-index: 100;
      }

      header h1 {
        margin: 0;
        font-size: 1.2rem;
        font-weight: bold;
      }

      sl-icon-button {
        font-size: 1.5rem;
        color: var(--color-wood-dark);
      }

      sl-icon-button::part(base):hover {
        color: var(--color-wood-medium);
      }

      sl-drawer::part(panel) {
        background-color: var(--color-sand-light);
      }

      sl-drawer::part(header) {
        color: var(--color-wood-dark);
        font-weight: bold;
        font-size: 1.2rem;
        padding-top: calc(0px + env(safe-area-inset-top));
      }

      sl-drawer::part(body) {
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
      }

      .menu-links {
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1;
      }

      .bottom-links {
        display: flex;
        flex-direction: column;
      }

      main {
        flex: 1;
        padding: 16px;
        display: flex;
        flex-direction: column;
      }

      sl-divider {
        --color: transparent;
        border-bottom: 1px solid rgba(255, 233, 212, 0.8);
        box-shadow: 0 4px 6px rgba(127, 69, 29, 0.2);
        margin: 15px 0;
      }

      sl-drawer {
        --size: 260px;
      }

      .menu-links sl-button,
      .bottom-links sl-button {
        width: 100%;
        justify-content: flex-start;
        transition: filter 0.2s ease;
      }

      .menu-links sl-button::part(base),
      .bottom-links sl-button::part(base) {
        color: var(--color-wood-dark) !important;
      }

      .menu-links sl-button::part(base):active,
      .bottom-links sl-button::part(base):active {
        filter: brightness(1.5) !important;
      }

      @media (hover: hover) {
        .menu-links sl-button::part(base):hover,
        .bottom-links sl-button::part(base):hover {
          filter: brightness(1.5) !important;
        }
      }

      .menu-links sl-icon,
      .bottom-links sl-icon {
        color: var(--color-wood-dark);
      }
    `
  ];

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('touchstart', this.handleTouchStart, { passive: true });
    window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
    window.addEventListener('touchend', this.handleTouchEnd, { passive: true });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('touchstart', this.handleTouchStart);
    window.removeEventListener('touchmove', this.handleTouchMove);
    window.removeEventListener('touchend', this.handleTouchEnd);
  }

  private handleTouchStart = (e: TouchEvent) => {
    this.touchStartX = e.changedTouches[0].screenX;
    this.touchStartY = e.changedTouches[0].screenY;
  }

  private handleTouchMove = (e: TouchEvent) => {
    if (this.touchStartX <= 30) {
      e.preventDefault();
    }
  }

  private handleTouchEnd = (e: TouchEvent) => {
    this.touchEndX = e.changedTouches[0].screenX;
    this.touchEndY = e.changedTouches[0].screenY;
    this.checkSwipe();
  }

  private checkSwipe() {
    const distanceX = this.touchEndX - this.touchStartX;
    const distanceY = this.touchEndY - this.touchStartY;
    if (Math.abs(distanceY) > Math.abs(distanceX)) {
      return;
    }

    const startedAtLeftEdge = this.touchStartX <= 40;
    if (startedAtLeftEdge && distanceX > 50 && this.drawer && !this.drawer.open) {
      this.drawer.show();
    }

    if (this.drawer && this.drawer.open && distanceX < -50) {
      this.drawer.hide();
    }
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('#router-outlet');
    const base = (import.meta as any).env.BASE_URL;
    // @ts-ignore
    const router = new Router(outlet, { baseUrl: base });

    router.setRoutes([ // ROUTSY !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      { path: '/', component: 'app-home' },
      { path: '/kalendarz', component: 'app-calendar' },
      { path: '/grupy', component: 'app-groups' },
      { path: '/wydarzenia', component: 'app-events' },
      { path: '/mock-event', component: 'app-event-mock-detail'},
      { path: '(.*)', redirect: '/' }
    ]);
  }

  private handleTitleChange(e: CustomEvent) {
    this.pageTitle = e.detail.title;
  }

  private openMenu() {
    this.drawer.show();
  }

  private handleNavigation(path: string) {
    this.drawer.hide();
    const base = (import.meta as any).env.BASE_URL;
    const fullPath = base === '/' ? path : base + path.substring(1);
    window.history.pushState({}, '', fullPath);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  render() {
    return html`
      <div class="app-layout">

        <sl-drawer label="Menu mParafii" placement="start">

          <div class="menu-links">
            <sl-button variant="text" size="large" @click="${() => this.handleNavigation('/')}">
              <sl-icon slot="prefix" name="house"></sl-icon> Strona Główna
            </sl-button>
            <sl-button variant="text" size="large" @click="${() => this.handleNavigation('/kalendarz')}">
              <sl-icon slot="prefix" name="calendar3"></sl-icon> Kalendarz
            </sl-button>
            <sl-button variant="text" size="large" @click="${() => this.handleNavigation('/grupy')}">
              <sl-icon slot="prefix" name="people-fill"></sl-icon> Grupy
            </sl-button>
            <sl-button variant="text" size="large" @click="${() => this.handleNavigation('/wydarzenia')}">
              <sl-icon slot="prefix" name="star-fill"></sl-icon> Wydarzenia
            </sl-button>
          </div>

          <div class="bottom-links">
            <sl-divider></sl-divider>
            <sl-button variant="text" size="large" @click="${() => this.handleNavigation('/ustawienia')}">
              <sl-icon slot="prefix" name="gear"></sl-icon> Ustawienia
            </sl-button>
          </div>

        </sl-drawer>

        <header>
          <sl-icon-button name="list" label="Menu" @click="${this.openMenu}"></sl-icon-button>
          <h1>${this.pageTitle}</h1>
          <sl-icon-button name="bell" label="Powiadomienia"></sl-icon-button>
        </header>

        <main id="router-outlet" @change-title="${this.handleTitleChange}"> </main>

      </div>
    `;
  }
}