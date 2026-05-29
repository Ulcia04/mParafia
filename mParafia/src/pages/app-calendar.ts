import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { apiFetch } from '../utils/api';

import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/button-group/button-group.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { styles as sharedStyles } from '../styles/shared-styles';
import '../components/calendar-item';

export interface GroupRelation {
  groupId: number;
  eventId: number;
  group: {
    id: number;
    name: string;
    description?: string | null;
    photoUrl?: string | null;
    color?: string | null;
  };
}

export interface ParishEvent {
  id: number;
  title: string;
  description: string;
  startTime: string;
  location: string;
  category?: string;
  groups?: GroupRelation[];
}

type CalendarView = 'month' | 'week' | 'day';

@customElement('app-calendar')
export class AppCalendar extends LitElement {
  @state() private events: ParishEvent[] = [];
  @state() private groups: any[] = [];
  @state() private currentView: CalendarView = 'month';
  @state() private currentDate = new Date();
  @state() private showOnlyMyGroups = localStorage.getItem('showOnlyMyGroups') === 'true';
  @state() private displayMode: 'all' | 'events' | 'intentions' = 'all';
  @state() private firstDayOfWeek = localStorage.getItem('firstDay') || 'monday';

  private boundRefreshSettings = this.refreshSettings.bind(this);

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('change-title', {
      detail: { title: 'Kalendarz Parafialny' },
      bubbles: true,
      composed: true
    }));

    this.refreshSettings();
    window.addEventListener('settings-changed', this.boundRefreshSettings);
  }

  disconnectedCallback() {
    window.removeEventListener('settings-changed', this.boundRefreshSettings);
    super.disconnectedCallback();
  }

  private refreshSettings() {
    this.firstDayOfWeek = localStorage.getItem('firstDay') || 'monday';
    this.showOnlyMyGroups = localStorage.getItem('showOnlyMyGroups') === 'true';
    this.requestUpdate();
  }

  async firstUpdated() {
    await this.fetchEvents();
    await this.fetchGroups();
  }

  async fetchEvents() {
    try {
      const response = await apiFetch('/events/all');
      if (response.ok) {
        this.events = await response.json();
        console.log("DANE Z BACKENDU:", this.events);
      }
    } catch (error) {
      console.error('Nie udało się pobrać wydarzeń:', error);
    }
  }

  async fetchGroups() {
    try {
      const response = await apiFetch('/groups');
      if (response.ok) {
        this.groups = await response.json();
        console.log(this.groups);
      }
    } catch (error) {
      console.error('Nie udało się pobrać grup:', error);
    }
  }

  private getFilteredEvents() {
    let filtered = this.events;

    if (this.displayMode === 'events') {
      filtered = filtered.filter(e => !e.title.startsWith('Intencja:'));
    } else if (this.displayMode === 'intentions') {
      filtered = filtered.filter(e => e.title.startsWith('Intencja:'));
    }

    if (this.showOnlyMyGroups && this.displayMode !== 'intentions') {
      const saved = localStorage.getItem('myGroups');
      const myGroupIds = saved ? JSON.parse(saved).map(Number) : [];

      filtered = filtered.filter(e => {
        if (!e.groups || e.groups.length === 0) return true;
        return e.groups.some(ge => myGroupIds.includes(Number(ge.groupId)));
      });
    }

    return filtered;
  }

  private _navigate(direction: 'prev' | 'next') {
    const newDate = new Date(this.currentDate);
    const amount = direction === 'next' ? 1 : -1;

    if (this.currentView === 'month') {
      newDate.setMonth(newDate.getMonth() + amount);
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

    if (this.firstDayOfWeek === 'sunday') {
      d.setDate(d.getDate() - day);
    } else {
      const diff = d.getDate() - day + (day === 0 ? -6 : 1);
      d.setDate(diff);
    }
    d.setHours(0, 0, 0, 0);
    return d;
  }

  private _isToday(d: Date) {
    const today = new Date();
    return d.getDate() === today.getDate() &&
           d.getMonth() === today.getMonth() &&
           d.getFullYear() === today.getFullYear();
  }

  private _getEventsForDate(date: Date) {
    return this.getFilteredEvents().filter(e => {
      if (!e.startTime) return false;
      const eventDate = new Date(e.startTime);
      return eventDate.getFullYear() === date.getFullYear() &&
             eventDate.getMonth() === date.getMonth() &&
             eventDate.getDate() === date.getDate();
    });
  }

  static styles = [
    sharedStyles,
    css`
      :host { display: block; padding: 10px; width: 100%; max-width: 900px; margin: 0 auto; box-sizing: border-box; }
      .view-controls { display: flex; justify-content: center; margin-bottom: 20px; }
      sl-button-group sl-button[variant="default"]::part(base) { color: var(--color-wood-medium); border-color: var(--color-wood-medium); background-color: transparent; }
      sl-button-group sl-button[variant="default"]::part(base):hover { background-color: rgba(193, 135, 86, 0.1); }
      sl-button-group sl-button[variant="primary"]::part(base) { background-color: var(--color-wood-dark); border-color: var(--color-wood-dark); color: var(--color-sand-light); }
      .calendar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; color: var(--color-wood-dark); }
      .calendar-header h2 { margin: 0; text-transform: capitalize; font-size: 1.3rem; }
      sl-icon-button { color: var(--color-wood-dark); font-size: 1.8rem; }
      .grid-month { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; background-color: var(--color-wood-medium); padding: 6px; border-radius: 12px; }
      .day-name { text-align: center; font-weight: bold; color: var(--color-sand-light); font-size: 0.85rem; padding: 5px 0; }
      .day { background: var(--color-sand-light); min-height: 35px; padding: 2px; display: flex; flex-direction: column; border-radius: 6px; color: var(--color-wood-dark); overflow: hidden; cursor: pointer; transition: filter 0.2s ease; }
      .day:hover { filter: brightness(0.95); }
      .day.empty { background: transparent; border: none; cursor: default; }
      .day.empty:hover { filter: none; }
      .day.today { background-color: #E8C09A; box-shadow: inset 0 0 10px rgba(127, 69, 29, 0.2); }
      .day-number { font-size: 0.9rem; margin-bottom: 4px; margin-left: 2px; }
      .day.today > .day-number { font-size: 1rem; font-weight: bold; }
      .grid-week { display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; background-color: var(--color-wood-medium); padding: 8px; border-radius: 12px; min-height: 350px; overflow-x: auto; scrollbar-width: thin; scrollbar-color: var(--color-wood-medium) var(--color-sand-light); touch-action: pan-x pan-y; }
      .grid-week::-webkit-scrollbar { height: 10px; }
      .grid-week::-webkit-scrollbar-track { background: var(--color-sand-light); border-radius: 6px; }
      .grid-week::-webkit-scrollbar-thumb { background: var(--color-wood-medium); border-radius: 6px; }
      .week-day { background: var(--color-sand-light); border-radius: 6px; padding: 8px; display: flex; flex-direction: column; color: var(--color-wood-dark); min-width: 140px; cursor: pointer; transition: filter 0.2s ease; }
      .week-day:hover { filter: brightness(0.95); }
      .week-day-header { text-align: center; border-bottom: 2px solid var(--color-wood-medium); padding-bottom: 5px; margin-bottom: 8px; }
      .week-day-name { font-weight: bold; text-transform: uppercase; font-size: 0.8rem; }
      .week-day-number { font-size: 1.4rem; font-weight: bold; }
      .week-day.today { background-color: #E8C09A; }
      .no-events-small { text-align: center; font-size: 0.75rem; color: #888; margin-top: 10px; font-style: italic; }
      .list-view { background-color: var(--color-wood-medium); padding: 15px; border-radius: 12px; display: flex; flex-direction: column; gap: 10px; }
      .list-day-row { background: var(--color-sand-light); border-radius: 8px; padding: 15px; color: var(--color-wood-dark); }
      .list-day-header { font-weight: bold; font-size: 1.2rem; border-bottom: 2px solid var(--color-wood-medium); padding-bottom: 10px; margin-bottom: 15px; }
      .list-day-row.today { background-color: #E8C09A; }
      .filter-controls { display: flex; justify-content: center; align-items: center; margin-bottom: 25px; width: 100%; }
      sl-switch { --sl-toggle-size: 1.2rem; display: flex; align-items: center; }
      sl-switch::part(thumb) { background-color: var(--color-wood-medium) !important; border: 2px solid var(--color-wood-medium) !important; transition: background-color 0.3s ease, border-color 0.3s ease !important; }
      sl-switch[checked]::part(thumb) { background-color: var(--color-wood-dark) !important; border-color: var(--color-wood-dark) !important; }
      sl-switch::part(control) { background-color: var(--color-cookie-medium) !important; border-color: var(--color-cookie-medium) !important; box-shadow: none !important; outline: none !important; transition: background-color 0.3s ease, border-color 0.3s ease !important; }
      sl-switch[checked]::part(control) { background-color: var(--color-wood-medium) !important; border-color: var(--color-wood-medium) !important; }
      sl-switch::part(label) { color: var(--color-wood-dark); font-size: 0.9rem; font-weight: 500; margin-left: 8px; transition: font-weight 0.1s ease !important; }
      sl-switch[checked]::part(label) { font-weight: 530; }
    `
  ];

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

      <div class="filter-controls" style="flex-direction: column; gap: 15px;">
        <sl-button-group>
          <sl-button variant=${this.displayMode === 'all' ? 'primary' : 'default'} @click=${() => { this.displayMode = 'all'; this.requestUpdate(); }}>Wszystko</sl-button>
          <sl-button variant=${this.displayMode === 'events' ? 'primary' : 'default'} @click=${() => { this.displayMode = 'events'; this.requestUpdate(); }}>Wydarzenia</sl-button>
          <sl-button variant=${this.displayMode === 'intentions' ? 'primary' : 'default'} @click=${() => { this.displayMode = 'intentions'; this.requestUpdate(); }}>Intencje</sl-button>
        </sl-button-group>

        ${this.displayMode !== 'intentions' ? html`
          <sl-switch
            ?checked=${this.showOnlyMyGroups}
            @sl-change=${(e: any) => {
              this.showOnlyMyGroups = e.target.checked;
              localStorage.setItem('showOnlyMyGroups', e.target.checked.toString());
              this.requestUpdate();
            }} >
            Tylko moje grupy i główne wydarzenia
          </sl-switch>
        ` : ''}
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

    const dayNames = this.firstDayOfWeek === 'monday'
      ? ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd']
      : ['Nd', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb'];

    const firstDayOfMonth = new Date(year, month, 1).getDay();

    let emptyDaysCount;
    if (this.firstDayOfWeek === 'monday') {
      emptyDaysCount = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    } else {
      emptyDaysCount = firstDayOfMonth;
    }
    const emptyDays = Array.from({ length: emptyDaysCount }, (_, i) => i);

    return html`
      <div class="grid-month">
        ${dayNames.map(d => html`<div class="day-name">${d}</div>`)}
        ${emptyDays.map(() => html`<div class="day empty"></div>`)}
        ${calendarDays.map(day => {
          const cellDate = new Date(year, month, day);
          const dayEvents = this._getEventsForDate(cellDate);
          const isToday = this._isToday(cellDate);

          return html`
            <div class=${classMap({ 'day': true, 'today': isToday })} @click=${() => this.switchToDayView(cellDate)}>
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

    const dayNames = this.firstDayOfWeek === 'monday'
      ? ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd']
      : ['Nd', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb'];

    return html`
      <div class="grid-week">
        ${weekDays.map((date, i) => {
          const dayEvents = this._getEventsForDate(date);
          const isToday = this._isToday(date);

          return html`
            <div class=${classMap({ 'week-day': true, 'today': isToday })} @click=${() => this.switchToDayView(date)}>
              <div class="week-day-header">
                <div class="week-day-name">${dayNames[i]}</div>
                <div class="week-day-number">${date.getDate()}</div>
              </div>

              ${dayEvents.length > 0
                ? html`<div class="week-events-container">${this.renderEventTags(dayEvents, 'week')}</div>`
                : html`<div class="no-events-small">Brak</div>`
              }
            </div>
          `;
        })}
      </div>
    `;
  }

  renderDayView() {
    const dayEvents = this._getEventsForDate(this.currentDate);
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

  renderEventTags(dayEvents: any[], viewType: string) {
    const isMultiline = viewType === 'week' || viewType === 'day';
    const showUrl = viewType === 'day' || viewType === 'week';

    return dayEvents.map(e => {
      const eventDate = new Date(e.startTime);
      const timeStr = eventDate.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' });
      const isIntention = e.title.startsWith('Intencja:');
      const displayName = isIntention ? e.title.replace('Intencja:', '').trim() : e.title;

      // POPRAWIONE MAPOWANIE KOLORU Z TABLICY RELACJI Z BACKENDU
      const firstGroupRelation = e.groups && e.groups.length > 0 ? e.groups[0] : null;

      let category = firstGroupRelation ? 'grupa' : 'wydarzenie';
      let color = firstGroupRelation && firstGroupRelation.group?.color ? firstGroupRelation.group.color : '';

      if (isIntention) {
        category = 'intencja';
        color ='#C18756';
      }

      return html`
        <calendar-item
          .time="${timeStr}"
          .name="${displayName}"
          .category="${category}"
          .groupColor="${color}"
          ?multiline=${isMultiline}
          targetUrl="${showUrl ? `/mParafia/wydarzenie?id=${e.id}` : ''}"
        >
        </calendar-item>
      `;
    });
  }
}