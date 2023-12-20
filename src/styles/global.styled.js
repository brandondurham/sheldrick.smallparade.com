import { createGlobalStyle } from 'styled-components';

import { breakpoints } from './breakpoints';

export default createGlobalStyle`
  html {
    --nav-height: 7.5rem;
    --message-line-height: 1.8em;
    --transition-easing: cubic-bezier(0.16, 1, 0.3, 1);
    --article-width: 100%;

    /* Colors */
    --color-body-background: rgb(215 210 202);
    --color-default: rgb(23 23 22);
    --color-highlight: rgb(211 141 44);
    --color-lowlight: rgb(151 142 129);

    color: var(--color-default);
    font-family: Decimal, "Ringside Regular SSm", Decimal, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    scroll-padding-top: calc(var(--nav-height) - 10px);
  }
  
  body {
    background-color: var(--color-body-background);
    margin: 0;
    padding: 0;
  }

  * { box-sizing: border-box; }

  p {
    margin: 1em 0;
    &:first-of-type { margin-top: 0;}
  }

  a {
    color: var(--color-lowlight);
    text-decoration-color: rgb(151 142 129/0.75);
    text-underline-offset: 0.3em;
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
    font-size: 0.85rem;
    margin: 3rem 0;
    padding: 2rem;
    position: relative;

    &::before,
    &::after {
      content: "";
      position: absolute;
    }

    &::before {
      background-image: linear-gradient(to bottom right, #d38d2c, #5d74ca);
      inset: 0;
      z-index: -2;
    }

    &::after {
      background-color: var(--color-body-background);
      inset: 0.5rem;
      z-index: -1;
    }

    p {
      margin: 0;
      text-indent: -0.6em;
      & + p { text-indent: 3ch; }
    }

    p:last-child {
      margin-top: 1em;
      text-align: right;
    }

    @media (${breakpoints.small}) {
      font-size: 1rem;
      padding: 4rem;

      &::after { inset: 1rem; }
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
    margin-top: 6em;
    
    img {
      display: block;
      margin-bottom: 12px;
      width: 250px;
    }

    @media (${breakpoints.small}) {
      img { width: 300px; }
    }
  }

  svg {
    fill: transparent;
    stroke: var(--color-lowlight);
    stroke-width: 2px;
  }
`;
