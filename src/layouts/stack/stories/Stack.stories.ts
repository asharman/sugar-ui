import { html } from "lit";
import "../Stack";

export default {
  title: "Example/Stack",
};

const Template = () => html`<sui-stack> ${Boxes()} </sui-stack>`;

const Boxes = () =>
  Array.from(
    { length: 5 },
    () =>
      html`<div
        style="width: 2rem; height: 2rem; background: rebeccapurple; border: solid 1px black;"
      ></div>`
  );

export const Default = Template.bind({});
Default.args = {};
