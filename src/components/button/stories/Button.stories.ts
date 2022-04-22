import { html } from "lit";
import { ifDefined } from "lit-html/directives/if-defined";
import "../Button";

export default {
  title: "Example/Button",
};

const Template = ({ variant, text }) =>
  html`<sui-button variant=${ifDefined(variant)}>${text}</sui-button>`;

export const Default = Template.bind({});
Default.args = {
  text: "Buy Now",
};

export const VariantNegative = Template.bind({});
VariantNegative.args = {
  ...Default.args,
  variant: "negative",
  text: "Cancel",
};

export const VariantWarning = Template.bind({});
VariantWarning.args = {
  ...Default.args,
  variant: "warning",
  text: "Cancel",
};
