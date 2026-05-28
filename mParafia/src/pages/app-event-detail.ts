import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';

import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';

// Interfejs odzwierciedlający model Event z bazy Prisma
interface ParishEvent {
  id: number;
  title: string;
  description?: string;
  startTime: string;
  location?: string;
}

@customElement('app-event-detail')
export class AppEventDetail extends LitElement {
  @state() private eventId: number | null = null;
  @state() private event: ParishEvent | null = null;
  @state() private isLoading = true;

  connectedCallback() {
    super.connectedCallback();

    // Pobranie ID wydarzenia z paska adresu URL (np. /wydarzenie?id=5)
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get('id');

    if (idParam) {
      this.eventId = parseInt(idParam, 10);
    }
  }

  async firstUpdated() {
    if (this.eventId) {
      await this.fetchEventDetails();
    } else {
      this.isLoading = false;
    }
  }

  async fetchEventDetails() {
    try {
      console.log('🔍 1. Szukam wydarzenia z ID:', this.eventId);

      const res = await fetch('http://localhost:3000/api/events/all');

      if (res.ok) {
        const allEvents: ParishEvent[] = await res.json();
        console.log('📦 2. Pobrane wszystkie wydarzenia z bazy:', allEvents);

        this.event = allEvents.find(e => e.id === this.eventId) || null;
        console.log('🎯 3. Wynik dopasowania:', this.event);

        if (this.event) {
          this.dispatchEvent(new CustomEvent('change-title', {
            detail: { title: 'Szczegóły wydarzenia' },
            bubbles: true, composed: true
          }));
        }
      } else {
        console.error('⚠️ Serwer zwrócił błąd:', res.status);
      }
    } catch (error) {
      console.error('🚨 Błąd połączenia z API:', error);
    } finally {
      this.isLoading = false;
    }
  }

  private formatDate(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pl-PL', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Opcjonalna metoda do generowania pliku przypomnienia .ics do kalendarza systemowego
  private downloadCalendarEvent() {
    if (!this.event) return;

    const startDate = new Date(this.event.startTime);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Domyślnie 1 godzina

    const formatDateICS = (date: Date) => date.toISOString().replace(/-|:|\.\d+/g, '');

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `SUMMARY:${this.event.title}`,
      `DESCRIPTION:${this.event.description || 'Brak opisu'}`,
      `LOCATION:${this.event.location || 'Brak lokalizacji'}`,
      `DTSTART:${formatDateICS(startDate)}`,
      `DTEND:${formatDateICS(endDate)}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${this.event.title.replace(/\\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        padding: 15px;
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .center-content {
        display: flex;
        justify-content: center;
        padding: 40px;
        color: var(--color-wood-medium);
      }

      .event-card {
        background-color: var(--color-sand-light);
        padding: 25px;
        border-radius: 12px;
        border: 2px solid var(--color-wood-medium);
        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      }

      .event-title {
        font-size: 1.8rem;
        color: var(--color-wood-dark);
        margin: 0 0 20px 0;
        text-align: center;
        font-weight: bold;
      }

      .detail-row {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 15px;
        font-size: 1.1rem;
        color: var(--color-wood-dark);
      }

      .detail-row sl-icon {
        font-size: 1.5rem;
        color: var(--color-wood-medium);
        margin-top: 2px;
      }

      .description {
        margin-top: 20px;
        padding-top: 15px;
        padding-left: calc(1.5rem + 12px);
        text-align: left;
        color: var(--color-wood-dark);
      }

      .desc-title {
        margin-bottom: 5px;
      }

      .desc-content {
        white-space: pre-wrap;
        line-height: 1.6;
      }

      sl-button[variant="default"]::part(base) {
        background-color: #4A4A4A !important;
        border-color: #4A4A4A !important;
        color: var(--color-sand-light) !important;
      }

      sl-button[variant="default"]::part(base):hover,
      sl-button[variant="default"]::part(base):active {
        background-color: #333333 !important;
        border-color: #333333 !important;
      }

      sl-button::part(prefix) {
        margin-right: 8px;
      }

      .actions {
        display: flex;
        gap: 15px;
        margin-top: 25px;
        justify-content: center;
        flex-wrap: wrap;
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

    if (!this.event) {
      return html`
        <div class="center-content" style="flex-direction: column; align-items: center; gap: 15px;">
          <sl-icon name="exclamation-circle" style="font-size: 3rem;"></sl-icon>
          <p>Nie znaleziono szczegółów tego wydarzenia.</p>
          <sl-button variant="default" @click=${() => window.history.back()}>
            <sl-icon slot="prefix" name="arrow-left"></sl-icon>
            Wróć
          </sl-button>
        </div>
      `;
    }

    return html`
      <div class="event-card">
        <h2 class="event-title">${this.event.title}</h2>

        <div class="detail-row">
          <sl-icon name="calendar-event"></sl-icon>
          <div>
            <strong>Kiedy:</strong><br />
            ${this.formatDate(this.event.startTime)}
          </div>
        </div>

        <div class="detail-row">
          <sl-icon name="geo-alt"></sl-icon>
          <div>
            <strong>Gdzie:</strong><br />
            ${this.event.location ? this.event.location : 'Miejsce nie zostało podane'}
          </div>
        </div>

        ${this.event.description ? html`
          <div class="description">
            ${this.event.title.startsWith('Intencja:')
              ? html`<div class="desc-title"><strong>Intencja:</strong></div><div class="desc-content">${this.event.description.replace(/Od kogo:/gi, '').trim()}</div>`
              : html`<div class="desc-title"><strong>Opis:</strong></div><div class="desc-content">${this.event.description}</div>`
            }
          </div>
        ` : ''}

        <div class="actions">
          <sl-button variant="default" @click=${() => window.history.back()}>
            <sl-icon slot="prefix" name="chevron-left"></sl-icon>
            Wróć
          </sl-button>

          <sl-button variant="primary" @click=${this.downloadCalendarEvent}>
            <sl-icon slot="prefix" name="bell-fill"></sl-icon>
            Dodaj przypomnienie (Kalendarz)
          </sl-button>
        </div>
      </div>
    `;
  }
}