import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';
import { apiFetch } from '../utils/api';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
import '@shoelace-style/shoelace/dist/components/avatar/avatar.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';

@customElement('app-group-admin')
export class AppAdminsGroups extends LitElement {
  @state() private groups: any[] = [];
  @state() private selectedGroup: any = null;
  @state() private groupEvents: any[] = [];
  @state() private isSubmitting = false;

  @state() private editingEvent: any = null;
  @state() private isEventSubmitting = false;

  // NOWY STAN DLA WYLOGOWYWANIA
  @state() private loggingOut = false;

  @query('#event-dialog') eventDialog!: any;

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('change-title', {
      detail: { title: 'Zarządzanie Moją Grupą' },
      bubbles: true,
      composed: true
    }));
  }

  async firstUpdated() {
    await this.fetchGroups();
  }

  async fetchGroups() {
    try {
      const res = await apiFetch('/groups');
      if (res.ok) {
        const allGroups = await res.json();

        const isSuperAdmin = localStorage.getItem('isSuperAdmin') === 'true';

        if (isSuperAdmin) {
          this.groups = allGroups;
        } else {
          const allowedStr = localStorage.getItem('allowedGroups');
          const allowedGroups = allowedStr ? JSON.parse(allowedStr) : [];
          this.groups = allGroups.filter((g: any) => allowedGroups.includes(g.id));
        }
      }
    } catch (e) {
      console.error('Błąd pobierania grup:', e);
    }
  }

  async selectGroup(group: any) {
    this.selectedGroup = { ...group };
    await this.fetchGroupEvents(group.id);
  }

  clearSelection() {
    this.selectedGroup = null;
    this.groupEvents = [];
  }

  async fetchGroupEvents(groupId: number) {
    try {
      const res = await apiFetch('/events/all');
      if (res.ok) {
        const allEvents = await res.json();
        this.groupEvents = allEvents
          .filter((e: any) => e.groupId === groupId)
          .sort((a: any, b: any) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());
      }
    } catch (e) {
      console.error('Błąd pobierania wydarzeń:', e);
    }
  }

  async saveGroupData() {
    if (!this.selectedGroup?.name) return;
    this.isSubmitting = true;

    try {
      const res = await apiFetch(`/groups/${this.selectedGroup.id}`, {
        method: 'PUT',
        body: JSON.stringify(this.selectedGroup)
      });

      if (res.ok) {
        alert('Zapisano zmiany w grupie!');
        await this.fetchGroups();
      } else {
        alert('Błąd podczas zapisywania.');
      }
    } catch (e) {
      console.error(e);
    } finally {
      this.isSubmitting = false;
    }
  }

  openAddEventDialog() {
    this.editingEvent = {
      title: '',
      startTime: '',
      location: '',
      description: '',
      groupId: this.selectedGroup.id
    };
    this.eventDialog.show();
  }

  openEditEventDialog(event: any) {
    this.editingEvent = { ...event };
    this.eventDialog.show();
  }

  async saveEvent() {
    if (!this.editingEvent?.title || !this.editingEvent?.startTime) {
      alert('Proszę wypełnić wymagane pola: Tytuł oraz Datę!');
      return;
    }

    this.isEventSubmitting = true;
    const isEditing = !!this.editingEvent.id;

    const endpoint = isEditing ? `/events/${this.editingEvent.id}` : '/events';
    const method = isEditing ? 'PUT' : 'POST';

    let safeDate = this.editingEvent.startTime;
    if (safeDate && !safeDate.includes('Z')) {
      safeDate = new Date(safeDate).toISOString();
    }

    const payload = {
      ...this.editingEvent,
      startTime: safeDate,
      groupIds: [this.selectedGroup.id]
    };

    try {
      const res = await apiFetch(endpoint, {
        method,
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        this.eventDialog.hide();
        await this.fetchGroupEvents(this.selectedGroup.id);
      } else {
        alert('Wystąpił błąd podczas zapisywania wydarzenia.');
      }
    } catch (e) {
      console.error(e);
      alert('Nie udało się połączyć z serwerem.');
    } finally {
      this.isEventSubmitting = false;
    }
  }

  async deleteEvent(eventId: number) {
    if (!confirm('Czy na pewno chcesz usunąć to wydarzenie?')) return;
    try {
      const res = await apiFetch(`/events/${eventId}`, { method: 'DELETE' });
      if (res.ok) {
        await this.fetchGroupEvents(this.selectedGroup.id);
      }
    } catch (e) {
      console.error(e);
    }
  }

  private async handleLogout() {
    this.loggingOut = true;
    try {
      await apiFetch('/admin/logout', { method: 'POST' });
    } catch (error) {
      console.error('Błąd serwera podczas wylogowywania:', error);
    } finally {
      localStorage.removeItem('isAdmin');
      localStorage.removeItem('isSuperAdmin');
      localStorage.removeItem('allowedGroups');

      const base = (import.meta as any).env.BASE_URL || '/';
      const targetPath = '/admin-login';
      const fullPath = base === '/' ? targetPath : base + targetPath.substring(1);

      window.location.href = fullPath;
    }
  }

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

      .top-bar {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 10px;
      }

      sl-button.logout-btn::part(base) {
        background-color: var(--color-wood-dark);
        border-color: var(--color-wood-dark);
        color: var(--color-sand-light) !important;
        font-weight: 600;
        border-radius: 8px;
        transition: filter 0.2s;
      }
      sl-button.logout-btn::part(label), sl-button.logout-btn::part(prefix) {
        color: var(--color-sand-light) !important;
      }
      sl-button.logout-btn::part(base):hover {
        filter: brightness(1.2);
      }

      .header-title { color: var(--color-wood-dark); margin-bottom: 5px; }
      .header-subtitle { color: var(--color-wood-dark); opacity: 0.8; margin-top: 0; margin-bottom: 25px; }
      .list-container { display: flex; flex-direction: column; gap: 15px; }
      .list-item { display: flex; align-items: center; background-color: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; padding: 15px 20px; transition: background-color 0.2s ease, border-color 0.2s ease; }
      .logo-container { margin-right: 20px; }
      .content-container { flex: 1; display: flex; flex-direction: column; }
      .entity-name { font-weight: bold; font-size: 1.15rem; color: var(--color-wood-dark); }
      .entity-desc { font-size: 0.9rem; color: var(--color-wood-dark); opacity: 0.8; margin-top: 6px; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
      .actions-container { display: flex; gap: 10px; margin-left: 15px; }
      .btn-select::part(base) { background-color: #d97706; border-color: #d97706; }
      .btn-select::part(base):hover { background-color: #db6104; border-color: #db6104; }
      .btn-select::part(label), .btn-select::part(suffix) { color: var(--color-sand-light) !important; }
      .header-actions { display: flex; align-items: center; gap: 15px; margin-bottom: 25px; }
      .header-actions h2 { margin: 0; color: var(--color-wood-dark); }
      .admin-container { background-color: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(127, 69, 29, 0.1); }
      sl-tab-group::part(nav) { background-color: var(--color-cookie-medium); border-bottom: 2px solid var(--color-wood-medium); }
      sl-tab::part(base) { color: var(--color-wood-dark); font-weight: 500; padding: 15px 20px; transition: background-color 0.2s; }
      sl-tab[active]::part(base) { font-weight: bold; border-bottom-color: var(--color-wood-dark); color: var(--color-wood-dark); background-color: var(--color-sand-light); }
      sl-tab-panel::part(base) { padding: 25px 20px; }
      form { display: flex; flex-direction: column; gap: 15px; }
      sl-input, sl-textarea {
        --sl-input-color: var(--color-wood-dark);
        --sl-input-color-hover: var(--color-wood-dark);
        --sl-input-color-focus: var(--color-wood-dark);
        --sl-input-label-color: var(--color-wood-dark);
        --sl-input-border-color: var(--color-wood-medium);
        --sl-input-border-color-hover: var(--color-wood-dark);
        --sl-input-border-color-focus: var(--color-wood-dark);
      }
      sl-input::part(base), sl-textarea::part(base) {
        background-color: var(--color-sand-light) !important;
        transition: box-shadow 0.2s ease;
      }
      sl-input::part(base):focus-within, sl-textarea::part(base):focus-within {
        box-shadow: 0 0 0 3px rgba(127, 69, 29, 0.2) !important;
      }
      sl-input::part(input), sl-textarea::part(textarea) {
        color: var(--color-wood-dark) !important;
      }
      sl-input::part(input):hover, sl-input::part(input):focus,
      sl-textarea::part(textarea):hover, sl-textarea::part(textarea):focus {
        color: var(--color-wood-dark) !important;
      }
      .btn-back::part(base) { background-color: var(--color-wood-dark); border-color: var(--color-wood-dark); border-radius: 8px; transition: all 0.2s ease; }
      .btn-back::part(base):hover { background-color: var(--color-wood-medium); border-color: var(--color-wood-medium); transform: translateY(-2px); box-shadow: 0 4px 12px rgba(127, 69, 29, 0.25); }
      .btn-back::part(label), .btn-back::part(prefix) { color: var(--color-sand-light) !important; }
      .btn-submit::part(base) { background-color: var(--color-wood-dark); border-color: var(--color-wood-dark); border-radius: 8px; transition: all 0.2s ease; padding: 0 10px; }
      .btn-submit::part(base):hover { background-color: var(--color-wood-medium); border-color: var(--color-wood-medium); transform: translateY(-2px); box-shadow: 0 4px 12px rgba(127, 69, 29, 0.25); }
      .btn-submit::part(label), .btn-submit::part(prefix) { color: var(--color-sand-light) !important; }
      sl-dialog { --sl-panel-background-color: var(--color-sand-light); }
      sl-dialog::part(title) { color: var(--color-wood-dark); font-weight: bold; }
      .event-item { padding: 15px; border: 1px solid var(--color-wood-medium); border-radius: 8px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; color: var(--color-wood-dark); background-color: var(--color-sand-light); }
      .event-actions { display: flex; gap: 8px; }
      .btn-edit::part(base) { background-color: #d97706; border-color: #d97706; }
      .btn-edit::part(base):hover { background-color: #db6104; border-color: #db6104; }
      .btn-edit::part(label), .btn-edit::part(prefix) { color: var(--color-sand-light) !important; }
      .btn-delete::part(base) { background-color: rgba(220, 38, 38, 0.8); border-color: transparent; }
      .btn-delete::part(base):hover { background-color: rgba(220, 38, 38, 1); }
      .btn-delete::part(label), .btn-delete::part(prefix) { color: var(--color-sand-light) !important; }
    `
  ];

  renderSelectionView() {
    return html`
      <div>
        <h2 class="header-title">Wybierz grupę</h2>
      </div>

      <div class="list-container">
        ${this.groups.map(g => html`
          <div class="list-item">
            <div class="logo-container">
              <sl-avatar
                image="${g.photoUrl || ''}"
                label="${g.name}"
                initials="${g.name.substring(0, 2).toUpperCase()}"
                style="--size: 50px;">
              </sl-avatar>
            </div>
            <div class="content-container">
              <span class="entity-name">${g.name}</span>
              ${g.description ? html`<span class="entity-desc">${g.description}</span>` : ''}
            </div>
            <div class="actions-container">
              <sl-button size="small" class="btn-select" @click=${() => this.selectGroup(g)}>
                Zarządzaj <sl-icon slot="suffix" name="arrow-right"></sl-icon>
              </sl-button>
            </div>
          </div>
        `)}
      </div>
    `;
  }

  renderManagementView() {
    return html`
      <div class="header-actions">
        <sl-button class="btn-back" @click=${this.clearSelection}>
          <sl-icon slot="prefix" name="arrow-left"></sl-icon> Wróć
        </sl-button>
        <h2>Panel Grupy: ${this.selectedGroup.name}</h2>
      </div>

      <div class="admin-container">
        <sl-tab-group>
          <sl-tab slot="nav" panel="info">
            <sl-icon name="pencil-square" style="margin-right: 8px;"></sl-icon> Informacje o grupie
          </sl-tab>
          <sl-tab slot="nav" panel="events">
            <sl-icon name="calendar-event" style="margin-right: 8px;"></sl-icon> Wydarzenia
          </sl-tab>

          <sl-tab-panel name="info">
            <form>
              <sl-input label="Nazwa grupy" .value=${this.selectedGroup.name} @sl-input=${(e: any) => this.selectedGroup.name = e.target.value}></sl-input>
              <sl-textarea label="Opis grupy" rows="4" .value=${this.selectedGroup.description || ''} @sl-input=${(e: any) => this.selectedGroup.description = e.target.value}></sl-textarea>
              <sl-button class="btn-submit" style="align-self: flex-start; margin-top: 15px;" ?loading=${this.isSubmitting} @click=${this.saveGroupData}>
                <sl-icon slot="prefix" name="check2-circle"></sl-icon> Zapisz zmiany w profilu
              </sl-button>
            </form>
          </sl-tab-panel>

          <sl-tab-panel name="events">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
              <h3 style="margin: 0; color: var(--color-wood-dark);">Wydarzenia grupy</h3>
              <sl-button class="btn-submit" @click=${this.openAddEventDialog}>
                <sl-icon slot="prefix" name="plus-lg"></sl-icon> Dodaj wydarzenie
              </sl-button>
            </div>

            ${this.groupEvents.length === 0
              ? html`<p style="color: var(--color-wood-dark);">Brak zaplanowanych wydarzeń dla tej grupy.</p>`
              : html`
                <div style="display: flex; flex-direction: column;">
                  ${this.groupEvents.map(e => html`
                    <div class="event-item">
                      <div>
                        <strong style="font-size: 1.1rem;">${e.title}</strong><br>
                        <span style="font-size: 0.9em; opacity: 0.8;">
                          <sl-icon name="clock" style="margin-right: 4px;"></sl-icon>
                          ${new Date(e.startTime).toLocaleString('pl-PL', { dateStyle: 'medium', timeStyle: 'short' })}
                        </span>
                        ${e.location ? html`<br><span style="font-size: 0.85em; opacity: 0.7;"><sl-icon name="geo-alt"></sl-icon> ${e.location}</span>` : ''}
                      </div>
                      <div class="event-actions">
                        <sl-button size="small" class="btn-edit" @click=${() => this.openEditEventDialog(e)}>
                          <sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj
                        </sl-button>
                        <sl-button size="small" class="btn-delete" @click=${() => this.deleteEvent(e.id)}>
                          <sl-icon slot="prefix" name="trash"></sl-icon>
                        </sl-button>
                      </div>
                    </div>
                  `)}
                </div>
              `
            }
          </sl-tab-panel>
        </sl-tab-group>
      </div>

      <sl-dialog id="event-dialog" label="${this.editingEvent?.id ? 'Edytuj Wydarzenie' : 'Dodaj Nowe Wydarzenie'}">
        <form>
          <sl-input label="Tytuł" required .value=${this.editingEvent?.title || ''} @sl-input=${(e: any) => this.editingEvent.title = e.target.value}></sl-input>
          <sl-input type="datetime-local" label="Data i godzina" required .value=${this.editingEvent?.startTime ? this.editingEvent.startTime.substring(0, 16) : ''} @sl-input=${(e: any) => this.editingEvent.startTime = e.target.value}></sl-input>
          <sl-input label="Lokalizacja (opcjonalnie)" .value=${this.editingEvent?.location || ''} @sl-input=${(e: any) => this.editingEvent.location = e.target.value}></sl-input>
          <sl-textarea label="Opis" rows="3" .value=${this.editingEvent?.description || ''} @sl-input=${(e: any) => this.editingEvent.description = e.target.value}></sl-textarea>
        </form>
        <sl-button slot="footer" class="btn-submit" ?loading=${this.isEventSubmitting} @click=${this.saveEvent}>
          <sl-icon slot="prefix" name="check2-circle"></sl-icon> Zapisz Wydarzenie
        </sl-button>
      </sl-dialog>
    `;
  }

  render() {
    return html`
      <div class="top-bar">
        <sl-button
          class="logout-btn"
          size="small"
          ?loading="${this.loggingOut}"
          @click="${this.handleLogout}">
          <sl-icon slot="prefix" name="box-arrow-right"></sl-icon>
          Wyloguj się
        </sl-button>
      </div>

      ${!this.selectedGroup ? this.renderSelectionView() : this.renderManagementView()}
    `;
  }
}