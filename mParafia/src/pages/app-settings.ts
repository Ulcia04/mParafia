import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';
import { apiFetch } from '../utils/api';

import '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';
import '@shoelace-style/shoelace/dist/components/button-group/button-group.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';

@customElement('app-settings')
export class AppSettings extends LitElement {
  @state() private groups: any[] = [];
  @state() private myGroups: number[] = [];
  @state() private firstDayOfWeek = localStorage.getItem('firstDay') || 'monday';
  @state() private isDarkMode = false;

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
    window.dispatchEvent(new Event('settings-changed'));
  }

  updateFirstDay(day: string) {
    this.firstDayOfWeek = day;
    localStorage.setItem('firstDay', this.firstDayOfWeek);
    window.dispatchEvent(new Event('settings-changed'));
  }

  handleDarkModeToggle(e: any) {
    this.isDarkMode = e.target.checked;
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

      /* ========================================== */
      /* === STYLE DLA TROLL-SCREEN (Dark Mode) === */
      /* ========================================== */
      .dark-mode-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #2d2d2d;
        color: var(--color-sand-light) !important; /* Wszystkie napisy w kolorze sand */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        z-index: 9999;
        padding: 20px;
      }

      .dark-mode-overlay h2 {
        font-size: 1.8rem;
        margin-bottom: 30px;
        max-width: 600px;
        line-height: 1.4;
        color: var(--color-sand-light) !important;
      }

      /* Przycisk: tło sand, czcionka dark-wood */
      .dark-mode-overlay sl-button::part(base) {
        background-color: var(--color-sand-light) !important;
        border-color: var(--color-sand-light) !important;
        color: var(--color-wood-dark) !important;
        font-weight: bold;
        border-radius: 25px;
        transition: transform 0.2s ease, background-color 0.2s ease;
      }
      .dark-mode-overlay sl-button::part(label) {
        color: var(--color-wood-dark) !important;
      }
      .dark-mode-overlay sl-button::part(base):hover {
        background-color: var(--color-cookie-medium) !important;
        border-color: var(--color-cookie-medium) !important;
      }

      /* ========================================= */
      /* === STYLE SUWAKA IDENTYCZNE Z KALENDARZEM === */
      /* ========================================= */
      sl-switch {
        --sl-toggle-size: 1.2rem;
        display: flex;
        align-items: center;
      }
      sl-switch::part(thumb) {
        background-color: var(--color-wood-medium) !important;
        border: 2px solid var(--color-wood-medium) !important;
        transition: background-color 0.3s ease, border-color 0.3s ease !important;
      }
      sl-switch[checked]::part(thumb) {
        background-color: var(--color-wood-dark) !important;
        border-color: var(--color-wood-dark) !important;
      }
      sl-switch::part(control) {
        background-color: var(--color-cookie-medium) !important;
        border-color: var(--color-cookie-medium) !important;
        box-shadow: none !important;
        outline: none !important;
        transition: background-color 0.3s ease, border-color 0.3s ease !important;
      }
      sl-switch[checked]::part(control) {
        background-color: var(--color-wood-medium) !important;
        border-color: var(--color-wood-medium) !important;
      }
      sl-switch::part(label) {
        color: var(--color-wood-dark);
        font-size: 1rem;
        font-weight: 500;
        margin-left: 8px;
        transition: font-weight 0.1s ease !important;
      }
      sl-switch[checked]::part(label) {
        font-weight: 550;
      }

      /* STYLE DLA KWADRACIKÓW WYBORU */
      sl-checkbox::part(control) {
        background-color: transparent !important;
        border: 2px solid var(--color-wood-dark) !important;
        border-radius: 6px;
        transition: background-color 0.2s ease, border-color 0.2s ease;
      }
      sl-checkbox:not([checked]):hover::part(control) {
        background-color: var(--color-wood-medium) !important;
        border-color: var(--color-wood-medium) !important;
      }
      sl-checkbox[checked]::part(control) {
        background-color: var(--color-wood-dark) !important;
        border-color: var(--color-wood-dark) !important;
      }
      sl-checkbox[checked]:hover::part(control) {
        background-color: var(--color-wood-medium) !important;
        border-color: var(--color-wood-medium) !important;
      }
      sl-checkbox::part(checked-icon) {
        color: var(--color-sand-light) !important;
      }
      sl-checkbox::part(label) {
        color: var(--color-wood-dark);
        user-select: none;
      }

      /* STYLE PRZYCISKÓW Z KALENDARZA */
      .view-controls { display: flex; justify-content: flex-start; margin-top: 15px; }
      sl-button-group sl-button[variant="default"]::part(base) { color: var(--color-wood-medium); border-color: var(--color-wood-medium); background-color: transparent; }
      sl-button-group sl-button[variant="default"]::part(base):hover { background-color: rgba(193, 135, 86, 0.1); }
      sl-button-group sl-button[variant="primary"]::part(base) { background-color: var(--color-wood-dark); border-color: var(--color-wood-dark); color: var(--color-sand-light); }

      .btn-login::part(base) {
        background-color: var(--color-wood-dark);
        border-color: var(--color-wood-dark);
        color: var(--color-sand-light);
        font-weight: 600;
        transition: all 0.3s ease;
        margin-left: 5px
      }

      .btn-login::part(base):hover {
        background-color: var(--color-wood-medium);
        border-color: var(--color-wood-medium);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .btn-login::part(base):active {
        transform: translateY(0);
      }

      `
  ];

  render() {
    if (this.isDarkMode) {
      return html`
        <div class="dark-mode-overlay">
          Odpowiedział im więc Jezus: «Jeszcze przez krótki czas przebywa wśród was światłość. </br>
          Chodźcie, dopóki macie światłość, aby was ciemność nie ogarnęła. </br>
          A kto chodzi w ciemności, nie wie, dokąd idzie. </br>
          Dopóki światłość macie, wierzcie w światłość, abyście byli synami światłości». </br>
          To powiedział Jezus i odszedł, i ukrył się przed nimi. </br>
          J 12, 35-36
          <h2>Ciemny motyw nie istnieje i nie będzie istniał, bo te kolorki w jasnym są za ładne! 😊</h2>
          <sl-button size="large" @click=${() => this.isDarkMode = false}>
            Wróć na jasną stronę mocy
          </sl-button>
        </div>
      `;
    }

    return html`

      <div class="section">
        <h3>Pierwszy dzień tygodnia w kalendarzu</h3>
        <div class="view-controls">
          <sl-button-group>
            <sl-button
              variant=${this.firstDayOfWeek === 'monday' ? 'primary' : 'default'}
              @click=${() => this.updateFirstDay('monday')}>
              Poniedziałek
            </sl-button>
            <sl-button
              variant=${this.firstDayOfWeek === 'sunday' ? 'primary' : 'default'}
              @click=${() => this.updateFirstDay('sunday')}>
              Niedziela
            </sl-button>
          </sl-button-group>
        </div>
      </div>

      <div class="section">
        <h3>Moje grupy (do filtrowania wydarzeń)</h3>
        ${this.groups.length === 0 ? html`<p>Ładowanie grup...</p>` : this.groups.map(g => html`
          <sl-checkbox
            ?checked=${this.myGroups.includes(Number(g.id))}
            @sl-change=${() => this.toggleGroup(g.id)}
            style="display: flex; width: fit-content; margin-bottom: 12px; font-size: 1.05rem;">
            ${g.name}
          </sl-checkbox>
        `)}
      </div>

      <div class="section">
        <h3>Wygląd aplikacji</h3>
        <sl-switch .checked=${this.isDarkMode} @sl-change=${this.handleDarkModeToggle}>Ciemny motyw</sl-switch>
      </div>

      <sl-button variant="primary" class="btn-login" href="/mParafia/admin">
        <sl-icon slot="prefix" name="box-arrow-in-right"></sl-icon>
        Panel Administratora
      </sl-button>
    `;
  }
}