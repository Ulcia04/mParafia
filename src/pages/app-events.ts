import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';
import { mockEvents, ParishEvent } from './app-calendar';
import '../components/calendar-item';

@customElement('app-events')
export class AppEvents extends LitElement {
  @state() private events: ParishEvent[] = mockEvents;

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('change-title', {
      detail: { title: 'Nadchodzące Wydarzenia' },
      bubbles: true, composed: true
    }));
  }

  private getGroupedEvents() {
    const grouped: { [key: string]: ParishEvent[] } = {};
    const today = new Date().toISOString().split('T')[0];

    const filteredAndSorted = [...this.events]
      .filter(event => event.date >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    filteredAndSorted.forEach(event => {
      if (!grouped[event.date]) grouped[event.date] = [];
      grouped[event.date].push(event);
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
            ${grouped[date].map(event => html`
              <calendar-item
                time="${event.time}"
                name="${event.title}"
                category="${event.category}"
                multiline
                @click=${() => window.location.href = '/mParafia/mock-event'}
              ></calendar-item>
            `)}
          </div>
        </div>
      `)}
    `;
  }
}