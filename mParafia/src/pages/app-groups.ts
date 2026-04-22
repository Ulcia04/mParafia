import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';

interface ParishGroup {
  id: number;
  name: string;
  description?: string; 
}

@customElement('app-groups')
export class AppGroups extends LitElement {

  @state() private groups: ParishGroup[] = [];
  @state() private isLoading = true; 

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('change-title', {
      detail: { title: 'Grupy Parafialne' },
      bubbles: true, composed: true
    }));
  }

  async firstUpdated() {
    await this.fetchGroups();
  }

  async fetchGroups() {
    try {
      const response = await fetch('http://localhost:3000/api/groups');
      if (!response.ok) throw new Error('Błąd połączenia z serwerem');
      this.groups = await response.json();
    } catch (error) {
      console.error('Nie udało się pobrać grup:', error);
    } finally {
      this.isLoading = false;
    }
  }

  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        padding: 15px;
        max-width: 800px;
        margin: 0 auto;
      }

      .groups-grid {
        display: flex;
        flex-direction: column;
        gap: 25px;
      }

      .group-card {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        padding: 15px;
        display: flex;
        align-items: center;
        gap: 15px;
        cursor: pointer;
        transition: transform 0.2s ease, background-color 0.2s ease;
      }

      .group-card:active {
        transform: scale(0.98);
        background-color: var(--color-cookie-medium);
      }

      @media (hover: hover) {
        .group-card:hover {
          background-color: var(--color-cookie-medium);
        }
      }

      .group-photo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid var(--color-wood-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        flex-shrink: 0;
      }

      .group-info h3 {
        margin: 0;
        color: var(--color-wood-dark);
        font-size: 1.1rem;
      }

      .group-desc {
        margin: 4px 0 0 0;
        font-size: 0.85rem;
        color: #666;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      
      .center-content {
        display: flex;
        justify-content: center;
        padding: 40px;
        color: var(--color-wood-medium);
      }
    `
  ];

  render() {
    if (this.isLoading) {
      return html`
        <div class="center-content">
          <sl-spinner style="font-size: 2rem;"></sl-spinner>
        </div>
      `;
    }
    
    if (this.groups.length === 0) {
      return html`
        <div class="center-content">
          Brak grup parafialnych w bazie danych.
        </div>
      `;
    }

    return html`
      <div class="groups-grid">
        ${this.groups.map(group => html`
          <div class="group-card" @click=${() => window.location.href = `/mParafia/grupa?id=${group.id}`}>
            
            <div class="group-photo">
              <sl-icon name="people-fill" style="font-size: 24px; color: var(--color-wood-dark);"></sl-icon>
            </div>
            
            <div class="group-info">
              <h3>${group.name}</h3>
              ${group.description ? html`<p class="group-desc">${group.description}</p>` : ''}
            </div>
            
            <sl-icon name="chevron-right" style="margin-left: auto; color: var(--color-wood-medium);"></sl-icon>
          </div>
        `)}
      </div>
    `;
  }
}