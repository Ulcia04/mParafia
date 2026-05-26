import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';
import { apiFetch } from '../utils/api';

import '@shoelace-style/shoelace/dist/components/avatar/avatar.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js';

@customElement('app-admin-groups')
export class AppAdminGroups extends LitElement {
  @state() private groups: any[] = [];
  @query('sl-dialog') dialog!: any;
  @state() private editingGroup: any = null;
  @state() private isSubmitting = false;

  static styles = [
    sharedStyles,
    css`
      :host { display: block; padding: 10px; max-width: 900px; width: 100%; margin: 0 auto; box-sizing: border-box; }
      .header-actions { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
      .header-actions h2 { margin: 0; color: var(--color-wood-dark); font-size: 1.3rem; }
      .list-container { display: flex; flex-direction: column; gap: 15px; }
      .list-item { display: flex; align-items: center; background-color: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; padding: 15px 20px; transition: background-color 0.2s ease, border-color 0.2s ease; }
      .logo-container { margin-right: 20px; }
      .content-container { flex: 1; display: flex; flex-direction: column; }
      .entity-name { font-weight: bold; font-size: 1.15rem; color: var(--color-wood-dark); }
      .entity-desc { font-size: 0.9rem; color: var(--color-wood-dark); opacity: 0.8; margin-top: 6px; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
      .actions-container { display: flex; gap: 10px; margin-left: 15px; }
      .btn-edit::part(base) { background-color: #d97706; border-color: #d97706; }
      .btn-edit::part(base):hover { background-color: #db6104; border-color: #db6104; }
      .btn-edit::part(label), .btn-edit::part(prefix) { color: var(--color-sand-light) !important; }
      .btn-delete::part(base) { background-color: rgba(220, 38, 38, 0.8); border-color: transparent; }
      .btn-delete::part(base):hover { background-color: rgba(220, 38, 38, 1); }
      .btn-delete::part(label), .btn-delete::part(prefix) { color: var(--color-sand-light) !important; }
      form { display: flex; flex-direction: column; gap: 15px; color: var(--color-wood-dark); }
      sl-input, sl-textarea { --sl-input-background-color: var(--color-sand-light); --sl-input-background-color-hover: var(--color-sand-light); --sl-input-background-color-focus: var(--color-sand-light); --sl-input-border-color: var(--color-wood-medium); --sl-input-border-color-hover: var(--color-wood-medium); --sl-input-border-color-focus: var(--color-wood-medium); --sl-input-color: var(--color-wood-dark); --sl-input-color-hover: var(--color-wood-dark); --sl-input-color-focus: var(--color-wood-dark); --sl-input-label-color: var(--color-wood-dark); }
      input[type="file"] { color: var(--color-wood-dark); }
      input[type="file"]::file-selector-button { border: 1px solid var(--color-wood-medium); padding: 8px 16px; border-radius: 8px; background-color: var(--color-sand-light); color: var(--color-wood-dark); cursor: pointer; transition: all 0.2s ease; margin-right: 10px; font-weight: bold; }
      input[type="file"]::file-selector-button:hover { background-color: var(--color-cookie-medium); border-color: var(--color-wood-medium); }
      sl-dialog { --sl-panel-background-color: var(--color-sand-light); color: var(--color-wood-dark); }
      sl-dialog::part(title) { color: var(--color-wood-dark); font-weight: bold; }
      sl-dialog::part(close-button) { color: var(--color-wood-dark); }
    `
  ];

  async firstUpdated() { this.fetchGroups(); }

  async fetchGroups() {
    const res = await apiFetch('/groups');
    if(res.ok) this.groups = await res.json();
  }

  private openEdit(group: any = null) {
    this.editingGroup = group || { name: '', description: '', photoUrl: '', color: '#B87333'};
    this.dialog.show();
  }

  private async save() {
    if (!this.editingGroup?.name || this.editingGroup.name.trim() === '') return alert('Nazwa grupy jest wymagana!');
    if (this.isSubmitting) return;
    this.isSubmitting = true;

    try {
      const method = this.editingGroup.id ? 'PUT' : 'POST';
      const url = this.editingGroup.id ? `/groups/${this.editingGroup.id}` : '/groups';

      const res = await apiFetch(url, { method, body: JSON.stringify(this.editingGroup) });
      if (res.ok) { this.dialog.hide(); await this.fetchGroups(); }
      else alert('Wystąpił błąd przy zapisywaniu grupy.');
    } catch (e) { console.error(e); }
    finally { this.isSubmitting = false; }
  }

  private async deleteGroup(id: number) {
    if(confirm('Czy na pewno chcesz usunąć tę grupę?')) {
      await apiFetch(`/groups/${id}`, { method: 'DELETE' });
      this.fetchGroups();
    }
  }

  private async handleFileUpload(e: any) {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('photo', file);

    try {
      const res = await apiFetch('/upload', { method: 'POST', body: formData });
      if (res.ok) {
        const data = await res.json();
        this.editingGroup = { ...this.editingGroup, photoUrl: data.url };
        this.requestUpdate();
      } else alert('Błąd podczas wgrywania zdjęcia.');
    } catch (err) { console.error(err); }
  }

  render() {
    return html`
      <div class="header-actions">
        <h2>Lista Grup</h2>
        <sl-button variant="primary" @click=${() => this.openEdit()}>
          <sl-icon slot="prefix" name="plus-lg"></sl-icon> Dodaj Grupę
        </sl-button>
      </div>
      <div class="list-container">
        ${this.groups.map(g => html`
          <div class="list-item">
            <div class="logo-container"><sl-avatar image="${g.photoUrl || ''}" label="${g.name}" initials="${g.name.substring(0, 2).toUpperCase()}" style="--size: 50px;"></sl-avatar></div>
            <div class="content-container"><span class="entity-name">${g.name}</span>${g.description ? html`<span class="entity-desc">${g.description}</span>` : ''}</div>
            <div class="actions-container">
              <sl-button size="small" class="btn-edit" @click=${() => this.openEdit(g)}><sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj</sl-button>
              <sl-button size="small" class="btn-delete" @click=${() => this.deleteGroup(g.id)}><sl-icon slot="prefix" name="trash"></sl-icon> Usuń</sl-button>
            </div>
          </div>
        `)}
      </div>
      <sl-dialog label="${this.editingGroup?.id ? 'Edytuj Grupę' : 'Nowa Grupa'}">
        <form>
          <sl-input label="Nazwa" required .value=${this.editingGroup?.name} @sl-input=${(e:any) => this.editingGroup.name = e.target.value}></sl-input>
          <sl-input type="color" label="Kolor grupy" .value=${this.editingGroup?.color} @sl-input=${(e:any) => this.editingGroup.color = e.target.value}></sl-input>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <label style="font-size: 0.9rem; color: var(--color-wood-dark);">Logo grupy (Zdjęcie z komputera)</label>
            <input type="file" accept="image/*" @change=${this.handleFileUpload} />
            ${this.editingGroup?.photoUrl ? html`<img src="${this.editingGroup.photoUrl}" style="max-width: 100px; border-radius: 8px; border: 1px solid var(--color-wood-medium);" />` : ''}
          </div>
          <sl-textarea label="Opis" .value=${this.editingGroup?.description} @sl-input=${(e:any) => this.editingGroup.description = e.target.value}></sl-textarea>
        </form>
        <sl-button slot="footer" variant="primary" @click=${this.save}>Zapisz zmiany</sl-button>
      </sl-dialog>
    `;
  }
}