import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles as sharedStyles } from '../styles/shared-styles';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

@customElement('app-nabozenstwa')
export class AppNabozenstwa extends LitElement {

  connectedCallback() {
    super.connectedCallback();
    const event = new CustomEvent('change-title', {
      detail: { title: 'Nabożeństwa i Msze Święte' },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        padding: 10px;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .paper {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        padding: 20px;
      }

      .title-container {
        display: flex;
        align-items: center;
        gap: 12px;
        color: var(--color-wood-dark);
        margin-bottom: 10px;
      }

      .title-container h2 {
        margin: 0;
        font-size: 1.3rem;
      }

      .title-container sl-icon {
        font-size: 1.5rem;
      }

      .content-block {
        color: var(--color-wood-dark);
        line-height: 1.6;
        font-size: 1.05rem;
      }

      .content-block p {
        margin: 10px 0;
      }

      .content-block strong {
        color: var(--color-wood-dark); /* Utrzymujemy brązowy kolor dla pogrubień */
        font-size: 1.1rem;
      }

      ul.custom-list {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      ul.custom-list li {
        margin-bottom: 15px;
        padding-left: 20px;
        position: relative;
      }

      ul.custom-list li::before {
        content: "•";
        color: var(--color-wood-medium);
        font-weight: bold;
        font-size: 1.5rem;
        position: absolute;
        left: 0;
        top: -4px;
      }

      ul.msze-list {
        list-style-type: none;
        padding: 0;
        margin-top: -10px;
      }

      ul.msze-list li {
        margin-bottom: 2px;
        padding-left: 10px;
        position: relative;
      }

      ul.custom-list li:last-child {
        margin-bottom: 0;
      }
    `
  ];

  render() {
    return html`
      <div class="wrapper">

        <div class="paper">
          <div class="title-container">
            <sl-icon name="bell-fill"></sl-icon>
            <h2>Msze św. w niedziele i święta</h2>
          </div>
          <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>

          <div class="content-block">
            <p><strong>Godziny:</strong><br>
            <ul class="msze-list">
                <li>7.00,
                <li>8.30,
                <li>10.00 (z kazaniem dla dzieci w roku szkolnym),
                <li>11.15,
                <li>12.30,
                <li>14.00 (poza okresem wakacyjnym),
                <li>18.00,
                <li>20.00
                <li>(oraz w soboty o 18.00).
            </ul>
            </p>

            <p><strong>Święta nakazane:</strong>
                Msze św. jak w każdą niedzielę<br>
                <ul class="msze-list">
                    <li>Nowy Rok (1 stycznia),
                    <li>Trzech Króli (6 stycznia),
                    <li>Matki Bożej Królowej Polski (3 maja),
                    <li>Boże Ciało,
                    <li>Wniebowzięcie NMP (15 sierpnia),
                    <li>Wszystkich Świętych (1 listopada)
                </ul>
            </p>

            <p><strong>Inne święta:</strong>
                Msze św.: 7.00, 8.30, 16.30, 18.00 oraz 20.00 <br>
                <ul class="msze-list">
                    <li>Matki Bożej Gromnicznej (2 lutego),
                    <li>Środa Popielcowa,
                    <li>Dzień Zaduszny
                </ul>
            </p>
          </div>
        </div>

        <div class="paper">
          <div class="title-container">
            <sl-icon name="bell-fill"></sl-icon>
            <h2>Msze św. w dni powszednie</h2>
          </div>
          <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>

          <div class="content-block" style="text-align: left;">
            <p>7.00 i 18.00</p>
          </div>
        </div>

        <div class="paper">
          <div class="title-container">
            <sl-icon name="people-fill"></sl-icon>
            <h2>Nabożeństwa</h2>
          </div>
          <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>

          <div class="content-block">
            <ul class="custom-list">
              <li><strong>Środa:</strong> <br> 17.30 różaniec oraz Nowenna do Matki Bożej Nieustającej Pomocy (po Mszy św. o 18.00).</li>
              <li><strong>I piątek miesiąca:</strong> <br>17.00 – 18.00 adoracja oraz spowiedź, <br>po Mszy Uwielbienie (Krąg Rodzin), <br>od 20.00 do 21.00 Adoracja prowadzona przez młodzież.</li>
              <li><strong>III piątek miesiąca:</strong> <br>Msza św. za zmarłych wypominanych<br>Koronka do Bożego Miłosierdzia po Mszy św. o 18.00.</li>
              <li><strong>I sobota:</strong> <br>Msza św. wynagradzająca Niepokalanemu Sercu Maryi za grzechy świata o 8.00 <br> różaniec po Mszy.</li>
              <li><strong>II niedziela miesiąca:</strong> <br>10.00 Msza św. w intencji dzieci przeżywających rocznice urodzin.</li>
            </ul>
          </div>
        </div>

        <div class="paper">
          <div class="title-container">
            <sl-icon name="person-fill-add"></sl-icon>
            <h2>Chrzty</h2>
          </div>
          <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>

          <div class="content-block" style="text-align: left;">
            <p>I niedziela miesiąca na Mszy o 14.00 <br>
III niedziela miesiąca na Mszy o 12.30</p>
          </div>
        </div>

      </div>
    `;
  }
}