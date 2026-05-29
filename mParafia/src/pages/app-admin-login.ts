import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';
import { apiFetch } from '../utils/api';

import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';

@customElement('app-admin-login')
export class AppAdminLogin extends LitElement {
  @state() private loginValue = '';
  @state() private passwordValue = '';
  @state() private newPasswordValue = '';
  @state() private confirmPasswordValue = '';

  @state() private loading = false;
  @state() private errorMessage = '';
  // @state() private successMessage = '';
  @state() private isChangingPassword = false;

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
      :host { display: flex; justify-content: center; align-items: center; padding: 20px; min-height: 60vh; }
      .admin-container { background-color: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(127, 69, 29, 0.1); padding: 30px; width: 100%; max-width: 420px; display: flex; flex-direction: column; gap: 20px; }
      h2 { color: var(--color-wood-dark); margin: 0; text-align: center; font-size: 1.6rem; display: flex; align-items: center; justify-content: center; gap: 10px; }
      .login-form { display: flex; flex-direction: column; gap: 15px; }

      /* Styl przycisków */
      sl-button::part(base) { background-color: var(--color-wood-dark); border-color: var(--color-wood-dark); color: var(--color-sand-light); font-weight: bold; transition: filter 0.2s; }
      sl-button::part(base):hover { filter: brightness(1.2); }

      .toggle-link {
        color: var(--color-wood-dark);
        text-align: center;
        font-size: 0.9rem;
        cursor: pointer;
        text-decoration: underline;
        margin-top: 5px;
        font-weight: 500;
      }
      .toggle-link:hover { color: #b91c1c; } /* Lekko czerwony przy najechaniu dla wyróżnienia */

      /* Styl pól input - pancerne wymuszenie piaskowych kolorów */
      sl-input {
        --sl-input-background-color: var(--color-sand-light);
        --sl-input-color: var(--color-wood-dark);
        --sl-input-label-color: var(--color-wood-dark);
        --sl-input-border-color: var(--color-wood-medium);
        --sl-input-spacing-small: 0;
      }

      sl-input::part(base) {
        background-color: var(--color-sand-light) !important;
        border-color: var(--color-wood-medium) !important;
        padding: 0 !important;
      }

      sl-input::part(input) {
        background-color: var(--color-sand-light) !important;
        color: var(--color-wood-dark) !important;
        padding-left: 10px !important;
        margin: 0 !important;
        border: none !important;
      }

      /* Blokada autouzupełniania */
      sl-input::part(input):-webkit-autofill,
      sl-input::part(input):-webkit-autofill:hover,
      sl-input::part(input):-webkit-autofill:focus {
        background-color: var(--color-sand-light) !important;
        -webkit-box-shadow: 0 0 0 1000px var(--color-sand-light) inset !important;
        -webkit-text-fill-color: var(--color-wood-dark) !important;
        transition: background-color 5000s ease-in-out 0s;
      }
    `
  ];

  private toggleMode() {
    this.isChangingPassword = !this.isChangingPassword;
    this.errorMessage = '';
    // this.successMessage = '';
    this.passwordValue = '';
    this.newPasswordValue = '';
    this.confirmPasswordValue = '';
  }

  private async handleSubmit(e: Event) {
    e.preventDefault();
    this.errorMessage = '';
    // this.successMessage = '';
    this.loading = true;

    try {
      if (this.isChangingPassword) {
        if (this.newPasswordValue !== this.confirmPasswordValue) {
          this.errorMessage = 'Nowe hasła nie są identyczne!';
          this.loading = false;
          return;
        }

        const response = await apiFetch('/admin/change-password', {
          method: 'POST',
          body: JSON.stringify({
            login: this.loginValue,
            currentPassword: this.passwordValue,
            newPassword: this.newPasswordValue
          })
        });

        const data = await response.json();

        if (response.ok) {
          this.handleSuccessLogin(data);
        } else {
          this.errorMessage = data.error || 'Błąd zmiany hasła.';
        }

      } else {
        // STANDARDOWE LOGOWANIE
        const response = await apiFetch('/admin/login', {
          method: 'POST',
          body: JSON.stringify({ login: this.loginValue, password: this.passwordValue })
        });

        const data = await response.json();

        if (response.ok) {
          this.handleSuccessLogin(data);
        } else {
          this.errorMessage = data.error || 'Błędny login lub hasło.';
        }
      }
    } catch (error) {
      this.errorMessage = 'Brak połączenia z serwerem.';
    } finally {
      this.loading = false;
    }
  }

  private handleSuccessLogin(data: any) {
    localStorage.setItem('isAdmin', 'true');
    if (data.isSuperAdmin) {
      localStorage.setItem('isSuperAdmin', 'true');
    } else {
      localStorage.removeItem('isSuperAdmin');
    }

    if (data.allowedGroupIds) {
      localStorage.setItem('allowedGroups', JSON.stringify(data.allowedGroupIds));
    }

    const base = (import.meta as any).env.BASE_URL || '/';
    const targetPath = '/admin';
    const fullPath = base === '/' ? targetPath : base + targetPath.substring(1);

    window.location.href = fullPath;
  }

  render() {
    return html`
      <div class="admin-container">
        <h2>
          <sl-icon name="${this.isChangingPassword ? 'key-fill' : 'shield-lock-fill'}"></sl-icon>
          ${this.isChangingPassword ? 'Zmiana Hasła' : 'Dostęp Zastrzeżony'}
        </h2>

        ${this.errorMessage ? html`<sl-alert variant="danger" open><sl-icon slot="icon" name="exclamation-octagon"></sl-icon><strong>Błąd</strong><br />${this.errorMessage}</sl-alert>` : ''}

        <form class="login-form" @submit="${this.handleSubmit}">

          <sl-input
            label="Login"
            placeholder="np. szefowa"
            autocomplete="off"
            required
            .value="${this.loginValue}"
            @sl-input="${(e: any) => this.loginValue = e.target.value}">
            <sl-icon slot="prefix" name="person-fill"></sl-icon>
          </sl-input>

          <sl-input
            label="${this.isChangingPassword ? 'Aktualne hasło' : 'Hasło'}"
            type="password"
            password-toggle
            autocomplete="off"
            required
            .value="${this.passwordValue}"
            @sl-input="${(e: any) => this.passwordValue = e.target.value}">
            <sl-icon slot="prefix" name="key-fill"></sl-icon>
          </sl-input>

          ${this.isChangingPassword ? html`
            <sl-input
              label="Nowe hasło"
              type="password"
              password-toggle
              autocomplete="new-password"
              required
              .value="${this.newPasswordValue}"
              @sl-input="${(e: any) => this.newPasswordValue = e.target.value}">
              <sl-icon slot="prefix" name="shield-lock"></sl-icon>
            </sl-input>

            <sl-input
              label="Powtórz nowe hasło"
              type="password"
              password-toggle
              autocomplete="new-password"
              required
              .value="${this.confirmPasswordValue}"
              @sl-input="${(e: any) => this.confirmPasswordValue = e.target.value}">
              <sl-icon slot="prefix" name="check2-circle"></sl-icon>
            </sl-input>
          ` : ''}

          <sl-button type="submit" variant="primary" size="large" ?loading="${this.loading}" style="margin-top: 10px;">
            ${this.isChangingPassword ? 'Zmień hasło i zaloguj się' : 'Zaloguj się'}
          </sl-button>
        </form>

        <div class="toggle-link" @click="${this.toggleMode}">
          ${this.isChangingPassword ? 'Anuluj zmianę hasła i wróć do logowania' : 'Zmień swoje hasło'}
        </div>

      </div>
    `;
  }
}