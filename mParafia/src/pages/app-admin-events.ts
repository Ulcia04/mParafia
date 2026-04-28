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
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
import '@shoelace-style/shoelace/dist/components/radio-button/radio-button.js';

import * as XLSX from 'xlsx';
import { ParishEvent } from './app-calendar';

@customElement('app-admin-events')
export class AppAdminEvents extends LitElement {
  @state() private events: ParishEvent[] = [];
  @state() private groups: any[] = [];
  @state() private isEditing = false;
  @state() private selectedEventId: number | null = null;
  @state() private isSubmitting = false;
  @state() private adminView: 'events' | 'intentions' = 'events';

  // Stany dla Excela
  @state() private isImporting = false;
  @state() private importErrors: string[] = [];
  @state() private importSuccessMsg: string | null = null;

  @query('#form-title') inputTitle!: any;
  @query('#form-date') inputDate!: any;
  @query('#form-description') inputDescription!: any;
  @query('#form-location') inputLocation!: any;
  @query('#form-group') inputGroup!: any;
  @query('sl-dialog') dialog!: any;
  @query('sl-drawer') drawer!: any;
  @query('#excel-upload') fileInput!: HTMLInputElement;

  static styles = [
    sharedStyles,
    css`
      :host { display: block; padding: 20px; max-width: 900px; margin: 0 auto; }
      .header-actions { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; flex-wrap: wrap; gap: 10px;}
      .event-card { background: var(--color-sand-light); border: 1px solid var(--color-wood-medium); border-radius: 8px; padding: 15px; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center; }
      .event-info h4 { margin: 0; color: var(--color-wood-dark); }
      .event-info p { margin: 5px 0 0 0; font-size: 0.9rem; color: #666; }
      .actions { display: flex; gap: 10px; }
      .section-title { color: var(--color-wood-dark); margin: 40px 0 20px 0; font-size: 1.2rem; display: flex; align-items: center; gap: 10px; }
      .archive-card { opacity: 0.7; filter: grayscale(0.5); }
      form { display: flex; flex-direction: column; gap: 15px; }

      /* Style dla importu Excela */
      .upload-container { display: flex; flex-direction: column; gap: 20px; padding: 10px; }
      .instructions { background-color: var(--color-sand-light); padding: 15px; border-left: 4px solid var(--color-wood-dark); border-radius: 4px; }
      .instructions ul { margin: 10px 0 0 0; padding-left: 20px; color: #444; }
      .error-box { color: #b91c1c; background-color: #fef2f2; border: 1px solid #f87171; padding: 10px; border-radius: 6px; font-size: 0.9rem; }
      .error-box ul { margin: 5px 0 0 0; padding-left: 15px; }

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

  async firstUpdated() { await this.fetchData(); }

  async fetchData() {
    try {
      const [evRes, grRes] = await Promise.all([
        fetch('http://localhost:3000/api/events/all'),
        fetch('http://localhost:3000/api/groups')
      ]);
      this.events = await evRes.json();
      this.groups = await grRes.json();
    } catch (e) { console.error("Błąd pobierania danych:", e); }
  }

  // --- LOGIKA NORMALNYCH WYDARZEŃ ---
  private openAddDialog() {
    this.isEditing = false;
    this.selectedEventId = null;
    this.dialog.show();
    setTimeout(() => {
      this.resetForm();
      // Jeśli dodajemy ręcznie będąc w zakładce Intencji, pomagamy wpisując prefix
      if (this.adminView === 'intentions') {
        this.inputTitle.value = 'Intencja: ';
      }
    }, 0);
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
    if (!this.inputTitle.value || !this.inputDate.value) {
      alert('Proszę wypełnić wymagane pola: Tytuł oraz Datę!'); return;
    }
    if (this.isSubmitting) return;
    this.isSubmitting = true;

    let safeGroupId = null;
    const rawGroupValue = this.inputGroup.value;
    if (rawGroupValue && rawGroupValue.toString().trim() !== '' && rawGroupValue !== 'null') {
      safeGroupId = Number(rawGroupValue);
    }

    const data = {
      title: this.inputTitle.value,
      startTime: new Date(this.inputDate.value).toISOString(),
      description: this.inputDescription.value,
      location: this.inputLocation.value,
      groupId: safeGroupId
    };

    const url = this.isEditing ? `http://localhost:3000/api/events/${this.selectedEventId}` : 'http://localhost:3000/api/events';
    const method = this.isEditing ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (res.ok) { this.dialog.hide(); await this.fetchData(); }
      else alert('Wystąpił błąd podczas zapisywania wydarzenia.');
    } catch (e) { console.error(e); alert('Nie udało się połączyć z serwerem.'); }
    finally { this.isSubmitting = false; }
  }

  private resetForm() {
    this.inputTitle.value = ''; this.inputDate.value = ''; this.inputDescription.value = ''; this.inputLocation.value = ''; this.inputGroup.value = '';
  }

  // --- LOGIKA EXCELA ---
  private openExcelDrawer() {
    this.importErrors = [];
    this.importSuccessMsg = null;
    if(this.fileInput) this.fileInput.value = '';
    this.drawer.show();
  }

  private triggerFileSelect() {
    this.fileInput.click();
  }

  private handleFileUpload(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;

    this.isImporting = true;
    this.importErrors = [];
    this.importSuccessMsg = null;

    const reader = new FileReader();
    reader.onload = async (evt) => {
      try {
        const bstr = evt.target?.result;
        // Odczyt pliku (cellDates zamienia daty Excela od razu na obiekty JS)
        const wb = XLSX.read(bstr, { type: 'binary', cellDates: true });
        const wsname = wb.SheetNames[0]; // Bierzemy pierwszy arkusz
        const ws = wb.Sheets[wsname];

        // Zmieniamy na tablicę tablic, pomijamy nagłówki
        const data = XLSX.utils.sheet_to_json(ws, { header: 1 }) as any[][];

        const parsedEvents: any[] = [];

        // Pętla od i=1, bo zakładamy, że w i=0 są nagłówki (A, B, C, D)
        for (let i = 1; i < data.length; i++) {
          const row = data[i];
          if (!row || row.length === 0) continue; // Pusty wiersz

          const rawDate = row[0];
          const rawTime = row[1];
          const content = row[2];
          const from = row[3];

          // Jeśli wiersz jest kompletnie pusty, ignorujemy
          if (!rawDate && !rawTime && !content) continue;

          // Walidacja podstawowa
          if (!rawDate || !rawTime || !content) {
            this.importErrors.push(`Wiersz ${i + 1}: Brakuje daty, godziny lub treści intencji!`);
            continue;
          }

          // Konstruowanie Daty
          let dateStr = '';
          if (rawDate instanceof Date) {
            dateStr = rawDate.toISOString().split('T')[0]; // Format YYYY-MM-DD
          } else if (typeof rawDate === 'string') {
            const parts = rawDate.includes('.') ? rawDate.split('.') : rawDate.split('-');
            if(parts.length === 3) dateStr = rawDate.includes('.') ? `${parts[2]}-${parts[1]}-${parts[0]}` : rawDate;
          }

          // Konstruowanie Godziny
          let timeStr = '';
          if (rawTime instanceof Date) {
            timeStr = rawTime.toISOString().split('T')[1].substring(0,5); // Format HH:MM
          } else if (typeof rawTime === 'string') {
            timeStr = rawTime.replace('.', ':');
          } else if (typeof rawTime === 'number') {
             // Jeśli ktoś wpisał "18:00" w Excelu i format to ułamek dnia
             const totalSeconds = Math.round(rawTime * 24 * 3600);
             const hours = Math.floor(totalSeconds / 3600);
             const minutes = Math.floor((totalSeconds % 3600) / 60);
             timeStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
          }

          if (!dateStr || !timeStr || dateStr.length < 10) {
            this.importErrors.push(`Wiersz ${i + 1}: Zły format daty (${rawDate}) lub godziny (${rawTime}).`);
            continue;
          }

          const isoDateTime = new Date(`${dateStr}T${timeStr}:00`).toISOString();

          // Budowanie tytułu i opisu intencji
          const title = `Intencja: ${content}`;
          const description = from ? `Od kogo: ${from}` : '';

          parsedEvents.push({
            title: title,
            description: description,
            startTime: isoDateTime
          });
        }

        if (this.importErrors.length > 0) {
          this.isImporting = false;
          return; // Zatrzymujemy jeśli są błędy
        }

        if (parsedEvents.length === 0) {
          this.importErrors.push("Nie znaleziono żadnych danych do zaimportowania.");
          this.isImporting = false;
          return;
        }

        // --- Wysłanie do API ---
        const res = await fetch('http://localhost:3000/api/events/bulk', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ events: parsedEvents })
        });

        if (res.ok) {
          const result = await res.json();
          this.importSuccessMsg = result.message;
          await this.fetchData(); // Odśwież listę po sukcesie!
        } else {
          this.importErrors.push("Serwer odrzucił dane. Spróbuj ponownie.");
        }

      } catch (err) {
        this.importErrors.push("Wystąpił błąd czytania pliku. Upewnij się, że to czysty plik .xlsx!");
        console.error(err);
      } finally {
        this.isImporting = false;
      }
    };

    reader.readAsBinaryString(file);
  }

  // --- RENDEROWANIE HTML ---
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

    // Filtrujemy dane w zależności od wybranej zakładki
    const isIntention = (e: ParishEvent) => e.title.startsWith('Intencja:');
    const currentData = this.events.filter(e => this.adminView === 'intentions' ? isIntention(e) : !isIntention(e));

    // Dzielimy przefiltrowane dane na aktywne i archiwalne
    const activeEvents = currentData.filter(e => new Date(e.startTime) >= now);
    const archivedEvents = currentData.filter(e => new Date(e.startTime) < now);

    return html`
      <div style="display: flex; justify-content: center; margin-bottom: 25px;">
        <sl-radio-group value=${this.adminView} @sl-change=${(e: any) => { this.adminView = e.target.value; this.requestUpdate(); }}>
          <sl-radio-button value="events">Zarządzaj Wydarzeniami</sl-radio-button>
          <sl-radio-button value="intentions">Zarządzaj Intencjami</sl-radio-button>
        </sl-radio-group>
      </div>

      <div class="header-actions">
        <h2>${this.adminView === 'events' ? 'Lista Wydarzeń' : 'Lista Intencji Mszalnych'}</h2>

        <div style="display: flex; gap: 10px;">
          ${this.adminView === 'intentions' ? html`
            <sl-button variant="success" outline @click=${this.openExcelDrawer}>
              <sl-icon slot="prefix" name="file-earmark-excel"></sl-icon> Wgraj z Excela
            </sl-button>
          ` : ''}
          <sl-button variant="primary" @click=${this.openAddDialog}>
            <sl-icon slot="prefix" name="plus-lg"></sl-icon> Dodaj ręcznie
          </sl-button>
        </div>
      </div>

      <div class="section-title">
        <sl-icon name="calendar-check"></sl-icon> Nadchodzące i Aktywne
      </div>
      ${activeEvents.length ? this.renderEventList(activeEvents) : html`<p>Brak zaplanowanych pozycji.</p>`}

      <sl-divider></sl-divider>

      <div class="section-title">
        <sl-icon name="archive"></sl-icon> Archiwum (Zakończone)
      </div>
      ${archivedEvents.length ? this.renderEventList(archivedEvents, true) : html`<p>Archiwum jest puste.</p>`}

      <sl-dialog label="${this.isEditing ? 'Edytuj' : 'Nowy Wpis'}">
        <form>
          <sl-input id="form-title" label="Tytuł" required></sl-input>
          <sl-input id="form-date" type="datetime-local" label="Data i godzina" required></sl-input>
          <sl-input id="form-location" label="Miejsce"></sl-input>
          <sl-select id="form-group" label="Grupa (opcjonalnie)" clearable>
            ${this.groups.map(g => html`<sl-option value="${g.id}">${g.name}</sl-option>`)}
          </sl-select>
          <sl-textarea id="form-description" label="Opis"></sl-textarea>
        </form>
        <sl-button slot="footer" variant="primary" @click=${this.saveEvent} ?loading=${this.isSubmitting}>
          ${this.isEditing ? 'Zapisz zmiany' : 'Dodaj'}
        </sl-button>
      </sl-dialog>

      <sl-drawer label="Import Intencji z pliku Excel" class="drawer-overview">
        <div class="upload-container">
          <div class="instructions">
            <strong>Jak przygotować plik Excel (.xlsx)?</strong>
            <p style="margin-top: 5px; font-size: 0.9rem;">Pierwszy wiersz (nagłówek) zostanie zignorowany. Ułóż dane w następujących kolumnach:</p>
            <ul>
              <li><strong>Kolumna A:</strong> Data (np. 15.05.2024 lub 2024-05-15)</li>
              <li><strong>Kolumna B:</strong> Godzina (np. 18:00)</li>
              <li><strong>Kolumna C:</strong> Treść intencji (np. "Za śp. Jana")</li>
              <li><strong>Kolumna D:</strong> Od kogo (Opcjonalnie, np. "od żony")</li>
            </ul>
          </div>
          <input type="file" id="excel-upload" accept=".xlsx, .xls" style="display: none;" @change=${this.handleFileUpload}>

          ${!this.importSuccessMsg ? html`
            <sl-button variant="primary" size="large" @click=${this.triggerFileSelect} ?loading=${this.isImporting}>
              <sl-icon slot="prefix" name="upload"></sl-icon> Wybierz plik z komputera
            </sl-button>
          ` : ''}

          ${this.importErrors.length > 0 ? html`
            <div class="error-box">
              <strong>Znaleziono błędy w pliku:</strong>
              <ul>${this.importErrors.map(err => html`<li>${err}</li>`)}</ul>
            </div>
          ` : ''}

          ${this.importSuccessMsg ? html`
            <sl-alert variant="success" open>
              <sl-icon slot="icon" name="check2-circle"></sl-icon>
              <strong>Sukces!</strong><br />${this.importSuccessMsg}
            </sl-alert>
          ` : ''}
        </div>
        <sl-button slot="footer" variant="default" @click=${() => this.drawer.hide()}>Zamknij</sl-button>
      </sl-drawer>
    `;
  }
}