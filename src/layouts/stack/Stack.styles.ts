import { css } from "lit";

export default css`
  sui-stack {
    background-color: blue;
  }
  sui-stack > * + * {
    margin-block-start: 1.5rem;
  }
`;
