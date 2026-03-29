import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/button-group/button-group.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { styles as sharedStyles } from '../styles/shared-styles';
import '../components/calendar-item';

export interface ParishEvent {
  date: string;
  title: string;
  time: string;
  category: string;
  targetUrl: string;
}

export const mockEvents: ParishEvent[] = [
  // --- MARZEC 2026 ---
  { date: '2026-03-01', title: 'Zbiórka LSO', time: '09:00', category: 'lso', targetUrl: '/grupy/lso' },
  { date: '2026-03-01', title: 'Domowy Kościół', time: '16:00', category: 'domowy', targetUrl: '/grupy/domowy' },
  { date: '2026-03-04', title: 'Krąg Biblijny', time: '18:45', category: 'biblijna', targetUrl: '/grupy/biblijna' },
  { date: '2026-03-06', title: 'Droga Krzyżowa', time: '17:30', category: 'wydarzenie', targetUrl: '/wydarzenia/droga-krzyzowa' },
  { date: '2026-03-07', title: 'Oaza Dzieci Bożych', time: '11:00', category: 'odb', targetUrl: '/grupy/odb' },
  { date: '2026-03-08', title: 'Gorzkie Żale', time: '17:15', category: 'wydarzenie', targetUrl: '/wydarzenia/gorzkie-zale' },
  { date: '2026-03-12', title: 'Rada Parafialna', time: '20:00', category: 'rada', targetUrl: '/grupy/rada' },
  { date: '2026-03-13', title: 'Spotkanie Oazy', time: '19:00', category: 'oaza', targetUrl: '/grupy/oaza' },
  { date: '2026-03-13', title: 'Droga Krzyżowa', time: '17:30', category: 'wydarzenie', targetUrl: '/wydarzenia/droga-krzyzowa' },
  { date: '2026-03-15', title: 'Zbiórka LSO', time: '09:00', category: 'lso', targetUrl: '/grupy/lso' },
  { date: '2026-03-18', title: 'Krąg Biblijny', time: '18:45', category: 'biblijna', targetUrl: '/grupy/biblijna' },
  { date: '2026-03-20', title: 'Droga Krzyżowa', time: '17:30', category: 'wydarzenie', targetUrl: '/wydarzenia/droga-krzyzowa' },
  { date: '2026-03-21', title: 'Oaza Dzieci Bożych', time: '11:00', category: 'odb', targetUrl: '/grupy/odb' },
  { date: '2026-03-22', title: 'Gorzkie Żale', time: '17:15', category: 'wydarzenie', targetUrl: '/wydarzenia/gorzkie-zale' },
  { date: '2026-03-27', title: 'Droga Krzyżowa', time: '17:30', category: 'wydarzenie', targetUrl: '/wydarzenia/droga-krzyzowa' },
  { date: '2026-03-28', title: 'Spotkanie Oazy', time: '19:00', category: 'oaza', targetUrl: '/grupy/oaza' },
  { date: '2026-03-29', title: 'Niedziela Palmowa - Konkurs Palm', time: '11:00', category: 'wydarzenie', targetUrl: '/wydarzenia/palmy' },
  { date: '2026-03-29', title: 'Gorzkie Żale', time: '17:15', category: 'wydarzenie', targetUrl: '/wydarzenia/gorzkie-zale' },
  { date: '2026-03-30', title: 'Droga Krzyżowa (Oaza)', time: '17:30', category: 'oaza', targetUrl: '/grupy/oaza' },
  { date: '2026-03-30', title: 'Rada Parafialna', time: '20:00', category: 'rada', targetUrl: '/grupy/rada' },
  { date: '2026-03-31', title: 'Próba Scholi (Triduum)', time: '18:30', category: 'schola', targetUrl: '/grupy/schola' },

  // --- KWIECIEŃ 2026  ---
  { date: '2026-04-02', title: 'Msza Wieczerzy Pańskiej', time: '18:00', category: 'wydarzenie', targetUrl: '/wydarzenia/wielki-czwartek' },
  { date: '2026-04-03', title: 'Ciemna Jutrznia', time: '08:00', category: 'wydarzenie', targetUrl: '/wydarzenia/jutrznia' },
  { date: '2026-04-03', title: 'Liturgia Męki Pańskiej', time: '18:00', category: 'wydarzenie', targetUrl: '/wydarzenia/wielki-piatek' },
  { date: '2026-04-04', title: 'Święcenie Pokarmów', time: '09:00', category: 'wydarzenie', targetUrl: '/wydarzenia/swiecenie' },
  { date: '2026-04-04', title: 'Wigilia Paschalna', time: '20:00', category: 'wydarzenie', targetUrl: '/wydarzenia/wigilia-paschalna' },
  { date: '2026-04-05', title: 'Rezurekcja', time: '06:00', category: 'wydarzenie', targetUrl: '/wydarzenia/wielkanoc' },
  { date: '2026-04-07', title: 'Krąg Biblijny', time: '18:45', category: 'biblijna', targetUrl: '/grupy/biblijna' },
  { date: '2026-04-09', title: 'Rada Parafialna', time: '20:00', category: 'rada', targetUrl: '/grupy/rada' },
  { date: '2026-04-10', title: 'Próba Scholi', time: '18:30', category: 'schola', targetUrl: '/grupy/schola' },
  { date: '2026-04-11', title: 'Spotkanie Oazy', time: '19:00', category: 'oaza', targetUrl: '/grupy/oaza' },
  { date: '2026-04-12', title: 'Zbiórka LSO', time: '09:00', category: 'lso', targetUrl: '/grupy/lso' },
  { date: '2026-04-14', title: 'Krąg Biblijny', time: '18:45', category: 'biblijna', targetUrl: '/grupy/biblijna' },
  { date: '2026-04-16', title: 'Rada Parafialna', time: '20:00', category: 'rada', targetUrl: '/grupy/rada' },
  { date: '2026-04-17', title: 'Próba Scholi', time: '18:30', category: 'schola', targetUrl: '/grupy/schola' },
  { date: '2026-04-18', title: 'Oaza Dzieci Bożych', time: '11:00', category: 'odb', targetUrl: '/grupy/odb' },
  { date: '2026-04-19', title: 'Domowy Kościół', time: '16:00', category: 'domowy', targetUrl: '/grupy/domowy' },
  { date: '2026-04-23', title: 'Uroczystość św. Wojciecha (Odpust)', time: '18:00', category: 'wydarzenie', targetUrl: '/wydarzenia/odpust' },
  { date: '2026-04-24', title: 'Spotkanie Oazy', time: '19:00', category: 'oaza', targetUrl: '/grupy/oaza' },
  { date: '2026-04-26', title: 'Zbiórka LSO', time: '09:00', category: 'lso', targetUrl: '/grupy/lso' },

  // --- MAJ 2026 ---
  { date: '2026-05-01', title: 'Rozpoczęcie Nabożeństw Majowych', time: '17:30', category: 'wydarzenie', targetUrl: '/wydarzenia/majowe' },
  { date: '2026-05-03', title: 'NMP Królowej Polski', time: '11:00', category: 'wydarzenie', targetUrl: '/wydarzenia/3-maja' },
  { date: '2026-05-08', title: 'Spotkanie Oazy', time: '19:00', category: 'oaza', targetUrl: '/grupy/oaza' },
  { date: '2026-05-09', title: 'Oaza Dzieci Bożych', time: '11:00', category: 'odb', targetUrl: '/grupy/odb' },
  { date: '2026-05-10', title: 'Zbiórka LSO', time: '09:00', category: 'lso', targetUrl: '/grupy/lso' },
  { date: '2026-05-13', title: 'Nabożeństwo Fatimskie', time: '20:00', category: 'wydarzenie', targetUrl: '/wydarzenia/fatimskie' },
  { date: '2026-05-14', title: 'Rada Parafialna', time: '20:00', category: 'rada', targetUrl: '/grupy/rada' },
  { date: '2026-05-17', title: 'Domowy Kościół', time: '16:00', category: 'domowy', targetUrl: '/grupy/domowy' },
  { date: '2026-05-22', title: 'Spotkanie Oazy', time: '19:00', category: 'oaza', targetUrl: '/grupy/oaza' },
  { date: '2026-05-24', title: 'Zesłanie Ducha Świętego', time: '11:00', category: 'wydarzenie', targetUrl: '/wydarzenia/zeslanie' },
  { date: '2026-05-27', title: 'Krąg Biblijny', time: '18:45', category: 'biblijna', targetUrl: '/grupy/biblijna' },
  { date: '2026-05-31', title: 'Zakończenie Nabożeństw Majowych', time: '17:30', category: 'wydarzenie', targetUrl: '/wydarzenia/majowe' },
];

