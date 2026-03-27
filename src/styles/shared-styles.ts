import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const styles = css`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  :host {
    --color-wood-dark: #7F451D;
    --color-wood-medium: #C18756;
    --color-sand-light: #FFE9D4;
    
    --sl-color-primary-600: var(--color-wood-dark);
    --sl-color-primary-500: var(--color-wood-medium);

    display: block;
    background-color: var(--color-sand-light);
    min-height: 100vh;
}

  main {
    padding: 20px;
    padding-top: 54px;
    background-color: var(--color-sand-light);
    min-height: 100vh;
    color: var(--color-wood-dark);
    font-family: var(--sl-font-sans, sans-serif);
  }
`;