import { css } from "lit";

export default css`
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

    /* Sizing */
    --sui-button-font-size: var(
      --sui-cta-font-size,
      var(--sui-size-scale-rem0, 1rem)
    );
    --sui-button-padding: var(
      --sui-cta-padding,
      var(--sui-size-scale-em-2, 0.79em)
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
  }

  :host([variant="primary"]) {
    --sui-button-background: var(
      --sui-primary-color,
      var(--sui-color-blue-700, #4263eb)
    );
    --sui-button-text-color: var(
      --sui-text-on-primary,
      var(--sui-color-white, #ffffff)
    );
  }

  :host([variant="negative"]) {
    --sui-button-background: var(
      --sui-negative-color,
      var(--sui-color-red-700, #f03e3e)
    );
    --sui-button-text-color: var(
      --sui-text-on-negative,
      var(--sui-color-white, #ffffff)
    );
  }

  :host([variant="warning"]) {
    --sui-button-background: var(
      --sui-warning-color,
      var(--sui-color-orange-700, #f76707)
    );
    --sui-button-text-color: var(
      --sui-text-on-warning,
      var(--sui-color-white, #ffffff)
    );
  }

  :host([size="small"]) {
    --sui-button-font-size: var(
      --sui-cta-text-small,
      var(--sui-size-scale-rem-2, 0.79rem)
    );
  }

  :host([size="medium"]) {
    --sui-button-font-size: var(
      --sui-cta-text-medium,
      var(--sui-size-scale-rem0, 1rem)
    );
  }

  :host([size="large"]) {
    --sui-button-font-size: var(
      --sui-cta-text-large,
      var(--sui-size-scale-rem2, 0.79rem)
    );
  }

  :host([appearance="outline"]) {
    --sui-button-text-color: var(--sui-button-background);
    --sui-button-border-color: var(--sui-button-background);
    --sui-button-border-width: var(
      --sui-outline-border-width,
      --sui-size-scale-rem-10,
      0.308rem
    );
    --sui-button-important-background: var(
      --sui-color-opaque,
      rgba(0, 0, 0, 0)
    );
  }

  button {
    background: var(
      --sui-button-important-background,
      var(--sui-button-background)
    );
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
