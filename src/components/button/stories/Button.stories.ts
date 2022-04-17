import { html } from "lit";
import "../Button";

export default {
  title: "Example/Button",
};

export const Default = () => html`<sui-button>Buy Now</sui-button>`;

export const VariantNegative = () => html`<sui-button variant="negative">Cancel</sui-button>`
