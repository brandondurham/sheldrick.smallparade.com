import { createGlobalStyle } from 'styled-components';

import { breakpoints } from './breakpoints';

export default createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: Decimal;
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/Decimal-Book-Pro.woff2") format("woff2");
  }

  @font-face {
    font-display: swap;
    font-family: Decimal;
    font-style: italic;
    font-weight: 400;
    src: url("/fonts/Decimal-BookItalic-Pro.woff2") format("woff2");
  }

  @font-face {
    font-display: swap;
    font-family: Decimal;
    font-style: normal;
    font-weight: 600;
    src: url("/fonts/Decimal-Semibold-Pro.woff2") format("woff2");
  }

  @font-face {
    font-display: swap;
    font-family: Decimal;
    font-style: italic;
    font-weight: 600;
    src: url("/fonts/Decimal-SemiboldItalic-Pro.woff2") format("woff2");
  }

  @font-face {
    font-display: swap;
    font-family: Sentinel;
    font-style: normal;
    font-weight: 700;
    src: url("/fonts/Sentinel-Bold-Pro.woff2") format("woff2");
  }

  @font-face {
    font-display: swap;
    font-family: Sentinel;
    font-style: italic;
    font-weight: 700;
    src: url("/fonts/Sentinel-BoldItalic-Pro.woff2") format("woff2");
  }

  @font-face {
    font-display: swap;
    font-family: Sentinel;
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/Sentinel-Book-Pro.woff2") format("woff2");
  }

  @font-face {
    font-display: swap;
    font-family: Sentinel;
    font-style: italic;
    font-weight: 400;
    src: url("/fonts/Sentinel-BookItalic-Pro.woff2") format("woff2");
  }

  @font-face {
    font-display: swap;
    font-family: Sentinel;
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/Sentinel-Medium-Pro.woff2") format("woff2");
  }

  @font-face {
    font-display: swap;
    font-family: Sentinel;
    font-style: italic;
    font-weight: 500;
    src: url("/fonts/Sentinel-MediumItalic-Pro.woff2") format("woff2");
  }

  @font-face {
    font-display: swap;
    font-family: Sentinel;
    font-style: normal;
    font-weight: 600;
    src: url("/fonts/Sentinel-Semibold-Pro.woff2") format("woff2");
  }

  @font-face {
    font-display: swap;
    font-family: Sentinel;
    font-style: italic;
    font-weight: 600;
    src: url("/fonts/Sentinel-SemiboldItalic-Pro.woff2") format("woff2");
  }

  html {
    /* Fonts */
    --font-family-sans: Decimal, sans-serif;
    --font-family-serif: Sentinel, serif;

    --nav-height: 5rem;
    --transition-easing: cubic-bezier(0.16, 1, 0.3, 1);
    --article-width: 100%;

    /* Colors */
    --color-body-background: rgb(255 217 49);
    --color-default: rgb(23 23 22);
    --color-highlight: rgb(224 60 23);
    --color-lowlight: rgb(35 31 32/0.5);

    color: var(--color-default);
    font-family: var(--font-family-serif);
    font-feature-settings: "tnum";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    -webkit-overflow-scrolling: touch;
  }
  
  body {
    background-color: var(--color-body-background);
    margin: 0;
    padding: 0;
  }

  * { box-sizing: border-box; }

  p {
    margin: 0.75em 0 0;
    &:first-of-type { margin: 0; }
  }

  a {
    color: var(--color-lowlight);
    color: inherit;
    text-decoration-color: rgb(0 0 0/0.25);
    text-underline-offset: 0.3em;
    text-decoration-thickness: 2px;
    transition:
      color 0.8s var(--transition-easing),
      text-decoration-color 0.8s var(--transition-easing);

    &:hover {
      color: var(--color-default);
      text-decoration-color: inherit;
    }
  }

  ol, ul {
    margin: 0;
    padding: 0;

    p + & { margin: 0.75em 0; }
  }

  [aria-describedby="footnote-label"] {
    color: inherit;
    counter-increment: footnotes;
    cursor: default;
    outline: none;
    text-decoration: none;
    white-space: nowrap;
  }

  [aria-describedby="footnote-label"]::after {
    color: var(--color-lowlight);
    content: '['counter(footnotes)']';
    cursor: pointer;
    display: inline-block;
    font-size: 0.5em;
    margin-left: 5px;
    text-decoration: underline;
    vertical-align: super;
  }

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  small {
    font-feature-settings: "smcp";
    font-size: inherit;
    font-variant: small-caps;
    text-transform: lowercase;
  }

  abbr {
    cursor: help;
    text-underline-offset: 0.3em;
  }

  blockquote {
    background-color: var(--color-default);
    box-shadow: inset 0 0 0 var(--moat) black;
    color: white;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    line-height: 1.3;
    margin: 1em 0;
    padding: 2rem;
    position: relative;
    transform: rotate(-1deg);

    p {
      margin: 0;
      text-indent: -0.4em;
      & + p { text-indent: 3ch; }
    }

    p:last-child {
      margin-top: 1em;
      text-align: right;
    }

    @media (${breakpoints.small}) {
      font-size: 1rem;
      line-height: 1.4;
      padding: 4rem;
    }

    @media (${breakpoints.large}) {
      font-size: 1.3rem;
      p + p { text-indent: 6ch; }
    }
  }

  .signature {
    display: flex;
    flex-direction: column;
    font-size: inherit;
    margin: 2em 0;
    
    img {
      display: block;
      margin-bottom: 12px;
      width: 250px;
    }

    @media (${breakpoints.small}) {
      img { width: 300px; }
    }
  }
`;
