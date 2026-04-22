import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import '../components/calendar-item';

interface ParishGroup {
  id: number;
  name: string;
  description?: string;
}

interface ParishEvent {
  id: number;
  title: string;
  startTime: string;
  category?: string;
  groupId?: number; 
}

@customElement('app-group-detail')
export class AppGroupDetail extends LitElement {
  
  @state() private groupId: number | null = null;
  @state() private group: ParishGroup | null = null;
  @state() private events: ParishEvent[] = [];
  @state() private isLoading = true;

  connectedCallback() {
    super.connectedCallback();
    
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get('id');
    
    if (idParam) {
      this.groupId = parseInt(idParam, 10);
    }
  }

  async firstUpdated() {
    if (this.groupId) {
      await this.fetchGroupDetails();
    } else {
      this.isLoading = false;
    }
  }

  async fetchGroupDetails() {
    try {
      // 1. Pobieramy wszystkie grupy z endpointu, o którym wiemy, że działa
      const groupResponse = await fetch('http://localhost:3000/api/groups');
      if (groupResponse.ok) {
        const allGroups: ParishGroup[] = await groupResponse.json();
        
        // Szukamy w tablicy grupy o naszym ID
        this.group = allGroups.find(g => g.id === this.groupId) || null;
        
        // Jeśli udało się znaleźć grupę, zmieniamy tytuł
        if (this.group) {
          this.dispatchEvent(new CustomEvent('change-title', {
            detail: { title: this.group.name },
            bubbles: true, composed: true
          }));
        }
      }

      const eventsResponse = await fetch('http://localhost:3000/api/events');
      if (eventsResponse.ok) {
        const allEvents: ParishEvent[] = await eventsResponse.json();
        
        this.events = allEvents.filter(event => event.groupId === this.groupId);
      }
    } catch (error) {
      console.error('Błąd podczas pobierania danych:', error);
    } finally {
      this.isLoading = false;
    }
  }

  private formatDate(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pl-PL', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        padding: 15px;
        max-width: 600px;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .center-content {
        display: flex;
        justify-content: center;
        padding: 40px;
        color: var(--color-wood-medium);
      }

      .header-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 30px;
        background-color: var(--color-sand-light);
        padding: 20px;
        border-radius: 16px;
        border: 2px solid var(--color-wood-medium);
      }

      .group-photo-large {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #fff;
        border: 3px solid var(--color-wood-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      }

      .group-photo-large sl-icon {
        font-size: 50px;
        color: var(--color-wood-dark);
      }

      .group-name {
        font-size: 1.5rem;
        color: var(--color-wood-dark);
        margin: 0 0 10px 0;
      }

      .group-description {
        font-size: 1rem;
        color: #555;
        line-height: 1.5;
        margin: 0;
      }

      .section-title {
        font-size: 1.2rem;
        color: var(--color-wood-dark);
        border-bottom: 2px solid var(--color-wood-medium);
        padding-bottom: 8px;
        margin-bottom: 15px;
      }

      .events-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
      }

     /* POPRAWIONE STYLE DLA KALENDARZA */
      calendar-item {
        display: block;
        width: 100%;
        box-sizing: border-box;
        cursor: pointer;
        
        /* 1. Dodajemy ciemne tło, aby jasny tekst był widoczny */
        background-color: var(--color-wood-dark);
        
        /* 2. Zabezpieczamy jasny kolor tekstu (dla Shadow DOM) */
        color: var(--color-sand-light);
        --item-text-color: var(--color-sand-light);
        
        /* 3. Estetyka kafelka */
        border-radius: 12px;
        padding: 5px;
        box-shadow: 0 4px 10px rgba(127, 69, 29, 0.15);
        transition: transform 0.2s ease, background-color 0.2s ease;
      }

      /* Efekt wizualny przy kliknięciu */
      calendar-item:active {
        transform: scale(0.98);
        background-color: var(--color-wood-medium);
      }
    `
  ];

  render() {
    if (this.isLoading) {
      return html`
        <div class="center-content">
          <sl-spinner style="font-size: 2rem;"></sl-spinner>
        </div>
      `;
    }

    if (!this.group) {
      return html`
        <div class="center-content">
          <p>Nie znaleziono takiej grupy.</p>
        </div>
      `;
    }

    return html`
      <div class="header-section">
        <div class="group-photo-large">
          <sl-icon name="people-fill"></sl-icon>
        </div>
        <h2 class="group-name">${this.group.name}</h2>
        ${this.group.description 
          ? html`<p class="group-description">${this.group.description}</p>` 
          : html`<p class="group-description">Ta grupa nie ma jeszcze opisu.</p>`
        }
      </div>

      <div class="events-section">
        <h3 class="section-title">Wydarzenia grupy</h3>
        
        ${this.events.length === 0 
          ? html`<p style="color: #666; text-align: center;">Brak nadchodzących wydarzeń dla tej grupy.</p>` 
          : html`
              <div class="events-list">
                ${this.events.map(event => {
                  const timeStr = this.formatDate(event.startTime);
                  const category = event.category || 'spotkanie';

                  return html`
                    <calendar-item
                      time="${timeStr}"
                      name="${event.title}"
                      category="${category}"
                      multiline
                    ></calendar-item>
                  `;
                })}
              </div>
            `
        }
      </div>
    `;
  }
}