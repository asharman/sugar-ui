import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("sui-button")
export class Button extends LitElement {
  static styles = css`
    :host {
      /* Colors */
      --sui-button-background: var(
        --sui-primary-color,
        var(--sui-color-blue-700, #4263eb)
      );
      --sui-button-text-color: var(
        --sui-text-on-primary,
        var(--sui-color-white, #ffffff)
      );

      /* Border Styles */
      --sui-button-border-color: var(
        --sui-primary-border-color,
        var(--sui-color-opaque, rgba(0, 0, 0, 0))
      );
      --sui-button-border-style: var(--sui-primary-border-style, solid);
      --sui-button-border-width: var(
        --sui-primary-border-width,
        var(--sui-size-0, 0)
      );
      --sui-button-border-radius: var(
        --sui-cta-border-radius,
        var(--sui-size-0, 0)
      );

      /* Sizing */
      --sui-button-font-size: var(
        --sui-cta-font-size,
        var(--sui-size-scale-rem0, 1rem)
      );
      --sui-button-padding: var(
        --sui-cta-padding,
        var(--sui-size-scale-em-2, 0.79em)
      );
    }

    button {
      background: var(--sui-button-background);
      color: var(--sui-button-text-color);
      border-width: var(--sui-button-border-width);
      border-style: var(--sui-button-border-style);
      border-color: var(--sui-button-border-color);
      border-radius: var(--sui-button-border-radius);
      font-size: var(--sui-button-font-size);
      padding: var(--sui-button-padding);
      line-height: 1;
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <button>
        <slot></slot>
      </button>
    `;
  }
}
