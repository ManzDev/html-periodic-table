const HEADERS = [
  { name: "Documento", selected: false },
  { name: "Metadatos", selected: false },
  { name: "Agrupación", selected: false },
  { name: "Textual", selected: false },
  { name: "Multimedia", selected: false },
  { name: "Tablas", selected: false },
  { name: "Formulario", selected: false },
  { name: "Scripting", selected: false },
  { name: "Interactivas", selected: false },
  { name: "Semánticas", selected: false },
  { name: "Ideogramáticas", selected: false },
  { name: "Edición", selected: false },
  { name: "Obsoletas", selected: false },
];

class HeaderList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .container {
        --total-elements: ${HEADERS.length};

        display: grid;
        grid-template-columns: repeat(var(--total-elements), 1fr);
        color: white;
        margin: 0 0 1.5rem 0;
        font-weight: 600;
        font-size: 1rem;
        padding: 0;
        list-style-type: none;
      }

      li {
        padding: 0.1rem 0.6rem;
        text-align: center;
        user-select: none;
        border: 1px solid transparent;
      }

      li:hover {
        cursor: pointer;
        border-color: #fff;
        color: #fff;
      }

      li.active {
        background: #111;
        cursor: pointer;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  renderElements() {
    return HEADERS.map((item, index) => {
      const itemSelected = item.selected ? "class=\"active\"" : "";
      return /* html */`<li data-key="${index}" ${itemSelected}>${item.name}</li>`;
    }).join("");
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${HeaderList.styles}</style>
    <ul class="container">
      ${this.renderElements()}
    </ul>`;
  }
}

customElements.define("header-list", HeaderList);
