import { html } from "lit";
import { ifDefined } from "lit-html/directives/if-defined";
import "../Button";

export default {
  title: "Example/Button",
};

const Template = ({ variant, text }) =>
  html`<sui-button variant=${ifDefined(variant)}>${text}</sui-button>`;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  text: "Buy Now",
};

export const VariantNegative = Template.bind({});
VariantNegative.args = {
  variant: "negative",
  text: "Cancel",
};
