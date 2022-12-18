import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./Stack.styles";

@customElement("sui-stack")
export class Stack extends LitElement {
  static styles = styles;

  protected createRenderRoot() {
    return this;
  }
}
