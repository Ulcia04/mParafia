import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';
import { apiFetch } from '../utils/api';

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
  @state() private isUploading = false;

  static styles = [sharedStyles, css`
    :host { display: block; padding: 10px; max-width: 900px; width: 100%; margin: 0 auto; box-sizing: border-box; }
    .header-actions { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; flex-wrap: wrap; gap: 15px;}
    .header-actions h2 { margin: 0; color: var(--color-wood-dark); }
    .view-controls { display: flex; justify-content: center; margin-bottom: 25px; }
    .list-container { display: flex; flex-direction: column; gap: 15px; }
    .list-item { background: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; padding: 15px; display: flex; align-items: center; justify-content: space-between;}
    .item-info { display: flex; align-items: center; gap: 15px; color: var(--color-wood-dark); font-weight: bold; font-size: 1.1rem; }
    .item-info img { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; border: 2px solid var(--color-wood-dark); }
    .actions-container { display: flex; gap: 10px; }
    form { display: flex; flex-direction: column; gap: 15px; }
    sl-input, sl-textarea, sl-select { --sl-input-background-color: var(--color-sand-light); --sl-input-background-color-hover: var(--color-sand-light); --sl-input-background-color-focus: var(--color-sand-light); --sl-input-border-color: var(--color-wood-medium); --sl-input-border-color-hover: var(--color-wood-medium); --sl-input-border-color-focus: var(--color-wood-medium); --sl-input-color: var(--color-wood-dark); --sl-input-label-color: var(--color-wood-dark); }
    sl-dialog { --sl-panel-background-color: var(--color-sand-light); color: var(--color-wood-dark); }
    sl-dialog::part(title) { color: var(--color-wood-dark); font-weight: bold; }
    sl-input::part(input):hover, sl-textarea::part(textarea):hover {
      color: var(--color-wood-dark) !important;
    }
    .upload-container { display: flex; flex-direction: column; gap: 20px; padding: 10px 0; }
    .instructions { background-color: var(--color-cookie-medium); padding: 20px; border-left: 5px solid var(--color-wood-dark); border-radius: 8px; color: var(--color-wood-dark); }
    input[type="file"]::file-selector-button { border: 2px solid var(--color-wood-medium); padding: 8px 16px; border-radius: 8px; background-color: var(--color-sand-light); color: var(--color-wood-dark); cursor: pointer; transition: all 0.2s ease; margin-right: 10px; font-weight: bold; }
    input[type="file"]::file-selector-button:hover { background-color: var(--color-cookie-medium); }
    .files-list { list-style: none; padding: 0; margin-top: 10px; }
    .files-list li { display: flex; justify-content: space-between; align-items: center; background: var(--color-cookie-medium); padding: 8px 12px; border-radius: 6px; margin-bottom: 5px; color: var(--color-wood-dark); }
    .files-list sl-button::part(base) { color: red; }
    .btn-edit::part(base) { background-color: #d97706; border-color: #d97706; color: white; }
    .btn-edit::part(base):hover { background-color: #db6104; border-color: #db6104; }
    .btn-delete::part(base) { background-color: rgba(220, 38, 38, 0.8); border-color: transparent; color: white; }
    .btn-delete::part(base):hover { background-color: rgba(220, 38, 38, 1); }
    .btn-edit::part(label), .btn-edit::part(prefix),
    .btn-delete::part(label), .btn-delete::part(prefix) {
      color: var(--color-sand-light) !important;
    }
    sl-dialog { --sl-panel-background-color: var(--color-sand-light); }
    form { display: flex; flex-direction: column; gap: 15px; }
    .files-list { list-style: none; padding: 0; margin-top: 10px; }
    .files-list li { display: flex; justify-content: space-between; align-items: center; background: var(--color-cookie-medium); padding: 8px 12px; border-radius: 6px; margin-bottom: 5px; color: var(--color-wood-dark); }
  `];

  async firstUpdated() { this.fetchItems(); }

  async fetchItems() {
    const res = await apiFetch('/kancelaria');
    if(res.ok) this.items = await res.json();
  }

  openEdit(item: any = null) {
  let files = item?.files;
  if (typeof files === 'string') files = JSON.parse(files);

  this.editingItem = item
    ? { ...item, files: files || [] }
    : { title: '', photoUrl: '', content: '', footer: '', files: [] };
  this.dialog.show();
}

  async save() {
    console.log("Co wysyłam:", this.editingItem);
    if (!this.editingItem.title) return alert('Tytuł jest wymagany!');
    this.isSubmitting = true;
    const url = this.editingItem.id ? `/kancelaria/${this.editingItem.id}` : '/kancelaria';
    const method = this.editingItem.id ? 'PUT' : 'POST';

    try {
      const res = await apiFetch(url, { method, body: JSON.stringify(this.editingItem) });
      if (res.ok) { this.dialog.hide(); await this.fetchItems(); }
    } catch (e) { alert('Błąd zapisywania!'); }
    finally { this.isSubmitting = false; }
  }

  async deleteItem(id: number) {
    if (confirm('Usunąć tę sprawę?')) {
      await apiFetch(`/kancelaria/${id}`, { method: 'DELETE' });
      this.fetchItems();
    }
  }

  async handlePhotoUpload(e: any) {
    const file = e.target.files[0];
    if (!file) return;
    this.isUploading = true;
    const formData = new FormData();
    formData.append('photo', file);
    try {
      const res = await apiFetch('/upload', { method: 'POST', body: formData });
      if (res.ok) {
        const data = await res.json();
        this.editingItem = { ...this.editingItem, photoUrl: data.url };
        this.requestUpdate();
      }
    } catch (err) { alert('Błąd wgrywania zdjęcia.'); }
    finally { this.isUploading = false; }
  }

  async handleDocumentUpload(e: any) {
    const file = e.target.files[0];
    if (!file) return;
    this.isUploading = true;
    const formData = new FormData();
    formData.append('photo', file); // Nasz serwerowy multer i tak używa klucza 'photo' dla wszystkiego
    try {
      const res = await apiFetch('/upload', { method: 'POST', body: formData });
      if (res.ok) {
        const data = await res.json();
        // Dodajemy nowy plik do tablicy files
        const newFile = { url: data.url, name: file.name };
        this.editingItem = { ...this.editingItem, files: [...this.editingItem.files, newFile] };
        this.requestUpdate();
      }
    } catch (err) { alert('Błąd wgrywania dokumentu.'); }
    finally { this.isUploading = false; e.target.value = ''; }
  }

  removeFile(indexToRemove: number) {
    const updatedFiles = this.editingItem.files.filter((_: any, index: number) => index !== indexToRemove);
    this.editingItem = { ...this.editingItem, files: updatedFiles };
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
            <div class="item-info">
              ${i.photoUrl ? html`<img src="${i.photoUrl}">` : html`<sl-icon name="folder"></sl-icon>`}
              ${i.title}
            </div>
            <div class="actions-container">
              <sl-button size="small" class="btn-edit" @click=${() => this.openEdit(i)}>
                <sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj
              </sl-button>
              <sl-button size="small" class="btn-delete" @click=${() => this.deleteItem(i.id)}>
                <sl-icon slot="prefix" name="trash"></sl-icon> Usuń
              </sl-button>
            </div>
          </div>
        `)}
      </div>

      <sl-dialog label="${this.editingItem?.id ? 'Edytuj Sprawę' : 'Nowa Sprawa'}">
        <form>
          <sl-input label="Tytuł" required .value=${this.editingItem?.title} @sl-input=${(e:any) => this.editingItem.title = e.target.value}></sl-input>

          <div style="display: flex; flex-direction: column; gap: 8px;">
            <label style="font-size: 0.9rem; color: var(--color-wood-dark);">Zdjęcie kafelka</label>
            <input type="file" accept="image/*" @change=${this.handlePhotoUpload} />
            ${this.editingItem?.photoUrl ? html`<img src="${this.editingItem.photoUrl}" style="max-width: 100px; border-radius: 8px; border: 1px solid var(--color-wood-medium); margin-top: 5px;" />` : ''}
          </div>

          <sl-textarea label="Opis wymaganych dokumentów" rows="5" .value=${this.editingItem?.content} @sl-input=${(e:any) => this.editingItem.content = e.target.value}></sl-textarea>
          <sl-input label="Dopisek pod spodem" .value=${this.editingItem?.footer} @sl-input=${(e:any) => this.editingItem.footer = e.target.value}></sl-input>

          <div style="border: 1px dashed var(--color-wood-medium); padding: 10px; border-radius: 8px;">
            <label style="font-size: 0.9rem; color: var(--color-wood-dark); display: block; margin-bottom: 5px;">Pliki do pobrania</label>
            <input type="file" accept=".pdf,.doc,.docx" @change=${this.handleDocumentUpload} />
            <ul class="files-list">
              ${(this.editingItem?.files || []).map((f: any, index: number) => html`
                <li>
                  <span style="font-size: 0.9rem; word-break: break-all;">${f.name}</span>
                  <sl-button variant="text" size="small" @click=${() => this.removeFile(index)}>Usuń</sl-button>
                </li>
              `)}
            </ul>
          </div>
        </form>
        <sl-button slot="footer" variant="primary" ?loading=${this.isSubmitting || this.isUploading} @click=${this.save}>Zapisz</sl-button>
      </sl-dialog>
    `;
  }
}