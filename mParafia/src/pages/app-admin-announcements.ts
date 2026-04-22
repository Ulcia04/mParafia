import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';

import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
  isMain: boolean; 
}

@customElement('app-admin-announcements')
export class AppAdminAnnouncements extends LitElement {
  
  @state() private announcements: Announcement[] = [];
  @state() private isSubmitting = false;
  @state() private editingId: number | null = null;

  @query('#title-input') titleInput!: any;
  @query('#date-input') dateInput!: any;
  @query('#content-input') contentInput!: any;

  async firstUpdated() {
    await this.fetchAnnouncements();
  }

  async fetchAnnouncements() {
    try {
      const response = await fetch('http://localhost:3000/api/announcements');
      if (response.ok) {
        const data: Announcement[] = await response.json();
        this.announcements = data.sort((a, b) => {
          if (a.isMain) return -1;
          if (b.isMain) return 1;
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
      }
    } catch (error) {
      console.error('Błąd pobierania ogłoszeń:', error);
    }
  }

  async handleSubmit(e: Event) {
    e.preventDefault();
    
    const title = this.titleInput.value;
    const date = this.dateInput.value;
    const content = this.contentInput.value;

    if (!title || !date || !content) {
      alert('Wypełnij wszystkie pola!');
      return;
    }

    this.isSubmitting = true;

    try {
      let response;

      if (this.editingId) {
        response = await fetch(`http://localhost:3000/api/announcements/${this.editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, date, content })
        });
      } else {
        response = await fetch('http://localhost:3000/api/announcements', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, date, content })
        });
      }

      if (response.ok) {
        this.resetForm();
        await this.fetchAnnouncements();
      } else {
        alert('Błąd zapisu ogłoszenia.');
      }
    } catch (error) {
      console.error('Błąd:', error);
    } finally {
      this.isSubmitting = false;
    }
  }

  async handleDelete(id: number) {
    if (!confirm('Czy na pewno chcesz usunąć to ogłoszenie?')) return;

    try {
      const response = await fetch(`http://localhost:3000/api/announcements/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        if (this.editingId === id) this.resetForm(); 
        await this.fetchAnnouncements();
      }
    } catch (error) {
      console.error('Błąd usuwania:', error);
    }
  }

  async toggleMain(id: number) {
    try {
      const response = await fetch(`http://localhost:3000/api/announcements/${id}/toggle-main`, {
        method: 'PUT'
      });

      if (response.ok) {
        await this.fetchAnnouncements();
      }
    } catch (error) {
      console.error('Błąd przy przełączaniu głównego ogłoszenia:', error);
    }
  }

  startEditing(ann: Announcement) {
    this.editingId = ann.id;
    this.titleInput.value = ann.title;
    const formattedDate = new Date(ann.date).toISOString().split('T')[0];
    this.dateInput.value = formattedDate;
    this.contentInput.value = ann.content;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  resetForm() {
    this.editingId = null;
    this.titleInput.value = '';
    this.dateInput.value = '';
    this.contentInput.value = '';
  }

  private formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('pl-PL');
  }

  static styles = [
    sharedStyles,
    css`
      :host { display: block; padding: 20px; }
      .form-section { background-color: #fff; padding: 20px; border-radius: 8px; border: 1px solid var(--color-wood-medium); margin-bottom: 30px; transition: border-color 0.3s ease, box-shadow 0.3s ease; }
      .form-section.is-editing { border-color: #d97706; box-shadow: 0 0 0 2px rgba(217, 119, 6, 0.2); }
      .form-title { color: var(--color-wood-dark); margin-top: 0; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center; }
      .form-row { display: flex; gap: 15px; margin-bottom: 15px; }
      .form-row sl-input { flex: 1; }
      sl-textarea { margin-bottom: 15px; }
      .button-group { display: flex; gap: 10px; }
      .submit-btn { flex: 1; }
      .list-section h3 { color: var(--color-wood-dark); margin-bottom: 15px; }
      
      /* KLUCZOWA ZMIANA: position: relative pozwala umieścić ticka w rogu */
      .announcement-item { 
        position: relative; 
        background-color: #fff; 
        border: 1px solid var(--color-wood-medium); 
        border-radius: 8px; 
        padding: 15px; 
        margin-bottom: 15px; 
        display: flex; 
        flex-direction: column; 
        gap: 10px; 
      }
      
      .announcement-item.is-main { 
        border: 2px solid var(--color-wood-dark); 
        background-color: var(--color-sand-light); 
      }
      
      /* NOWE STYLE DLA TICKA */
      .main-tick {
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 1.6rem;
        color: #ccc;
        cursor: pointer;
        transition: transform 0.2s, color 0.2s;
      }
      
      .main-tick:hover {
        transform: scale(1.1);
      }
      
      .main-tick.is-active {
        color: #198754; /* Ładny zielony kolor zaznaczenia */
      }

      .announcement-header { display: flex; justify-content: space-between; align-items: flex-start; width: 100%; padding-right: 30px; /* miejsce na ticka */ }
      .announcement-info h4 { margin: 0 0 5px 0; color: var(--color-wood-dark); display: flex; align-items: center; gap: 8px;}
      .announcement-info span { font-size: 0.85rem; color: #666; }
      .actions { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
    `
  ];

  render() {
    return html`
      <div class="form-section ${this.editingId ? 'is-editing' : ''}">
        <div class="form-title">
          <h2>${this.editingId ? 'Edytuj ogłoszenie' : 'Dodaj nowe ogłoszenia'}</h2>
          ${this.editingId ? html`<sl-badge variant="warning" pill>Tryb Edycji</sl-badge>` : ''}
        </div>
        
        <form @submit="${this.handleSubmit}">
          <div class="form-row">
            <sl-input id="title-input" label="Tytuł" placeholder="np. Ogłoszenia - III Niedziela Zwykła" required></sl-input>
            <sl-input id="date-input" type="date" label="Data" required></sl-input>
          </div>
          <sl-textarea id="content-input" label="Treść ogłoszeń" placeholder="Wpisz tutaj treść ogłoszeń..." rows="6" resize="auto" required></sl-textarea>
          <div class="button-group">
            <sl-button type="submit" variant="primary" class="submit-btn" ?loading="${this.isSubmitting}">
              <sl-icon slot="prefix" name="${this.editingId ? 'save' : 'plus-circle'}"></sl-icon>
              ${this.editingId ? 'Zapisz zmiany' : 'Opublikuj ogłoszenia'}
            </sl-button>
            ${this.editingId ? html`<sl-button variant="default" @click="${this.resetForm}">Anuluj</sl-button>` : ''}
          </div>
        </form>
      </div>

      <sl-divider></sl-divider>

      <div class="list-section">
        <h3>Zarządzaj ogłoszeniami</h3>
        
        ${this.announcements.length === 0 
          ? html`<p style="color: #666;">Brak ogłoszeń w bazie.</p>` 
          : this.announcements.map(ann => html`
            <div class="announcement-item ${ann.isMain ? 'is-main' : ''}">
              
              <sl-icon 
                class="main-tick ${ann.isMain ? 'is-active' : ''}" 
                name="${ann.isMain ? 'check-circle-fill' : 'check-circle'}" 
                @click="${() => this.toggleMain(ann.id)}"
                title="${ann.isMain ? 'Odznacz jako główne' : 'Ustaw jako główne'}">
              </sl-icon>

              <div class="announcement-header">
                <div class="announcement-info">
                  <h4>
                    ${ann.title}
                    ${ann.isMain ? html`<sl-badge variant="success" pill>Strona Główna</sl-badge>` : ''}
                  </h4>
                  <span>Data: ${this.formatDate(ann.date)}</span>
                </div>
              </div>

              <div class="actions">
                <sl-button size="small" @click="${() => this.startEditing(ann)}">
                  <sl-icon slot="prefix" name="pencil"></sl-icon>
                  Edytuj
                </sl-button>
                
                <sl-button size="small" variant="danger" outline @click="${() => this.handleDelete(ann.id)}">
                  <sl-icon slot="prefix" name="trash"></sl-icon>
                  Usuń
                </sl-button>
              </div>

            </div>
          `)
        }
      </div>
    `;
  }
}