import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';
import { apiFetch } from '../utils/api';

import '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';
import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
import '@shoelace-style/shoelace/dist/components/radio-button/radio-button.js';

@customElement('app-settings')
export class AppSettings extends LitElement {
  @state() private groups: any[] = [];
  @state() private myGroups: number[] = [];
  @state() private firstDayOfWeek = localStorage.getItem('firstDay') || 'monday';

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('change-title', {
      detail: { title: 'Ustawienia Aplikacji' },
      bubbles: true,
      composed: true
    }));
    this.loadSettings();
  }

  async loadSettings() {
    try {
      const res = await apiFetch('/groups');
      if (res.ok) this.groups = await res.json();
    } catch (e) {
      console.error('Błąd pobierania grup w ustawieniach:', e);
    }

    const saved = localStorage.getItem('myGroups');
    this.myGroups = saved ? JSON.parse(saved).map(Number) : [];
  }

  toggleGroup(id: number) {
    const numericId = Number(id);
    if (this.myGroups.includes(numericId)) {
      this.myGroups = this.myGroups.filter(g => g !== numericId);
    } else {
      this.myGroups = [...this.myGroups, numericId];
    }
    localStorage.setItem('myGroups', JSON.stringify(this.myGroups));

    // Globalny sygnał informujący kalendarz o zmianie filtra grup
    window.dispatchEvent(new Event('settings-changed'));
  }

  updateFirstDay(e: any) {
    this.firstDayOfWeek = e.target.value;
    localStorage.setItem('firstDay', this.firstDayOfWeek);

    // Globalny sygnał informujący kalendarz o zmianie sposobu wyświetlania dni
    window.dispatchEvent(new Event('settings-changed'));
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
        color: var(--color-wood-dark);
      }
      .section {
        background: var(--color-sand-light);
        padding: 25px;
        border-radius: 12px;
        border: 2px solid var(--color-wood-medium);
        margin-bottom: 20px;
        box-shadow: 0 4px 15px rgba(127, 69, 29, 0.05);
      }
      h3 {
        margin-top: 0;
        margin-bottom: 15px;
        color: var(--color-wood-dark);
      }
      sl-checkbox {
        --sl-input-color: var(--color-wood-dark);
        --sl-input-label-color: var(--color-wood-dark);
      }
      sl-radio-button::part(button) {
        --sl-input-color: var(--color-wood-dark);
      }
    `
  ];

  render() {
    return html`
      <div class="section">
        <h3>Kalendarz: Pierwszy dzień tygodnia</h3>
        <sl-radio-group .value=${this.firstDayOfWeek} @sl-change=${this.updateFirstDay}>
          <sl-radio-button value="monday">Poniedziałek</sl-radio-button>
          <sl-radio-button value="sunday">Niedziela</sl-radio-button>
        </sl-radio-group>
      </div>

      <div class="section">
        <h3>Moje grupy (wybierz widoczne w kalendarzu)</h3>
        <p style="font-size: 0.9rem; opacity: 0.8; margin-bottom: 15px;">Zaznacz grupy, do których należysz, aby móc szybko filtrować wydarzenia w kalendarzu parafialnym.</p>
        ${this.groups.length === 0 ? html`<p>Ładowanie grup...</p>` : this.groups.map(g => html`
          <sl-checkbox
            ?checked=${this.myGroups.includes(Number(g.id))}
            @sl-change=${() => this.toggleGroup(g.id)}
            style="display: block; margin-bottom: 12px; font-size: 1.05rem;">
            ${g.name}
          </sl-checkbox>
        `)}
      </div>
    `;
  }
}