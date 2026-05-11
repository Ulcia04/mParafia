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
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/button-group/button-group.js';

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

  @query('#edit-dialog') editDialog!: any;
  @query('#excel-dialog') excelDialog!: any;
  @query('#excel-upload') fileInput!: HTMLInputElement;

  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        padding: 10px;
        max-width: 900px;
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .header-actions { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; flex-wrap: wrap; gap: 15px;}
      .header-actions h2 { margin: 0; color: var(--color-wood-dark); }

      /* PRZEŁĄCZNIK WIDOKU */
      .view-controls {
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
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

      /* KARTA WYDARZENIA */
      .event-card {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: background-color 0.2s ease, border-color 0.2s ease;
      }
      // .event-card:hover {
      //   background-color: var(--color-cookie-medium);
      //   border-color: var(--color-wood-medium);
      // }

      .event-info h4 { margin: 0 0 8px 0; color: var(--color-wood-dark); font-size: 1.15rem; }
      .event-info p { margin: 0; font-size: 0.95rem; color: var(--color-wood-dark); opacity: 0.8; margin-bottom: 8px; }
      .actions { display: flex; gap: 10px; }
      .section-title { color: var(--color-wood-dark); margin: 35px 0 15px 0; font-size: 1.2rem; display: flex; align-items: center; gap: 10px; }

      .archive-card {
        opacity: 0.7;
        filter: grayscale(0.4);
        border-style: dashed;
      }

      /* PRZYCISKI AKCJI - NAPRAWIONE (BEZ PASKÓW) */
      .btn-edit::part(base) {
        background-color: #d97706;
        border-color: #d97706;
      }
      .btn-edit::part(base):hover { background-color: #db6104; border-color: #db6104; }
      .btn-edit::part(label), .btn-edit::part(prefix) { color: var(--color-sand-light) !important; }

      .btn-delete::part(base) {
        background-color: rgba(220, 38, 38, 0.8);
        border-color: transparent;
      }
      .btn-delete::part(base):hover { background-color: rgba(220, 38, 38, 1); }
      .btn-delete::part(label), .btn-delete::part(prefix) { color: var(--color-sand-light) !important; }

      .btn-excel::part(base) {
        background-color: #15803d;
        border-color: #15803d;
      }
      .btn-excel::part(base):hover { background-color: #166534; border-color: #166534; }
      .btn-excel::part(label), .btn-excel::part(prefix) { color: var(--color-sand-light) !important; }

      /* PRZYCISK ZAMKNIJ NA DOLE OKIENKA */
      .btn-close-footer::part(base) {
        background-color: var(--color-wood-dark);
        border-color: var(--color-wood-dark);
      }
      .btn-close-footer::part(base):hover {
        background-color: var(--color-wood-medium);
        border-color: var(--color-wood-medium);
      }
      .btn-close-footer::part(label) {
        color: var(--color-sand-light) !important;
      }

      /* FORMULARZE I DIALOGI */
      form { display: flex; flex-direction: column; gap: 15px; color: var(--color-wood-dark); }

      sl-input, sl-textarea, sl-select {
        --sl-input-background-color: var(--color-sand-light);
        --sl-input-background-color-hover: var(--color-sand-light);
        --sl-input-background-color-focus: var(--color-sand-light);
        --sl-input-border-color: var(--color-wood-medium);
        --sl-input-border-color-hover: var(--color-wood-medium);
        --sl-input-border-color-focus: var(--color-wood-medium);
        --sl-input-color: var(--color-wood-dark);
        --sl-input-label-color: var(--color-wood-dark);
      }

      sl-dialog {
        --sl-panel-background-color: var(--color-sand-light);
        color: var(--color-wood-dark);
      }
      sl-dialog::part(title) { color: var(--color-wood-dark); font-weight: bold; }

      /* IMPORT EXCELA */
      .upload-container { display: flex; flex-direction: column; gap: 20px; padding: 10px 0; }
      .instructions {
        background-color: var(--color-cookie-medium);
        padding: 20px;
        border-left: 5px solid var(--color-wood-dark);
        border-radius: 8px;
        color: var(--color-wood-dark);
      }

      input[type="file"]::file-selector-button {
        border: 2px solid var(--color-wood-medium);
        padding: 8px 16px;
        border-radius: 8px;
        background-color: var(--color-sand-light);
        color: var(--color-wood-dark);
        cursor: pointer;
        transition: all 0.2s ease;
        margin-right: 10px;
        font-weight: bold;
      }
      input[type="file"]::file-selector-button:hover {
        background-color: var(--color-cookie-medium);
      }
    `
  ];

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
    this.editDialog.show();
    setTimeout(() => {
      this.resetForm();
      if (this.adminView === 'intentions') {
        this.inputTitle.value = 'Intencja: ';
      }
    }, 0);
  }

  private async handleEdit(event: ParishEvent) {
    this.isEditing = true;
    this.selectedEventId = event.id;
    this.editDialog.show();
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
      if (res.ok) { this.editDialog.hide(); await this.fetchData(); }
      else alert('Wystąpił błąd podczas zapisywania wydarzenia.');
    } catch (e) { console.error(e); alert('Nie udało się połączyć z serwerem.'); }
    finally { this.isSubmitting = false; }
  }

  private resetForm() {
    this.inputTitle.value = ''; this.inputDate.value = ''; this.inputDescription.value = ''; this.inputLocation.value = ''; this.inputGroup.value = '';
  }

  // --- LOGIKA EXCELA ---
  private openExcelDialog() {
    this.importErrors = [];
    this.importSuccessMsg = null;
    if(this.fileInput) this.fileInput.value = '';
    this.excelDialog.show();
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
        const wb = XLSX.read(bstr, { type: 'binary', cellDates: true });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws, { header: 1 }) as any[][];

        const parsedEvents: any[] = [];

        for (let i = 1; i < data.length; i++) {
          const row = data[i];
          if (!row || row.length === 0) continue;

          const rawDate = row[0];
          const rawTime = row[1];
          const content = row[2];
          const from = row[3];

          if (!rawDate && !rawTime && !content) continue;

          if (!rawDate || !rawTime || !content) {
            this.importErrors.push(`Wiersz ${i + 1}: Brakuje daty, godziny lub treści intencji!`);
            continue;
          }

          let dateStr = '';
          if (rawDate instanceof Date) {
            dateStr = rawDate.toISOString().split('T')[0];
          } else if (typeof rawDate === 'string') {
            const parts = rawDate.includes('.') ? rawDate.split('.') : rawDate.split('-');
            if(parts.length === 3) dateStr = rawDate.includes('.') ? `${parts[2]}-${parts[1]}-${parts[0]}` : rawDate;
          }

          let timeStr = '';
          if (rawTime instanceof Date) {
            timeStr = rawTime.toISOString().split('T')[1].substring(0,5);
          } else if (typeof rawTime === 'string') {
            timeStr = rawTime.replace('.', ':');
          } else if (typeof rawTime === 'number') {
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
          return;
        }

        if (parsedEvents.length === 0) {
          this.importErrors.push("Nie znaleziono żadnych danych do zaimportowania.");
          this.isImporting = false;
          return;
        }

        const res = await fetch('http://localhost:3000/api/events/bulk', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ events: parsedEvents })
        });

        if (res.ok) {
          const result = await res.json();
          this.importSuccessMsg = result.message;
          await this.fetchData();
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
          <sl-button size="small" class="btn-edit" @click=${() => this.handleEdit(event)}>
             <sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj
          </sl-button>
          <sl-button size="small" class="btn-delete" @click=${() => this.handleDelete(event.id)}>
             <sl-icon slot="prefix" name="trash"></sl-icon> Usuń
          </sl-button>
        </div>
      </div>
    `);
  }

  render() {
    const now = new Date();

    const isIntention = (e: ParishEvent) => e.title.startsWith('Intencja:');
    const currentData = this.events.filter(e => this.adminView === 'intentions' ? isIntention(e) : !isIntention(e));

    const activeEvents = currentData.filter(e => new Date(e.startTime) >= now);
    const archivedEvents = currentData.filter(e => new Date(e.startTime) < now);

    return html`
      <div class="view-controls">
        <sl-button-group>
          <sl-button variant=${this.adminView === 'events' ? 'primary' : 'default'} @click=${() => { this.adminView = 'events'; this.requestUpdate(); }}>
            Zarządzaj Wydarzeniami
          </sl-button>
          <sl-button variant=${this.adminView === 'intentions' ? 'primary' : 'default'} @click=${() => { this.adminView = 'intentions'; this.requestUpdate(); }}>
            Zarządzaj Intencjami
          </sl-button>
        </sl-button-group>
      </div>

      <div class="header-actions">
        <h2>${this.adminView === 'events' ? 'Lista Wydarzeń' : 'Lista Intencji Mszalnych'}</h2>

        <div style="display: flex; gap: 10px;">
          ${this.adminView === 'intentions' ? html`
            <sl-button class="btn-excel" @click=${this.openExcelDialog}>
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
      ${activeEvents.length ? this.renderEventList(activeEvents) : html`<p style="color: var(--color-wood-dark);">Brak zaplanowanych pozycji.</p>`}

      <sl-divider></sl-divider>

      <div class="section-title">
        <sl-icon name="archive"></sl-icon> Archiwum (Zakończone)
      </div>
      ${archivedEvents.length ? this.renderEventList(archivedEvents, true) : html`<p style="color: var(--color-wood-dark);">Archiwum jest puste.</p>`}

      <sl-dialog id="edit-dialog" label="${this.isEditing ? 'Edytuj' : 'Nowy Wpis'}">
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

      <sl-dialog id="excel-dialog" label="Import Intencji z pliku Excel">
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
            <sl-button class="btn-excel" style="width: 100%; margin-top: 10px;" size="large" @click=${this.triggerFileSelect} ?loading=${this.isImporting}>
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
            <sl-alert variant="success" open style="margin-top: 15px;">
              <sl-icon slot="icon" name="check2-circle"></sl-icon>
              <strong>Sukces!</strong><br />${this.importSuccessMsg}
            </sl-alert>
          ` : ''}
        </div>
        <sl-button slot="footer" class="btn-close-footer" @click=${() => this.excelDialog.hide()}>Zamknij</sl-button>
      </sl-dialog>
    `;
  }
}