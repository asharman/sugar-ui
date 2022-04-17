import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./Button.styles";

@customElement("sui-button")
export class Button extends LitElement {
  static styles = styles;

  render() {
    return html`
      <button>
        <slot></slot>
      </button>
    `;
  }
}
