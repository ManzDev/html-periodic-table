import "./PeriodicElement.js";
import HTMLData from "./HTMLData.js";

class PeriodicTable extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --element-size: 65px;
        --real-size: calc(var(--element-size) + 10px);

        display: grid;
        place-items: center;
      }

      .elements {
        display: grid;
        grid-template-columns: repeat(17, var(--real-size));
        grid-template-rows: repeat(7, var(--real-size));
        grid-auto-flow: column;
        margin-bottom: 20px;
        gap: 1px;

        :nth-child(4n + 14):not(:nth-child(4n + 42)) {
          grid-row-start: 4;
        }

        :nth-child(6n + 42):not(:nth-child(6n + 84)),
        :nth-child(8) {
          grid-row-start: 2;
        }
      }

      .lantanids {
        display: flex;
        gap: var(--real-size);
      }

      .semantics {
        display: grid;
        grid-template-columns: repeat(12, var(--real-size));
        grid-template-rows: repeat(2, var(--real-size));
        gap: 1px;
      }

      .deprecated {
        display: grid;
        grid-template-columns: repeat(4, var(--real-size));
        grid-template-rows: repeat(2, var(--real-size));
        gap: 1px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  renderElements() {
    const offset = 1;
    const html = HTMLData.elements.map(({ abbr, name, href }, index) => /* html */`<periodic-element num="${index + offset}" abbr="${abbr}" name="${name}" href="${href}"></periodic-element>`);
    return html.join("");
  }

  renderSemantics() {
    const offset = HTMLData.elements.length + 1;
    const html = HTMLData.semantics.map(({ abbr, name, href }, index) => /* html */`<periodic-element num="${index + offset}" abbr="${abbr}" name="${name}" href="${href}"></periodic-element>`);
    return html.join("");
  }

  renderDeprecated() {
    const offset = HTMLData.elements.length + HTMLData.semantics.length + 1;
    const html = HTMLData.deprecated.map(({ abbr, name, href }, index) => /* html */`<periodic-element num="${index + offset}" abbr="${abbr}" name="${name}" href="${href}"></periodic-element>`);
    return html.join("");
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PeriodicTable.styles}</style>
    <div class="container">
      <div class="elements">
        ${this.renderElements()}
      </div>
      <div class="lantanids">
        <div class="semantics">
          ${this.renderSemantics()}
        </div>
        <div class="deprecated">
          ${this.renderDeprecated()}
        </div>
      </div>
    </div>`;
  }
}

customElements.define("periodic-table", PeriodicTable);
