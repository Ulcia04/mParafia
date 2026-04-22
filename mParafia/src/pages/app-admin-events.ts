import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';

import { ParishEvent } from './app-calendar';

@customElement('app-admin-events')
export class AppAdminEvents extends LitElement {
  @state() private events: ParishEvent[] = [];
  @state() private groups: any[] = [];
  @state() private isEditing = false;
  @state() private selectedEventId: number | null = null;

  @query('#form-title') inputTitle!: any;
  @query('#form-date') inputDate!: any;
  @query('#form-description') inputDescription!: any;
  @query('#form-location') inputLocation!: any;
  @query('#form-group') inputGroup!: any;
  @query('sl-dialog') dialog!: any;

  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        padding: 20px;
        max-width: 900px;
        margin: 0 auto;
      }

      .header-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
      }

      .event-card {
        background: var(--color-sand-light);
        border: 1px solid var(--color-wood-medium);
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .event-info h4 { margin: 0; color: var(--color-wood-dark); }
      .event-info p { margin: 5px 0 0 0; font-size: 0.9rem; color: #666; }

      .actions { display: flex; gap: 10px; }

      .section-title {
        color: var(--color-wood-dark);
        margin: 40px 0 20px 0;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .archive-card { opacity: 0.7; filter: grayscale(0.5); }

      form { display: flex; flex-direction: column; gap: 15px; }

      @media (max-width: 600px) {
        .event-card { flex-direction: column; align-items: flex-start; gap: 15px; }
        .actions { width: 100%; justify-content: flex-end; }
      }
    `
  ];

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('change-title', {
      detail: { title: 'Zarządzanie Wydarzeniami' },
      bubbles: true, composed: true
    }));
  }

  async firstUpdated() {
    await this.fetchData();
  }

  async fetchData() {
    try {
      const [evRes, grRes] = await Promise.all([
        fetch('http://localhost:3000/api/events/all'), 
        fetch('http://localhost:3000/api/groups')
      ]);
      this.events = await evRes.json();
      this.groups = await grRes.json();
    } catch (e) {
      console.error("Błąd pobierania danych:", e);
    }
  }

  private openAddDialog() {
    this.isEditing = false;
    this.selectedEventId = null;
    this.dialog.show();
    setTimeout(() => this.resetForm(), 0);
  }

  private async handleEdit(event: ParishEvent) {
    this.isEditing = true;
    this.selectedEventId = event.id;
    this.dialog.show();

    setTimeout(() => {
      this.inputTitle.value = event.title;
      this.inputDate.value = event.startTime.substring(0, 16); 
      this.inputDescription.value = event.description || '';
      this.inputLocation.value = event.location || '';
      this.inputGroup.value = event.groupId?.toString() || '';
    }, 50);
  }

  private async handleDelete(id: number) {
    if (!confirm('Czy na pewno chcesz usunąć to wydarzenie?')) return;

    try {
      const res = await fetch(`http://localhost:3000/api/events/${id}`, { method: 'DELETE' });
      if (res.ok) await this.fetchData();
    } catch (e) { console.error(e); }
  }

  private async saveEvent() {
    const data = {
      title: this.inputTitle.value,
      startTime: new Date(this.inputDate.value).toISOString(),
      description: this.inputDescription.value,
      location: this.inputLocation.value,
      groupId: this.inputGroup.value ? Number(this.inputGroup.value) : null
    };

    const url = this.isEditing 
      ? `http://localhost:3000/api/events/${this.selectedEventId}`
      : 'http://localhost:3000/api/events';
    
    const method = this.isEditing ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        this.dialog.hide();
        await this.fetchData();
      }
    } catch (e) { console.error(e); }
  }

  private resetForm() {
    this.inputTitle.value = '';
    this.inputDate.value = '';
    this.inputDescription.value = '';
    this.inputLocation.value = '';
    this.inputGroup.value = '';
  }

  private renderEventList(events: ParishEvent[], isArchive = false) {
    return events.map(event => html`
      <div class="event-card ${isArchive ? 'archive-card' : ''}">
        <div class="event-info">
          <h4>${event.title}</h4>
          <p>
            ${new Date(event.startTime).toLocaleString('pl-PL', { dateStyle: 'medium', timeStyle: 'short' })}
            | ${event.location || 'Brak lokalizacji'}
          </p>
          ${event.groupId ? html`<sl-badge variant="neutral">${this.groups.find(g => g.id === event.groupId)?.name}</sl-badge>` : ''}
        </div>
        <div class="actions">
          <sl-button size="small" variant="default" @click=${() => this.handleEdit(event)}>
             <sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj
          </sl-button>
          
          <sl-button size="small" variant="danger" outline @click=${() => this.handleDelete(event.id)}>
             <sl-icon slot="prefix" name="trash"></sl-icon> Usuń
          </sl-button>
        </div>
      </div>
    `);
  }
  render() {
    const now = new Date();
    const activeEvents = this.events.filter(e => new Date(e.startTime) >= now);
    const archivedEvents = this.events.filter(e => new Date(e.startTime) < now);

    return html`
      <div class="header-actions">
        <h2>Lista Wydarzeń</h2>
        <sl-button variant="primary" @click=${this.openAddDialog}>
          <sl-icon slot="prefix" name="plus-lg"></sl-icon> Dodaj wydarzenie
        </sl-button>
      </div>

      <div class="section-title">
        <sl-icon name="calendar-check"></sl-icon> Nadchodzące i Aktywne
      </div>
      ${activeEvents.length ? this.renderEventList(activeEvents) : html`<p>Brak zaplanowanych wydarzeń.</p>`}

      <sl-divider></sl-divider>

      <div class="section-title">
        <sl-icon name="archive"></sl-icon> Archiwum (Zakończone)
      </div>
      ${archivedEvents.length ? this.renderEventList(archivedEvents, true) : html`<p>Archiwum jest puste.</p>`}

      <sl-dialog label="${this.isEditing ? 'Edytuj Wydarzenie' : 'Nowe Wydarzenie'}">
        <form>
          <sl-input id="form-title" label="Tytuł" required></sl-input>
          <sl-input id="form-date" type="datetime-local" label="Data i godzina" required></sl-input>
          <sl-input id="form-location" label="Miejsce"></sl-input>
          
          <sl-select id="form-group" label="Grupa (opcjonalnie)" clearable>
            ${this.groups.map(g => html`<sl-option value="${g.id}">${g.name}</sl-option>`)}
          </sl-select>

          <sl-textarea id="form-description" label="Opis"></sl-textarea>
        </form>
        
        <sl-button slot="footer" variant="primary" @click=${this.saveEvent}>
          ${this.isEditing ? 'Zapisz zmiany' : 'Dodaj wydarzenie'}
        </sl-button>
      </sl-dialog>
    `;
  }
}