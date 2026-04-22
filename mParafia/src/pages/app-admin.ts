import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';

import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

import './app-admin-groups';
import './app-admin-announcements';
import './app-admin-events';

@customElement('app-admin')
export class AppAdmin extends LitElement {

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('change-title', {
      detail: { title: 'Panel Administratora' },
      bubbles: true, composed: true
    }));
  }

  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        padding: 20px;
        max-width: 900px; /* Lekko poszerzamy, żeby karty miały miejsce */
        margin: 0 auto;
      }

      .admin-container {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        overflow: hidden; 
      }

      sl-tab-group::part(nav) {
        background-color: var(--color-cookie-medium);
        border-bottom: 2px solid var(--color-wood-medium);
      }
      
      sl-tab::part(base) {
        color: var(--color-wood-dark);
        font-weight: 500;
        padding: 15px 20px;
      }

      sl-tab[active]::part(base) {
        font-weight: bold;
        border-bottom-color: var(--color-wood-dark);
        color: var(--color-wood-dark);
      }
    `
  ];

  render() {
    return html`
      <div class="admin-container">
        <sl-tab-group>
          
          <sl-tab slot="nav" panel="groups">
            <sl-icon name="people-fill" style="margin-right: 8px;"></sl-icon> Zarządzaj Grupami
          </sl-tab>
          
          <sl-tab slot="nav" panel="events">
            <sl-icon name="calendar3" style="margin-right: 8px;"></sl-icon> Wydarzenia
          </sl-tab>
          
        <sl-tab slot="nav" panel="announcements">
            <sl-icon name="journal-text" style="margin-right: 8px;"></sl-icon> Ogłoszenia
          </sl-tab>

          <sl-tab-panel name="groups">
            <app-admin-groups></app-admin-groups>
          </sl-tab-panel>

          <sl-tab-panel name="events">
            <app-admin-events></app-admin-events>
          </sl-tab-panel>

          <sl-tab-panel name="announcements">
            <app-admin-announcements></app-admin-announcements>
          </sl-tab-panel>
        </sl-tab-group>
      </div>
    `;
  }
}