import { css } from 'lit';

export const styles = css`
  :host, * {
    -webkit-tap-highlight-color: transparent !important;
  }
  :host {
    --color-wood-dark: #7F451D;
    --color-wood-medium: #C18756;
    --color-cookie-medium: #E8C09A;
    --color-sand-light: #FFE9D4;

    --sl-color-primary-500: var(--color-wood-medium);
    --sl-color-primary-600: var(--color-wood-dark);
    --sl-color-primary-700: var(--color-wood-dark);
    --sl-focus-ring-color: rgba(127, 69, 29, 0.3);

    font-family: var(--sl-font-sans, sans-serif);
  }

  sl-button:not([variant="primary"])::part(base),
  sl-icon-button::part(base),
  sl-drawer::part(close-button) {
    color: var(--color-wood-dark) !important;
  }

  sl-icon-button::part(base):active,
  sl-drawer::part(close-button):active {
    filter: brightness(1.5);
  }

  @media (hover: hover) {
    sl-icon-button::part(base):hover,
    sl-drawer::part(close-button):hover {
      filter: brightness(1.5);
    }
  }

  sl-button[variant="primary"]::part(base) {
    background-color: var(--color-wood-dark) !important;
    border-color: var(--color-wood-dark) !important;
    color: var(--color-sand-light) !important;
  }

  sl-menu-item::part(label) {
    color: var(--color-wood-dark);
  }
`;