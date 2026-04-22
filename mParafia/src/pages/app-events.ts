import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';

import { ParishEvent } from './app-calendar'; 
import '../components/calendar-item';

@customElement('app-events')
export class AppEvents extends LitElement {
  
  @state() private events: ParishEvent[] = [];

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('change-title', {
      detail: { title: 'Nadchodzące Wydarzenia' },
      bubbles: true, composed: true
    }));
  }

  async firstUpdated() {
    await this.fetchEvents();
  }

  async fetchEvents() {
    try {
      const response = await fetch('http://localhost:3000/api/events');
      if (!response.ok) throw new Error('Błąd połączenia');
      this.events = await response.json();
    } catch (error) {
      console.error('Nie udało się pobrać wydarzeń:', error);
    }
  }

  private getGroupedEvents() {
    const grouped: { [key: string]: ParishEvent[] } = {};
    const today = new Date();
    today.setHours(0, 0, 0, 0); 

    const filteredAndSorted = [...this.events]
      .filter(event => new Date(event.startTime) >= today)
      .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());

    filteredAndSorted.forEach(event => {
      const dateStr = event.startTime.split('T')[0]; 
      
      if (!grouped[dateStr]) grouped[dateStr] = [];
      grouped[dateStr].push(event);
    });
    return grouped;
  }

  private formatDate(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pl-PL', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
  }

  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        padding: 15px;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .day-section {
        margin-bottom: 25px;
        width: 100%;
      }

      .day-header {
        position: sticky;
        top: 60px;
        background-color: var(--color-sand-light);
        color: var(--color-wood-dark);
        padding: 10px 5px;
        font-weight: bold;
        font-size: 1.15rem;
        text-transform: capitalize;
        border-bottom: 2px solid var(--color-wood-medium);
        margin-bottom: 12px;
        z-index: 10;
      }

      .events-list {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 12px;
        padding: 5px 0;
        width: 100%;
      }

      calendar-item {
        display: block;
        width: 100%;
        --item-font-size: 12px;
        box-sizing: border-box;
        cursor: pointer;
      }
    `
  ];

  render() {
    const grouped = this.getGroupedEvents();

    return html`
      ${Object.keys(grouped).map(date => html`
        <div class="day-section">
          <div class="day-header">${this.formatDate(date)}</div>
          <div class="events-list">
            ${grouped[date].map(event => {
              const timeStr = new Date(event.startTime).toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' });
              const category = event.category || 'wydarzenie';

              return html`
                <calendar-item
                  time="${timeStr}"
                  name="${event.title}"
                  category="${category}"
                  multiline
                  @click=${() => window.location.href = '/mParafia/mock-event'}
                ></calendar-item>
              `;
            })}
          </div>
        </div>
      `)}
    `;
  }
}