type CalendarView = 'month' | 'week' | 'day';

@customElement('app-calendar')
export class AppCalendar extends LitElement {

  connectedCallback() {
    super.connectedCallback();
    const event = new CustomEvent('change-title', {
      detail: { title: 'Kalendarz Parafialny' },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        padding: 10px;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .view-controls {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
      }

      sl-button-group sl-button[variant="default"]::part(base) {
        color: var(--color-wood-medium);
        border-color: var(--color-wood-medium);
        background-color: transparent;
      }

      sl-button-group sl-button[variant="default"]::part(base):hover {
        background-color: rgba(193, 135, 86, 0.1);
      }

      sl-button-group sl-button[variant="primary"]::part(base) {
        background-color: var(--color-wood-dark);
        border-color: var(--color-wood-dark);
        color: var(--color-sand-light);
      }

      .calendar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        color: var(--color-wood-dark);
      }

      .calendar-header h2 {
        margin: 0;
        text-transform: capitalize;
        font-size: 1.3rem;
      }

      sl-icon-button {
        color: var(--color-wood-dark);
        font-size: 1.8rem;
      }

      .grid-month {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 4px;
        background-color: var(--color-wood-medium);
        padding: 6px;
        border-radius: 12px;
      }

      .day-name {
        text-align: center;
        font-weight: bold;
        color: var(--color-sand-light);
        font-size: 0.85rem;
        padding: 5px 0;
      }

      .day {
        background: var(--color-sand-light);
        min-height: 35px;
        padding: 2px;
        display: flex;
        flex-direction: column;
        border-radius: 6px;
        color: var(--color-wood-dark);
        overflow: hidden;
        cursor: pointer;
        transition: filter 0.2s ease;
      }

      .day:hover {
        filter: brightness(0.95);
      }

      .day.empty {
        background: transparent;
        border: none;
        cursor: default;
      }
      .day.empty:hover {
        filter: none;
      }

      .day.today {
        background-color: #E8C09A;
        box-shadow: inset 0 0 10px rgba(127, 69, 29, 0.2);
      }

      .day-number {
        font-size: 0.9rem;
        margin-bottom: 4px;
        margin-left: 2px;
      }

      .day.today > .day-number {
         font-size: 1rem;
         font-weight: bold;
      }

      .grid-week {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 6px;
        background-color: var(--color-wood-medium);
        padding: 8px;
        border-radius: 12px;
        min-height: 350px;
        overflow-x: auto;
        scrollbar-width: thin;
        scrollbar-color: var(--color-wood-medium) var(--color-sand-light);
        touch-action: pan-x pan-y;
      }

      .grid-week::-webkit-scrollbar {
        height: 10px;
      }
      .grid-week::-webkit-scrollbar-track {
        background: var(--color-sand-light);
        border-radius: 6px;
      }
      .grid-week::-webkit-scrollbar-thumb {
        background: var(--color-wood-medium);
        border-radius: 6px;
      }

      .week-day {
        background: var(--color-sand-light);
        border-radius: 6px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        color: var(--color-wood-dark);
        min-width: 140px;
        cursor: pointer;
        transition: filter 0.2s ease;
      }

      .week-day:hover {
        filter: brightness(0.95);
      }

      .week-day-header {
        text-align: center;
        border-bottom: 2px solid var(--color-wood-medium);
        padding-bottom: 5px;
        margin-bottom: 8px;
      }

      .week-day-name {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.8rem;
      }

      .week-day-number {
        font-size: 1.4rem;
        font-weight: bold;
      }

      .week-day.today {
        background-color: #E8C09A;
      }

      .no-events-small {
        text-align: center;
        font-size: 0.75rem;
        color: #888;
        margin-top: 10px;
        font-style: italic;
      }

      .list-view {
        background-color: var(--color-wood-medium);
        padding: 15px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .list-day-row {
        background: var(--color-sand-light);
        border-radius: 8px;
        padding: 15px;
        color: var(--color-wood-dark);
      }

      .list-day-header {
        font-weight: bold;
        font-size: 1.2rem;
        border-bottom: 2px solid var(--color-wood-medium);
        padding-bottom: 10px;
        margin-bottom: 15px;
      }

      .list-day-row.today {
        background-color: #E8C09A;
      }

 /* --- STYLE PRZEŁĄCZNIKA (FILTROWANIA) --- */
      .filter-controls {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 25px;
        width: 100%;
      }

      sl-switch {
        --sl-toggle-size: 1.2rem;
        display: flex;
        align-items: center;
      }

      sl-switch::part(thumb) {
        background-color: var(--color-wood-medium) !important;
        border: 2px solid var(--color-wood-medium) !important;
        transition: background-color 0.3s ease, border-color 0.3s ease !important;
      }

      sl-switch[checked]::part(thumb) {
        background-color: var(--color-wood-dark) !important;
        border-color: var(--color-wood-dark) !important;
      }
      sl-switch::part(control) {
        background-color: var(--color-cookie-medium) !important;
        border-color: var(--color-cookie-medium) !important;
        box-shadow: none !important;
        outline: none !important;
        transition: background-color 0.3s ease, border-color 0.3s ease !important;
      }

      sl-switch[checked]::part(control) {
        background-color: var(--color-wood-medium) !important;
        border-color: var(--color-wood-medium) !important;
      }

      sl-switch::part(label) {
        color: var(--color-wood-dark);
        font-size: 0.9rem;
        font-weight: 500;
        margin-left: 8px;
        transition: font-weight 0.1s ease !important;
      }

      sl-switch[checked]::part(label) {
        font-weight: 530;
      }
    `
  ];

  @state() private events: ParishEvent[] = mockEvents;
  @state() private currentView: CalendarView = 'month';
  @state() private currentDate = new Date();
  @state() private showOnlyMyGroups = false;
  private myGroups = ['oaza', 'schola']; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  HARDCODE

  private getFilteredEvents() {
    if (!this.showOnlyMyGroups) {
      return this.events;
    }

    return this.events.filter(e =>
      e.category === 'wydarzenie' ||
      this.myGroups.includes(e.category)
    );
  }

  private _navigate(direction: 'prev' | 'next') {
    const newDate = new Date(this.currentDate);
    const amount = direction === 'next' ? 1 : -1;

    if (this.currentView === 'month') {
      const expectedMonth = (newDate.getMonth() + amount + 12) % 12;
      newDate.setMonth(newDate.getMonth() + amount);
      if (newDate.getMonth() !== expectedMonth) {
        newDate.setDate(0);
      }
    } else if (this.currentView === 'week') {
      newDate.setDate(newDate.getDate() + (7 * amount));
    } else if (this.currentView === 'day') {
      newDate.setDate(newDate.getDate() + amount);
    }

    this.currentDate = newDate;
    this.requestUpdate();
  }

  private switchToDayView(date: Date) {
    this.currentDate = date;
    this.currentView = 'day';
  }

  private changeView(view: CalendarView) {
    this.currentView = view;
    this.currentDate = new Date();
    this.requestUpdate();
  }

  private _getHeaderTitle() {
    if (this.currentView === 'month') {
      return this.currentDate.toLocaleDateString('pl-PL', { month: 'long', year: 'numeric' });
    } else if (this.currentView === 'day') {
      return this.currentDate.toLocaleDateString('pl-PL', { weekday: 'long', day: 'numeric', month: 'long' });
    } else {
      const startOfWeek = this._getStartOfWeek(this.currentDate);
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(endOfWeek.getDate() + 6);

      const startStr = startOfWeek.toLocaleDateString('pl-PL', { day: 'numeric', month: 'short' });
      const endStr = endOfWeek.toLocaleDateString('pl-PL', { day: 'numeric', month: 'short' });
      return `${startStr} - ${endStr} ${endOfWeek.getFullYear()}`;
    }
  }

  private _getStartOfWeek(date: Date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  }

  private _isToday(d: Date) {
    const today = new Date();
    return d.getDate() === today.getDate() &&
           d.getMonth() === today.getMonth() &&
           d.getFullYear() === today.getFullYear();
  }

  private _formatDateString(date: Date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  render() {
    return html`
      <div class="view-controls">
        <sl-button-group>
          <sl-button variant=${this.currentView === 'month' ? 'primary' : 'default'} @click=${() => this.changeView('month')}>Miesiąc</sl-button>
          <sl-button variant=${this.currentView === 'week' ? 'primary' : 'default'} @click=${() => this.changeView('week')}>Tydzień</sl-button>
          <sl-button variant=${this.currentView === 'day' ? 'primary' : 'default'} @click=${() => this.changeView('day')}>Dzień</sl-button>
        </sl-button-group>
      </div>

      <div class="calendar-header">
        <sl-icon-button name="chevron-left" @click=${() => this._navigate('prev')}></sl-icon-button>
        <h2>${this._getHeaderTitle()}</h2>
        <sl-icon-button name="chevron-right" @click=${() => this._navigate('next')}></sl-icon-button>
      </div>

            <div class="filter-controls">
              <sl-switch
                ?checked=${this.showOnlyMyGroups}
                @sl-change=${(e: any) => { this.showOnlyMyGroups = e.target.checked; this.requestUpdate(); }} >
                Tylko moje grupy i główne wydarzenia
              </sl-switch>
            </div>

      ${this.currentView === 'month' ? this.renderMonthView() : null}
      ${this.currentView === 'week'  ? this.renderWeekView()  : null}
      ${this.currentView === 'day'   ? this.renderDayView()   : null}
    `;
  }

  renderMonthView() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const emptyDaysCount = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    const emptyDays = Array.from({ length: emptyDaysCount }, (_, i) => i);

    return html`
      <div class="grid-month">
        ${['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd'].map(d => html`<div class="day-name">${d}</div>`)}
        ${emptyDays.map(() => html`<div class="day empty"></div>`)}
        ${calendarDays.map(day => {
          const dateString = this._formatDateString(new Date(year, month, day));
          const dayEvents = this.getFilteredEvents().filter(e => e.date === dateString);
          const isToday = this._isToday(new Date(year, month, day));

          return html`
            <div
              class=${classMap({ 'day': true, 'today': isToday })}
              @click=${() => this.switchToDayView(new Date(year, month, day))}
            >
              <span class="day-number">${day}</span>
              ${this.renderEventTags(dayEvents, 'month')}
            </div>
          `;
        })}
      </div>
    `;
  }

  renderWeekView() {
    const startOfWeek = this._getStartOfWeek(this.currentDate);
    const weekDays = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(startOfWeek);
      d.setDate(d.getDate() + i);
      return d;
    });

    return html`
      <div class="grid-week">
        ${weekDays.map(date => {
          const dateString = this._formatDateString(date);
          const dayEvents = this.getFilteredEvents().filter(e => e.date === dateString);
          const isToday = this._isToday(date);

          return html`
            <div
              class=${classMap({ 'week-day': true, 'today': isToday })}
              @click=${() => this.switchToDayView(date)}
            >
              <div class="week-day-header">
                <div class="week-day-name">${date.toLocaleDateString('pl-PL', { weekday: 'short' })}</div>
                <div class="week-day-number">${date.getDate()}</div>
              </div>

              ${dayEvents.length > 0
                ? html`
                    <div class="week-events-container">
                      ${this.renderEventTags(dayEvents, 'week')}
                    </div>
                  `
                : html`<div class="no-events-small">Brak</div>`
              }
            </div>
          `;
        })}
      </div>
    `;
  }

  renderDayView() {
    const dateString = this._formatDateString(this.currentDate);
    const dayEvents = this.getFilteredEvents().filter(e => e.date === dateString);
    const isToday = this._isToday(this.currentDate);

    return html`
      <div class="list-view">
        <div class=${classMap({ 'list-day-row': true, 'today': isToday })}>
          <div class="list-day-header">Wydarzenia</div>

          ${dayEvents.length > 0
            ? this.renderEventTags(dayEvents, 'day')
            : html`<span class="no-events" style="display:block; padding: 20px 0; font-size: 0.85rem; color: #666; text-align: center; font-style: italic;">Brak wydarzeń zaplanowanych na ten dzień.</span>`
          }
        </div>
      </div>
    `;
  }

  renderEventTags(dayEvents: ParishEvent[], viewType: string) {
    const isMultiline = viewType === 'week' || viewType === 'day';
    const showUrl = viewType === 'day' || viewType === 'week';

    return dayEvents.map(e => html`
      <calendar-item
        time="${e.time}"
        name="${e.title}"
        category="${e.category}"
        ?multiline=${isMultiline}
        targetUrl="${showUrl ? e.targetUrl : ''}"

        @click=${(event: Event) => {
          if (viewType === 'week') {
            event.stopPropagation();
          }
        }}
      >
      </calendar-item>
    `);
  }
}