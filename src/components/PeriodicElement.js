class PeriodicElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .element {
        border: 1px solid #111;
        border-radius: 4px;
        padding: 4px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        background-color: var(--element-color, #99ddcc);
        box-shadow: 0 0 5px 5px rgba(0 0 0 / 25%) inset;
        width: var(--element-size);
        height: var(--element-size);
        overflow: hidden;
        text-decoration: none;
        color: #000;
        position: relative;
      }

      .element span {
        font-family: var(--code-font);
        font-weight: 500;
        font-size: 0.8rem;
        color: #333;
      }

      .element .num {
        background: rgb(0 0 0 / 25%);
        padding: 0 1.3rem 1rem;
        clip-path: polygon(0 0, 50% 60%, 100% 0);
        position: absolute;
        top: 0;
      }

      .element .num span {
        position: relative;
        top: -2px;
      }

      .element p {
        margin: 0;
        margin-top: 0.5rem;
        font-size: 1.75rem;
        font-weight: 800;
      }

      .element .name {
        display: inline-block;
        transform: translateY(-4px);
      }

      .element:hover {
        transform: scale(1.75);
        /* width: calc(var(--element-size) * 3); */
        transition: transform 0.2s, width 0.2s;
        z-index: 5;
        box-shadow: 0 0 6px 4px #0008 inset;
        /* position: relative; */
      }
    `;
  }

  connectedCallback() {
    this.num = this.getAttribute("num") ?? "0";
    this.abbr = this.getAttribute("abbr") ?? "???";
    this.name = this.getAttribute("name") ?? "unknown";
    this.href = this.getAttribute("href") ?? "https://manz.dev/";
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PeriodicElement.styles}</style>
    <a class="element" href="https://lenguajehtml.com/${this.href}">
      <span class="num"><span>${this.num}</span></span>
      <p>${this.abbr}</p>
      <span class="name">${this.name}</span>
    </a>`;
  }
}

customElements.define("periodic-element", PeriodicElement);
