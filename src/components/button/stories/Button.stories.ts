import { html } from "lit";
import "../Button";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
};

export const Default = () => html`<sui-button></sui-button>`;
