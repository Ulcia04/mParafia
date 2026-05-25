import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

@customElement('app-admin-kancelaria')
export class AppAdminKancelaria extends LitElement {
  @state() private items: any[] = [];
  @query('sl-dialog') dialog!: any;
  @state() private editingItem: any = null;
  @state() private isSubmitting = false;

  static styles = [sharedStyles, css`
    :host { display: block; padding: 10px; }
    .header-actions { display: flex; justify-content: space-between; margin-bottom: 25px; }
    .header-actions h2 { margin: 0; color: var(--color-wood-dark); font-size: 1.3rem; }
    .list-container { display: flex; flex-direction: column; gap: 15px; }
    .list-item { background: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; padding: 15px; display: flex; align-items: center; justify-content: space-between;}
    .item-info { display: flex; align-items: center; gap: 15px; color: var(--color-wood-dark); font-weight: bold; font-size: 1.1rem; }
    .item-info sl-icon { font-size: 1.8rem; }
    .actions-container { display: flex; gap: 10px; }
    form { display: flex; flex-direction: column; gap: 15px; }
    sl-dialog { --sl-panel-background-color: var(--color-sand-light); }
    sl-input, sl-textarea { --sl-input-background-color: var(--color-sand-light); --sl-input-color: var(--color-wood-dark); --sl-input-label-color: var(--color-wood-dark); }
    input[type="file"]::file-selector-button { background-color: var(--color-sand-light); border: 1px solid var(--color-wood-medium); padding: 5px 10px; border-radius: 5px; cursor: pointer; color: var(--color-wood-dark); }
  `];

  async firstUpdated() { this.fetchItems(); }

  async fetchItems() {
    const res = await fetch('http://localhost:3000/api/kancelaria');
    this.items = await res.json();
  }

  openEdit(item: any = null) {
    this.editingItem = item || { title: '', icon: 'folder', content: '', footer: '', fileUrl: '', fileName: '' };
    this.dialog.show();
  }

  async save() {
    if (!this.editingItem.title) return alert('Tytuł jest wymagany!');
    this.isSubmitting = true;
    const url = this.editingItem.id ? `http://localhost:3000/api/kancelaria/${this.editingItem.id}` : 'http://localhost:3000/api/kancelaria';
    const method = this.editingItem.id ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.editingItem) });
      if (res.ok) { this.dialog.hide(); await this.fetchItems(); }
    } catch (e) { alert('Błąd!'); }
    finally { this.isSubmitting = false; }
  }

  async deleteItem(id: number) {
    if (confirm('Usunąć tę sprawę?')) {
      await fetch(`http://localhost:3000/api/kancelaria/${id}`, { method: 'DELETE' });
      this.fetchItems();
    }
  }

  async handleFileUpload(e: any) {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('photo', file);
    try {
      const res = await fetch('http://localhost:3000/api/upload', { method: 'POST', body: formData });
      if (res.ok) {
        const data = await res.json();
        this.editingItem = { ...this.editingItem, fileUrl: data.url, fileName: file.name };
      }
    } catch (err) { alert('Błąd wgrywania pliku.'); }
  }

  render() {
    return html`
      <div class="header-actions">
        <h2>Zarządzaj Sprawami Kancelaryjnymi</h2>
        <sl-button variant="primary" @click=${() => this.openEdit()}>
          <sl-icon slot="prefix" name="plus-lg"></sl-icon> Dodaj Sprawę
        </sl-button>
      </div>

      <div class="list-container">
        ${this.items.map(i => html`
          <div class="list-item">
            <div class="item-info"><sl-icon name="${i.icon}"></sl-icon> ${i.title}</div>
            <div class="actions-container">
              <sl-button size="small" @click=${() => this.openEdit(i)}><sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj</sl-button>
              <sl-button size="small" variant="danger" @click=${() => this.deleteItem(i.id)}><sl-icon slot="prefix" name="trash"></sl-icon> Usuń</sl-button>
            </div>
          </div>
        `)}
      </div>

      <sl-dialog label="${this.editingItem?.id ? 'Edytuj Sprawę' : 'Nowa Sprawa'}">
        <form>
          <sl-input label="Tytuł (np. Chrzest)" .value=${this.editingItem?.title} @sl-input=${(e:any) => this.editingItem.title = e.target.value}></sl-input>
          <sl-input label="Ikona (nazwa z Shoelace, np. droplet-fill, fire)" .value=${this.editingItem?.icon} @sl-input=${(e:any) => this.editingItem.icon = e.target.value}></sl-input>
          <sl-textarea label="Opis wymaganych dokumentów (wspiera HTML: <br>, <ul>, <li>)" rows="5" .value=${this.editingItem?.content} @sl-input=${(e:any) => this.editingItem.content = e.target.value}></sl-textarea>
          <sl-input label="Dopisek pod spodem (opcjonalnie)" .value=${this.editingItem?.footer} @sl-input=${(e:any) => this.editingItem.footer = e.target.value}></sl-input>

          <div style="border: 1px dashed var(--color-wood-medium); padding: 10px; border-radius: 8px;">
            <label style="font-size: 0.9rem; color: var(--color-wood-dark); display: block; margin-bottom: 5px;">Plik do pobrania (np. PDF)</label>
            <input type="file" accept=".pdf,.doc,.docx" @change=${this.handleFileUpload} />
            ${this.editingItem?.fileName ? html`<div style="margin-top: 5px; color: green; font-size: 0.9rem;">Wgrano: ${this.editingItem.fileName}</div>` : ''}
          </div>
        </form>
        <sl-button slot="footer" variant="primary" ?loading=${this.isSubmitting} @click=${this.save}>Zapisz</sl-button>
      </sl-dialog>
    `;
  }
}