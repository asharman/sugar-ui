import { html } from "lit";
import { ifDefined } from "lit-html/directives/if-defined";
import "../Button";

export default {
  title: "Example/Button",
};

const Template = ({ variant, size, appearance, text }) =>
  html`<sui-button
    appearance=${ifDefined(appearance)}
    size=${ifDefined(size)}
    variant=${ifDefined(variant)}
    >${text}</sui-button
  >`;

export const Default = Template.bind({});
Default.args = {
  text: "Buy Now",
};

export const VariantPrimary = Template.bind({});
VariantPrimary.args = {
  ...Default.args,
  variant: "primary",
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

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  ...Default.args,
  size: "small",
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  ...Default.args,
  size: "medium",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  ...Default.args,
  size: "large",
};

export const AppearanceOutline = Template.bind({});
AppearanceOutline.args = {
  ...Default.args,
  appearance: "outline",
};
