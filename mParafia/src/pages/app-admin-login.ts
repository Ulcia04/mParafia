import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';

import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';

@customElement('app-admin-login')
export class AppAdminLogin extends LitElement {
  @state() private loginValue = '';
  @state() private passwordValue = '';
  @state() private loading = false;
  @state() private errorMessage = '';

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('change-title', {
      detail: { title: 'Logowanie Administratora' },
      bubbles: true, composed: true
    }));
  }

  static styles = [
    sharedStyles,
    css`
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        min-height: 60vh;
      }

      .admin-container {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(127, 69, 29, 0.1);
        padding: 30px;
        width: 100%;
        max-width: 420px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      h2 {
        color: var(--color-wood-dark);
        margin: 0;
        text-align: center;
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }

      .login-form {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      sl-button::part(base) {
        background-color: var(--color-wood-dark);
        border-color: var(--color-wood-dark);
        color: white;
        transition: filter 0.2s;
      }

      sl-button::part(base):hover {
        filter: brightness(1.2);
      }
    `
  ];

  private async handleLogin(e: Event) {
    e.preventDefault(); // Zapobiega przeładowaniu strony po wciśnięciu Enter
    this.errorMessage = '';
    this.loading = true;

    try {
      const response = await fetch('http://localhost:3000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login: this.loginValue, password: this.passwordValue }),
        credentials: 'include' // KLUCZOWE: pozwala na odebranie i zapis ciasteczka!
      });

      const data = await response.json();

      if (response.ok) {
        // Zapisujemy flagi dla routera i dla interfejsu
        localStorage.setItem('isAdmin', 'true');

        if (data.isSuperAdmin) {
          localStorage.setItem('isSuperAdmin', 'true');
        }

        if (data.allowedGroupIds) {
          localStorage.setItem('allowedGroups', JSON.stringify(data.allowedGroupIds));
        }

        // --- POPRAWKA PRZEKIEROWANIA ---
        // Pobieramy bazowy URL z Vite (np. '/mParafia/')
        const base = (import.meta as any).env.BASE_URL;

        // Sklejamy go bezpiecznie z docelową ścieżką
        const targetPath = '/admin';
        const fullPath = base === '/' ? targetPath : base + targetPath.substring(1);

        window.location.href = fullPath;
      } else {
        this.errorMessage = data.error || 'Błędny login lub hasło.';
      }
    } catch (error) {
      console.error('Błąd połączenia z serwerem:', error);
      this.errorMessage = 'Brak połączenia z serwerem. Sprawdź, czy backend działa.';
    } finally {
      this.loading = false;
    }
  }

  render() {
    return html`
      <div class="admin-container">
        <h2>
          <sl-icon name="shield-lock-fill"></sl-icon>
          Dostęp Zastrzeżony
        </h2>

        ${this.errorMessage ? html`
          <sl-alert variant="danger" open>
            <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
            <strong>Błąd logowania</strong><br />
            ${this.errorMessage}
          </sl-alert>
        ` : ''}

        <form class="login-form" @submit="${this.handleLogin}">
          <sl-input
            label="Login"
            placeholder="np. szefowa"
            required
            .value="${this.loginValue}"
            @sl-input="${(e: any) => this.loginValue = e.target.value}">
            <sl-icon slot="prefix" name="person-fill"></sl-icon>
          </sl-input>

          <sl-input
            label="Hasło"
            type="password"
            placeholder="Wpisz swoje hasło"
            password-toggle
            required
            .value="${this.passwordValue}"
            @sl-input="${(e: any) => this.passwordValue = e.target.value}">
            <sl-icon slot="prefix" name="key-fill"></sl-icon>
          </sl-input>

          <sl-button
            type="submit"
            variant="primary"
            size="large"
            ?loading="${this.loading}"
            style="margin-top: 10px;">
            Zaloguj się
          </sl-button>
        </form>
      </div>
    `;
  }
}