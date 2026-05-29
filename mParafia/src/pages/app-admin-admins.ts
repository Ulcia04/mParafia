import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';
import { apiFetch } from '../utils/api';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';

@customElement('app-admin-admins')
export class AppAdminAdmins extends LitElement {
  @state() private admins: any[] = [];
  @state() private groups: any[] = [];
  @query('sl-dialog') dialog!: any;

  @state() private editingAdmin: any = null;
  @state() private isSubmitting = false;

  static styles = [sharedStyles, css`
    :host { display: block; padding: 10px; max-width: 900px; width: 100%; margin: 0 auto; box-sizing: border-box; }
    .header-actions { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
    .header-actions h2 { margin: 0; color: var(--color-wood-dark); font-size: 1.3rem; }
    .list-container { display: flex; flex-direction: column; gap: 15px; }
    .list-item { background: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; padding: 15px; display: flex; align-items: center; justify-content: space-between; width: 100%; box-sizing: border-box; }
    .item-info { display: flex; flex-direction: column; gap: 5px; flex: 1; overflow: hidden; }
    .admin-header { display: flex; align-items: center; gap: 10px; color: var(--color-wood-dark); font-weight: bold; font-size: 1.1rem; }
    .admin-details { font-size: 0.9rem; color: var(--color-wood-dark); opacity: 0.9; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .actions-container { display: flex; gap: 10px; flex-shrink: 0; }
    .btn-edit::part(base) { background-color: #d97706; border-color: #d97706; }
    .btn-edit::part(base):hover { background-color: #db6104; border-color: #db6104; }
    .btn-edit::part(label), .btn-edit::part(prefix) { color: var(--color-sand-light) !important; }
    .btn-delete::part(base) { background-color: rgba(220, 38, 38, 0.8); border-color: transparent; }
    .btn-delete::part(base):hover { background-color: rgba(220, 38, 38, 1); }
    .btn-delete::part(label), .btn-delete::part(prefix) { color: var(--color-sand-light) !important; }
    .btn-cancel::part(base) { background-color: var(--color-wood-dark); border-color: var(--color-wood-medium); color: var(--color-sand-light); font-weight: 600; }
    .btn-cancel::part(base):hover { background-color: var(--color-wood-dark); border-color: var(--color-wood-dark); }
    .btn-cancel::part(label) { color: var(--color-sand-light) !important; }
    .btn-save::part(base) { background-color: var(--color-wood-dark); border-color: var(--color-wood-dark); color: var(--color-sand-light); font-weight: 600; }
    .btn-save::part(label) { color: var(--color-sand-light) !important; }
    sl-dialog { --sl-panel-background-color: var(--color-sand-light); }
    sl-dialog::part(title) { color: var(--color-wood-dark); font-weight: bold; }
    sl-dialog::part(close-button) { color: var(--color-wood-dark); }
    form { display: flex; flex-direction: column; gap: 15px; }
    sl-input {
      --sl-input-border-color: var(--color-wood-medium);
      --sl-input-focus-border-color: var(--color-wood-dark);
      --sl-input-focus-ring-color: rgba(127, 69, 29, 0.2);
    }
    sl-input::part(base), sl-select::part(combobox) {
      background-color: var(--color-sand-light) !important;
      border-color: var(--color-wood-medium) !important;
    }
    sl-input::part(input), sl-select::part(display-input) {
      background-color: var(--color-sand-light) !important;
      color: var(--color-wood-dark) !important;
    }
    sl-select::part(expand-icon), sl-select::part(clear-button) { color: var(--color-wood-dark); }
    sl-select::part(listbox) {
      background-color: var(--color-sand-light) !important;
      border: 1px solid var(--color-wood-medium);
    }
    sl-option::part(base) {
      background-color: var(--color-sand-light) !important;
      color: var(--color-wood-dark) !important;
    }
    sl-option::part(base):hover,
    sl-option:focus-within::part(base) {
      background-color: var(--color-cookie-medium) !important;
      color: var(--color-wood-dark) !important;
    }
    sl-option[checked]::part(base),
    sl-option[current]::part(base) {
      background-color: var(--color-sand-light) !important;
      color: var(--color-wood-dark) !important;
      font-weight: bold;
    }
    sl-option::part(checked-icon) {
      color: var(--color-wood-dark) !important;
    }
    sl-tag::part(base) {
      background-color: var(--color-wood-medium) !important;
      border-color: var(--color-wood-medium) !important;
      color: var(--color-sand-light) !important;
    }
    sl-tag::part(remove-button) {
      color: var(--color-sand-light) !important;
      opacity: 0.8;
    }
    sl-tag::part(remove-button):hover { opacity: 1; }
    sl-switch { --sl-toggle-size: 1.2rem; display: flex; align-items: center; }
    sl-switch::part(thumb) { background-color: var(--color-wood-medium) !important; border: 2px solid var(--color-wood-medium) !important; transition: background-color 0.3s ease, border-color 0.3s ease !important; }
    sl-switch[checked]::part(thumb) { background-color: var(--color-wood-dark) !important; border-color: var(--color-wood-dark) !important; }
    sl-switch::part(control) { background-color: var(--color-cookie-medium) !important; border-color: var(--color-cookie-medium) !important; box-shadow: none !important; outline: none !important; transition: background-color 0.3s ease, border-color 0.3s ease !important; }
    sl-switch[checked]::part(control) { background-color: var(--color-wood-medium) !important; border-color: var(--color-wood-medium) !important; }
    sl-switch::part(label) { color: var(--color-wood-dark); font-size: 0.9rem; font-weight: 500; margin-left: 8px; transition: font-weight 0.1s ease !important; }
    sl-switch[checked]::part(label) { font-weight: 530; }
    sl-badge::part(base) { background-color: var(--color-wood-dark); color: var(--color-sand-light); border-color: var(--color-wood-dark); }
    .badge-super { background-color: #7F451D !important; border-color: #7F451D !important; }
  `];

