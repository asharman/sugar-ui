import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("sui-button")
export class Button extends LitElement {
  render() {
    return html` <button>Hello World!</button> `;
  }
}
