import styled from 'styled-components';
import { Element, Link } from 'react-scroll';

import { breakpoints } from './breakpoints';

export const Overlay = styled.div`
  background-color: var(--color-body-background);
  inset: 0;
  opacity: ${({ $isLoaded }) => $isLoaded ? 0 : 1};
  pointer-events: none;
  position: fixed;
  transition: opacity 0.8s var(--transition-easing) 100ms;
  z-index: 100;
`;

export const Wrapper = styled.div`
  --content-x-padding: 24px;
  --message-line-height: 1.25em;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;

  @media (${breakpoints.small}) {
    --content-x-padding: 3rem;
    --nav-height: 7.5rem;
    --message-line-height: 1.1em;

    grid-template-columns: min-content 1fr;
    grid-template-rows: min-content 1fr;
  }

  @media (${breakpoints.medium}) {
    --article-width: 50%;
    --message-line-height: 1.07em;
  }

  @media (${breakpoints.large}) {
    --content-x-padding: 6rem;
  }

  @media (${breakpoints.xLarge}) {
    --article-width: 33vw;
  }

  @media (${breakpoints.max}) {
    --message-line-height: 1em;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 var(--content-x-padding);
  z-index: 1;
`;

export const Landing = styled.section`
  align-items: center;
  display: flex;
  padding-top: 18px;

  @media (${breakpoints.small}) {
    padding-top: 1rem;
  }

  @media (${breakpoints.medium}) {
    min-height: calc(100vh - var(--nav-height));
    padding: 0 0 var(--nav-height);
  }
`;

export const Header = styled.header`
  align-items: center;
  box-shadow: 0 1px 0 rgb(151 142 129/0.25);
  display: flex;
  font-family: var(--font-family-sans);
  font-size: 0.75rem;
  font-weight: 600;
  height: var(--header-height-small);
  justify-content: space-between;
  padding: 0 var(--content-x-padding);
  position: sticky;
  top: 0;
  z-index: 3;

  &::before {
    background-color: var(--color-body-background);
    content: "";
    inset: 0;
    opacity: 0.98;
    position: absolute;
    z-index: -1;
  }

  * {
    font: inherit;
    margin: 0;
  }

  h2 { display: none; }

  @media (${breakpoints.small}) and (height >= 600px) {
    h2 { display: block; }
  }

  @media (${breakpoints.small}) {
    box-shadow: -1px 0 0 rgb(151 142 129/0.5);
    font-size: 0.8rem;
    font-weight: 400;
    grid-row: 1/-1;
    height: var(--header-height-large);
    padding: 2rem 0;
    transform: scale(-1);
    width: 5rem;
    writing-mode: vertical-lr;
  }

  @media (${breakpoints.large}) {
    font-size: 0.9rem;
  }
`;

export const Nav = styled.nav`
  align-items: center;
  box-shadow: 0 1px 0 rgb(151 142 129/0.25);
  font-family: var(--font-family-sans);
  font-size: 0.8rem;
  min-height:  var(--nav-height);
  padding: 18px var(--content-x-padding);
  position: sticky;
  top: var(--header-height-small);
  z-index: 2;

  &::before {
    background-color: var(--color-body-background);
    content: "";
    inset: 0;
    opacity: 0.97;
    position: absolute;
    z-index: -1;
  }

  @media (${breakpoints.small}) {
    box-shadow: none;
    display: flex;
    font-size: 0.8rem;
    padding: 0 var(--content-x-padding);
    top: 0;
  }
`;

export const NavItems = styled.ol`
  color: var(--color-lowlight);
  column-gap: 2ch;
  display: flex;
  flex-wrap: wrap;
  list-style-position: inside;
  list-style-type: decimal;

  @media (${breakpoints.large}) {
    list-style-position: inside;
    list-style-type: decimal;
  }
`;

export const NavItem = styled.li`
  overflow: hidden;
  padding: 2px 0;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NavLink = styled(Link)`
  color: inherit;
  text-decoration: underline;
  text-decoration-color: transparent;
  text-underline-offset: 0.7em;
  transition:
    color 0.8s var(--transition-easing),
    text-underline-offset 0.8s var(--transition-easing),
    text-decoration-color 0.8s var(--transition-easing);

  &:hover,
  &.active {
    color: rgb(23 23 22);
    text-decoration-color: inherit;
    text-underline-offset: 0.4em;
  }
`;

export const Message = styled.article`
  font-family: var(--font-family-serif);
  font-size: 7.3vw;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: var(--message-line-height);

  @media (${breakpoints.small}) {
    font-size: 6.3vw;
  }

  @media (${breakpoints.medium}) {
    font-size: 7vw;
  }

  @media (${breakpoints.xLarge}) {
    font-size: 7.7vw;
    letter-spacing: -0.05em;
  }

  @media (${breakpoints.max}) {
    font-size: 7.9vw;
  }
`;

export const MessageItems = styled.ul`
  column-gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  @media (${breakpoints.small}) {
    column-gap: 1.4rem;
  }

  @media (${breakpoints.large}) {
    column-gap: 2rem;
  }

  @media (${breakpoints.xLarge}) {
    column-gap: 3rem;
  }