  async firstUpdated() {
    this.fetchAdmins();
    this.fetchGroups();
  }

  async fetchAdmins() {
    try {
      const res = await apiFetch('/admins');
      if(res.ok) {
        const data = await res.json();
        this.admins = data.sort((a: any, b: any) => Number(b.isSuperAdmin) - Number(a.isSuperAdmin));
      }
    } catch (e) { console.error("Błąd pobierania adminów", e); }
  }

  async fetchGroups() {
    try {
      const res = await apiFetch('/groups');
      if(res.ok) this.groups = await res.json();
    } catch (e) { console.error("Błąd pobierania grup", e); }
  }

  openEdit(admin: any = null) {
    if (admin) {
      const selectedGroups = admin.managedGroups?.map((mg: any) => String(mg.groupId)) || [];
      this.editingAdmin = { ...admin, allowedGroupIds: selectedGroups };
    } else {
      this.editingAdmin = { login: '', password: '', isSuperAdmin: false, allowedGroupIds: [] };
    }
    this.dialog.show();
  }

  async save() {
    if (!this.editingAdmin.login) return alert('Login jest wymagany!');
    if (!this.editingAdmin.id && !this.editingAdmin.password) return alert('Dla nowego admina musisz podać hasło!');

    this.isSubmitting = true;
    const url = this.editingAdmin.id ? `/admins/${this.editingAdmin.id}` : '/admins';
    const method = this.editingAdmin.id ? 'PUT' : 'POST';

    try {
      const res = await apiFetch(url, { method, body: JSON.stringify(this.editingAdmin) });
      if (res.ok) {
        this.dialog.hide();
        await this.fetchAdmins();
      } else {
        const err = await res.json();
        alert(err.error || 'Błąd zapisywania!');
      }
    } catch (e) { alert('Błąd komunikacji z serwerem.'); }
    finally { this.isSubmitting = false; }
  }

  async deleteItem(id: number) {
    if (confirm('Usunąć tego administratora?')) {
      await apiFetch(`/admins/${id}`, { method: 'DELETE' });
      this.fetchAdmins();
    }
  }

