import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';

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

  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        padding: 10px 0;
      }
      
      .header-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
      }
      
      .header-actions h2 {
        margin: 0;
        color: var(--color-wood-dark);
        font-size: 1.3rem;
      }

      .list-container {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      /* GŁÓWNY STYL DLA ELEMENTU LISTY */
      .list-item {
        display: flex;
        align-items: center;
        background-color: var(--color-sand-light);
        border: 1px solid var(--color-wood-medium);
        border-radius: 10px;
        padding: 12px 15px;
        transition: background-color 0.2s ease, transform 0.1s ease;
      }

      .list-item:hover {
        background-color: var(--color-cookie-medium);
      }

      .logo-container {
        margin-right: 15px;
      }

      .content-container {
        flex: 1; /* Wypełnia środek */
        display: flex;
        flex-direction: column;
      }

      .entity-name {
        font-weight: bold;
        font-size: 1.1rem;
        color: var(--color-wood-dark);
      }

      .entity-desc {
        font-size: 0.85rem;
        color: #666;
        margin-top: 4px;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* Przycina za długi opis do 1 linijki */
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .actions-container {
        display: flex;
        gap: 10px;
        margin-left: 10px;
      }

      sl-icon-button {
        font-size: 1.3rem;
        color: var(--color-wood-dark);
      }
      
      sl-icon-button::part(base):hover {
        color: var(--color-wood-medium);
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
    `
  ];

  async firstUpdated() { 
    this.fetchGroups(); 
  }

  async fetchGroups() {
    const res = await fetch('http://localhost:3000/api/groups');
    this.groups = await res.json();
  }

  private openEdit(group: any = null) {
    this.editingGroup = group || { name: '', description: '', photoUrl: '' };
    this.dialog.show();
  }

  private async save() {
    const method = this.editingGroup.id ? 'PUT' : 'POST';
    const url = this.editingGroup.id 
      ? `http://localhost:3000/api/groups/${this.editingGroup.id}` 
      : 'http://localhost:3000/api/groups';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.editingGroup)
    });
    this.dialog.hide();
    this.fetchGroups();
  }

  private async deleteGroup(id: number) {
    if(confirm('Czy na pewno chcesz usunąć tę grupę?')) {
      await fetch(`http://localhost:3000/api/groups/${id}`, { method: 'DELETE' });
      this.fetchGroups();
    }
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
              <sl-button size="small" variant="default" @click=${() => this.openEdit(g)}>
                <sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj
              </sl-button>
              
              <sl-button size="small" variant="danger" outline @click=${() => this.deleteGroup(g.id)}>
                <sl-icon slot="prefix" name="trash"></sl-icon> Usuń
              </sl-button>
            </div>

          </div>
        `)}
      </div>

      <sl-dialog label="${this.editingGroup?.id ? 'Edytuj Grupę' : 'Nowa Grupa'}">
        <form>
          <sl-input label="Nazwa" required .value=${this.editingGroup?.name} @sl-input=${(e:any) => this.editingGroup.name = e.target.value}></sl-input>
          <sl-input label="URL do Logo (Link do zdjęcia)" placeholder="np. https://mojastrona.pl/logo.png" .value=${this.editingGroup?.photoUrl} @sl-input=${(e:any) => this.editingGroup.photoUrl = e.target.value}></sl-input>
          <sl-textarea label="Opis" .value=${this.editingGroup?.description} @sl-input=${(e:any) => this.editingGroup.description = e.target.value}></sl-textarea>
        </form>
        <sl-button slot="footer" variant="primary" @click=${this.save}>Zapisz zmiany</sl-button>
      </sl-dialog>
      
    `;
  }
}