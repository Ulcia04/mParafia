import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';
import { apiFetch } from '../utils/api';

import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import './app-admin-groups';
import './app-admin-announcements';
import './app-admin-events';
import './app-admin-qa';
import './app-admin-kancelaria';
import './app-admin-admins';

@customElement('app-admin')
export class AppAdmin extends LitElement {
  @state() private loggingOut = false;

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('change-title', { detail: { title: 'Panel Administratora' }, bubbles: true, composed: true }));
    window.addEventListener('popstate', this.syncTabWithUrl);
  }

  disconnectedCallback() {
    window.removeEventListener('popstate', this.syncTabWithUrl);
    super.disconnectedCallback();
  }

async firstUpdated() {
      setTimeout(() => {
      this.syncTabWithUrl();
    }, 50);
  }

  private syncTabWithUrl = () => {
    const tabGroup = this.shadowRoot?.querySelector('sl-tab-group');
    if (!tabGroup) return;

    const path = window.location.pathname;
    if (path.includes('/events')) tabGroup.show('events');
    else if (path.includes('/announcements')) tabGroup.show('announcements');
    else if (path.includes('/qa')) tabGroup.show('qa');
    else if (path.includes('/kancelaria')) tabGroup.show('kancelaria');
    else if (path.includes('/admini')) tabGroup.show('admini');
    else tabGroup.show('groups');
  }

  private handleTabChange(e: CustomEvent) {
    const panel = e.detail.name;
    const base = (import.meta as any).env.BASE_URL || '/';
    const targetPath = panel === 'groups' ? '/admin' : `/admin/${panel}`;
    const fullPath = base === '/' ? targetPath : base + targetPath.substring(1);
    window.history.pushState({}, '', fullPath);
  }

  static styles = [
    sharedStyles,
    css`
      :host { display: block; padding: 10px; max-width: 900px; width: 100%; margin: 0 auto; box-sizing: border-box; }
      .admin-wrapper { position: relative; width: 100%; }
      .btn-logout {
        margin-left: auto;
        margin-right: 15px;
        align-self: center;
      }

      .btn-logout::part(base) {
        background-color: var(--color-wood-dark);
        border-color: var(--color-wood-dark);
        color: var(--color-sand-light) !important;
        font-weight: 600;
        transition: all 0.3s ease;
      }

      .btn-logout::part(label),
      .btn-logout::part(prefix) {
        color: var(--color-sand-light) !important;
      }

      .btn-logout::part(base):hover {
        background-color: var(--color-wood-medium);
        border-color: var(--color-wood-medium);
      }
      .admin-container { background-color: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(127, 69, 29, 0.1); }
      sl-tab-group::part(nav) { background-color: var(--color-cookie-medium); border-bottom: 2px solid var(--color-wood-medium); }
      sl-tab::part(base) { color: var(--color-wood-dark); font-weight: 500; padding: 15px 20px; transition: background-color 0.2s; }
      sl-tab[active]::part(base) { font-weight: bold; border-bottom-color: var(--color-wood-dark); color: var(--color-wood-dark); background-color: var(--color-sand-light); }
      sl-tab-panel::part(base) { padding: 25px 15px; }
    `
  ];

  private async handleLogout() {
    this.loggingOut = true;
    try {
      await apiFetch('/admin/logout', { method: 'POST' });
    } catch (error) {
      console.error('Błąd serwera podczas wylogowywania:', error);
    } finally {
      localStorage.removeItem('isAdmin');
      localStorage.removeItem('isSuperAdmin');
      localStorage.removeItem('allowedGroups');
      const base = (import.meta as any).env.BASE_URL || '/';
      const targetPath = '/admin-login';
      const fullPath = base === '/' ? targetPath : base + targetPath.substring(1);
      window.location.href = fullPath;
    }
  }

  render() {
    return html`
      <div class="admin-wrapper">
        <div class="admin-container">
          <sl-tab-group @sl-tab-show=${this.handleTabChange}>
            <sl-tab slot="nav" panel="groups"><sl-icon name="people-fill" style="margin-right: 8px;"></sl-icon> Grupy</sl-tab>
            <sl-tab slot="nav" panel="events"><sl-icon name="star-fill" style="margin-right: 8px;"></sl-icon> Wydarzenia</sl-tab>
            <sl-tab slot="nav" panel="announcements"><sl-icon name="megaphone-fill" style="margin-right: 8px;"></sl-icon> Ogłoszenia</sl-tab>
            <sl-tab slot="nav" panel="qa"><sl-icon name="chat-quote-fill" style="margin-right: 8px;"></sl-icon> Q&A</sl-tab>
            <sl-tab slot="nav" panel="kancelaria"><sl-icon name="journal-bookmark-fill" style="margin-right: 8px;"></sl-icon> Kancelaria</sl-tab>
            <sl-tab slot="nav" panel="admini"><sl-icon name="shield-lock-fill" style="margin-right: 8px;"></sl-icon> Admini</sl-tab>

            <sl-button slot="nav" class="btn-logout" size="small" ?loading="${this.loggingOut}" @click="${this.handleLogout}">
              <sl-icon slot="prefix" name="box-arrow-right"></sl-icon>
              Wyloguj się
            </sl-button>

            <sl-tab-panel name="groups"><app-admin-groups></app-admin-groups></sl-tab-panel>
            <sl-tab-panel name="events"><app-admin-events></app-admin-events></sl-tab-panel>
            <sl-tab-panel name="announcements"><app-admin-announcements></app-admin-announcements></sl-tab-panel>
            <sl-tab-panel name="qa"><app-admin-qa></app-admin-qa></sl-tab-panel>
            <sl-tab-panel name="kancelaria"><app-admin-kancelaria></app-admin-kancelaria></sl-tab-panel>
            <sl-tab-panel name="admini"><app-admin-admins></app-admin-admins></sl-tab-panel>
          </sl-tab-group>
        </div>
      </div>
    `;
  }
}