  render() {
    return html`
      <div class="header-actions">
        <h2>Zarządzaj Administratorami</h2>
        <sl-button variant="primary" @click=${() => this.openEdit()}>
          <sl-icon slot="prefix" name="person-plus-fill"></sl-icon> Dodaj Admina
        </sl-button>
      </div>

      <div class="list-container">
        ${this.admins.map(a => html`
          <div class="list-item">
            <div class="item-info">
              <div class="admin-header">
                <sl-icon name="person-circle" style="font-size: 1.5rem;"></sl-icon>
                ${a.login}
              </div>
              <div class="admin-details">
                ${a.isSuperAdmin
                  ? html`<sl-badge class="badge-super" pill>Superadmin</sl-badge>`
                  : html`
                      <strong>Zarządza grupami:</strong>
                      ${a.managedGroups && a.managedGroups.length > 0
                        ? a.managedGroups.map((mg: any) => html`<sl-badge pill>${this.groups.find(g => g.id === mg.groupId)?.name || 'Nieznana'}</sl-badge>`)
                        : html`<em>Brak przypisanych grup</em>`
                      }
                    `
                }
              </div>
            </div>
            <div class="actions-container">
              <sl-button size="small" class="btn-edit" @click=${() => this.openEdit(a)}><sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj</sl-button>
              <sl-button size="small" class="btn-delete" @click=${() => this.deleteItem(a.id)}><sl-icon slot="prefix" name="trash"></sl-icon> Usuń</sl-button>
            </div>
          </div>
        `)}
      </div>

      <sl-dialog label="${this.editingAdmin?.id ? 'Edytuj Administratora' : 'Nowy Administrator'}">
        <form @submit=${(e: Event) => e.preventDefault()}>

          ${this.editingAdmin?.id ? html`
            <div style="margin-bottom: 5px;">
              <label style="color: var(--color-wood-dark); font-size: 0.9rem; font-weight: bold; display: block; margin-bottom: 5px;">Login administratora</label>
              <div style="font-size: 1.2rem; color: var(--color-wood-dark); display: flex; align-items: center; gap: 8px;">
                <sl-icon name="person-badge-fill"></sl-icon> ${this.editingAdmin.login}
              </div>
            </div>
          ` : html`
            <label style="color: var(--color-wood-dark); font-size: 0.9rem; font-weight: bold; margin-bottom: -10px;">Login</label>
            <sl-input
              required
              autocomplete="off"
              .value=${this.editingAdmin?.login || ''}
              @sl-input=${(e:any) => this.editingAdmin.login = e.target.value}>
            </sl-input>
          `}

          ${!this.editingAdmin?.id ? html`
            <label style="color: var(--color-wood-dark); font-size: 0.9rem; font-weight: bold; margin-bottom: -10px;">Hasło</label>
            <sl-input
              type="password"
              password-toggle
              required
              autocomplete="new-password"
              .value=${this.editingAdmin?.password || ''}
              @sl-input=${(e:any) => this.editingAdmin.password = e.target.value}>
            </sl-input>
          ` : ''}

          <div style="margin-top: 10px; margin-bottom: 5px;">
            <sl-switch
              .checked=${this.editingAdmin?.isSuperAdmin || false}
              @sl-change=${(e:any) => {
                this.editingAdmin = { ...this.editingAdmin, isSuperAdmin: e.target.checked };
                this.requestUpdate();
              }}>
              Super Administrator (pełen dostęp)
            </sl-switch>
          </div>

          ${!this.editingAdmin?.isSuperAdmin ? html`
            <label style="color: var(--color-wood-dark); font-size: 0.9rem; font-weight: bold; margin-bottom: -10px;">Przypisz grupy do zarządzania</label>
            <sl-select
              multiple
              clearable
              .value=${this.editingAdmin?.allowedGroupIds || []}
              @sl-change=${(e:any) => {
                const selectedValues = Array.isArray(e.target.value) ? e.target.value : [e.target.value];
                this.editingAdmin.allowedGroupIds = selectedValues.map(String);
              }}>
              ${this.groups.map(g => html`<sl-option value="${g.id}">${g.name}</sl-option>`)}
            </sl-select>
          ` : html`
            <div style="padding: 10px; background: rgba(185, 28, 28, 0.1); border-radius: 8px; color: #b91c1c; font-size: 0.9rem;">
              <sl-icon name="info-circle-fill"></sl-icon> Ten użytkownik ma uprawnienia Superadmina, więc ma pełen dostęp do wszystkich grup.
            </div>
          `}
        </form>

        <sl-button slot="footer" class="btn-cancel" @click=${() => this.dialog.hide()}>Anuluj</sl-button>
        <sl-button slot="footer" class="btn-save" ?loading=${this.isSubmitting} @click=${this.save}>Zapisz</sl-button>
      </sl-dialog>
    `;
  }
}