`;

export const MessageItem = styled.li`
  margin: -0.15em 0 0;
`;

export const MessageLink = styled(Link)`
  align-items: start;
  color: inherit;
  column-gap: 0.2rem;
  display: flex;
  text-decoration: none;
`;

export const MessageText = styled.div`
  height: var(--message-line-height);
  overflow: hidden;
  padding-right: 0.05em;
`;

export const MessageSlide = styled.div`
  display: flex;
  flex-direction: column;
  transition: transform 0.8s var(--transition-easing);

  ${MessageLink}:hover & {
    transform: translate3d(0, -50%, 0);
  }
`;

export const MessageDefault = styled.div``;

export const MessageHover = styled.div`
  color: var(--color-highlight);
`;

export const Asterisk = styled.span`
  color: var(--color-lowlight);
`;

export const Panel = styled(Element)`
  align-items: start;
  column-gap: 1vw;
  counter-reset: footnotes;
  display: flex;
  padding-bottom: 4rem;

  &:last-of-type { padding-bottom: 10vh; }

  @media (${breakpoints.small}) {
    padding-bottom: 6rem;
  }

  @media (${breakpoints.medium}) {
    padding-bottom: 8rem;
    &:last-of-type { padding-bottom: 20vh; }
  }

  @media (${breakpoints.large}) {
    &:last-of-type { padding-bottom: 30vh; }
  }

  @media (${breakpoints.xLarge}) {
    &:last-of-type { padding-bottom: 40vh; }
  }
`;

export const Article = styled.article`
  counter-reset: list;
  font-size: 1.1rem;
  width: var(--article-width);

  .work {
    display: flex;
    flex-direction: column;
    list-style: none;
    row-gap: 0.75em;

    li {
      counter-increment: list;

      strong {
        -webkit-font-smoothing: antialiased;
        font-weight: 700;
      }
    }
  }

  ul { list-style: none; }

  @media (${breakpoints.small}) {
    font-size: 1.4rem;
  }

  @media (${breakpoints.large}) {
    font-size: 1.6rem;
  }

  @media (${breakpoints.max}) {
    font-size: 2rem;
  }
`;

export const Picture = styled.picture`
  aspect-ratio: 1/1;
  margin: 2rem calc(var(--content-x-padding) * -1) 1rem;
  pointer-events: none;
  position: relative;

  svg {
    aspect-ratio: 1/1;
    fill: none;
    position: absolute;
    stroke: var(--color-lowlight);
    stroke-width: 1px;
  }

  @media (${breakpoints.small}) {
    svg {
      stroke-width: 0.5px;
    }
  }

  @media (${breakpoints.medium}) {
    aspect-ratio: auto;
    inset: 0;
    margin: 0;
    pointer-events: none;
    position: fixed;
    z-index: -1;

    svg {
      inset: auto 0 0 50vw;
      max-width: min(100vh, 100vw);
    }
  }
`;

export const ArticleHeader = styled.header`
  margin: 0 0 0.75em;
  position: relative;

  h3 {
    column-gap: 1ch;
    display: flex;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.2;
    margin: 0;

    strong {
      font-weight: 700;
      letter-spacing: -0.03em;
    }
  }

  @media (${breakpoints.small}) {
    margin: 0 0 1em;
    h3 { font-size: 2rem; }
  }

  @media (${breakpoints.medium}) {
    h3 { font-size: 2rem; }
  }

  @media (${breakpoints.large}) {
    h3 { font-size: 2.4rem; }
  }

  @media (${breakpoints.xLarge}) {
    h3 { font-size: 2.5rem; }
  }
`;

export const Footer = styled.footer`
  border-top: solid 1px var(--color-lowlight);
  color: var(--color-lowlight);
  font-family: var(--font-family-sans);
  font-size: 0.7rem;
  line-height: 1.4;
  margin-top: 1rem;
  padding-top: 1rem;

  ol {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0 0 0 2ch;
    row-gap: 0.5em;
  }

  @media (${breakpoints.small}) {
    font-size: 0.8rem;
    line-height: 1.5;
    margin-top: 2rem;
  }
`;

export const Anchor = styled.a`
  color: var(--color-lowlight);
  display: block;
  position: absolute;
  left: 0;
  opacity: 0;
  text-decoration: none;
  transform: translate3d(-100%, 0, 0);
  transition: opacity 0.8s var(--transition-easing);
  width: 2ch;

  &:hover { color: var(--color-highlight); }

  ${ArticleHeader}:hover & {
    opacity: 1;
  }
`;

export const Photo = styled.figure`
  background-color: rgb(23 23 23);
  box-shadow:
    0 2px 2px hsl(0deg 0% 0% / 0.123),
    -1px 4px 4px hsl(0deg 0% 0% / 0.123),
    -2px 8px 8px hsl(0deg 0% 0% / 0.123),
    -4px 16px 16px hsl(0deg 0% 0% / 0.123),
    -8px 32px 32px hsl(0deg 0% 0% / 0.123);
  margin: 0;
  max-width: 500px;
  padding: 18px;
  position: relative;
  transform: rotate(-2deg);

  img {
    display: block;
    width: 100%;
  }

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
      inset: 18px;
      z-index: -1;
    }
`;
