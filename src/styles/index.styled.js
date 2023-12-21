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
  --content-x-padding: 2rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;

  @media (${breakpoints.small}) {
    --content-x-padding: 3rem;

    grid-template-columns: min-content 1fr;
    grid-template-rows: min-content 1fr;
  }

  @media (${breakpoints.medium}) {
    --article-width: 50%;
  }

  @media (${breakpoints.large}) {
    --content-x-padding: 6rem;
  }

  @media (${breakpoints.xLarge}) {
    --article-width: 33vw;
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
  min-height: 80vh;

  @media (${breakpoints.small}) {
    min-height: calc(100vh - var(--nav-height));
    padding-bottom: var(--nav-height);
  }
`;

export const Header = styled.header`
  align-items: center;
  background-color: var(--color-body-background);
  box-shadow: -1px 0 0 rgb(151 142 129/0.5);
  display: flex;
  font-size: 0.7rem;
  justify-content: space-between;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 3;

  * {
    font: inherit;
    margin: 0;
  }

  h2 { display: none; }

  @media (${breakpoints.small}) and (height >= 400px) {
    h2 { display: block; }
  }

  @media (${breakpoints.small}) {
    grid-row: 1/-1;
    height: 100vh;
    padding: 2rem 0;
    transform: scale(-1);
    width: 5rem;
    writing-mode: vertical-lr;
  }

  @media (${breakpoints.large}) {
    font-size: 1rem;
  }
`;

export const Nav = styled.nav`
  align-items: center;
  display: none;
  font-size: 0.75rem;
  min-height: var(--nav-height);
  padding: 18px;
  position: sticky;
  top: 0;
  z-index: 2;

  &::before {
    background-color: var(--color-body-background);
    content: "";
    inset: 0;
    opacity: 0.98;
    position: absolute;
    z-index: -1;
  }

  @media (${breakpoints.small}) {
    display: flex;
    font-size: 0.9rem;
    padding: 0 var(--content-x-padding);
  }

  @media (${breakpoints.medium}) {
    --nav-height: 7.5rem;
  }
`;

export const NavItems = styled.ol`
  color: var(--color-lowlight);
  column-gap: 2rem;
  display: flex;
  flex-wrap: wrap;
  list-style-position: inside;
`;

export const NavItem = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  text-underline-offset: 0.4em;
  transition: color 0.8s var(--transition-easing);

  &:hover {
    color: rgb(23 23 22);
    text-decoration: underline;
  }

  &.active {
    color: rgb(23 23 22);
    text-decoration: underline;
  }
`;

export const Message = styled.article``;

export const MessageItems = styled.ul`
  column-gap: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  font-size: 4.3vw;
  font-weight: 600;
  line-height: var(--message-line-height);
  list-style: none;
  text-transform: uppercase;
  transform: translate3d(-0.13em, 0, 0);

  @media (${breakpoints.small}) {
    --message-line-height: 1.3em;
    column-gap: 2rem;
    font-size: 3.8vw;
  }

  @media (${breakpoints.large}) {
    column-gap: 3rem;
    font-size: 3vw;
    font-weight: 400;
  }
`;

export const MessageItem = styled.li``;

export const MessageLink = styled.a`
  align-items: start;
  color: inherit;
  column-gap: 0.5rem;
  display: flex;
  text-decoration: none;
`;

export const MessageText = styled.div`
  height: var(--message-line-height);
  overflow: hidden;
`;

export const MessageSlide = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: -0.015em;
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
  min-height: 100vh;
  padding-bottom: 4rem;

  &:last-of-type { padding-bottom: 50vh; }

  @media (${breakpoints.large}) {
    padding-bottom: 10rem;
    &:last-of-type { padding-bottom: 30vh; }
  }

  @media (${breakpoints.xLarge}) {
    &:last-of-type { padding-bottom: 40vh; }
  }
`;

export const Article = styled.article`
  counter-reset: list;
  font-size: 1rem;
  width: var(--article-width);

  .work {
    display: flex;
    flex-direction: column;
    list-style: none;
    row-gap: 1em;

    li {
      counter-increment: list;

      &::before {
        content: counter(list);
        display: inline-block;
        font-family: "Whitney Index";
        font-weight: 700;
        transform: translateY(0.08em);
      }

      strong {
        font-feature-settings: "smcp";
        font-weight: 500;
        text-transform: lowercase;
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
  display: none;
  inset: 0;
  pointer-events: none;
  position: fixed;
  z-index: -1;

  svg {
    aspect-ratio: 1/1;
    fill: none;
    inset: auto 0 0 50vw;
    max-width: 100vh;
    position: absolute;
    stroke: var(--color-lowlight);
    stroke-width: 10px;

    &#horizon {
      aspect-ratio: auto;
      inset: auto 0 0;
      max-width: 100vw;
      stroke-width: 3px;
    }
  }

  @media (${breakpoints.medium}) {
    display: block;
  }
`;

export const ArticleHeader = styled.header`
  margin: 1em 0;
  position: relative;

  h3 {
    font-size: 1em;
    font-weight: 600;
    margin: 0;
    text-transform: uppercase;
  }
`;

export const Footer = styled.footer`
  border-top: solid 1px var(--color-lowlight);
  color: var(--color-lowlight);
  font-size: 0.8rem;
  line-height: 1.6;
  margin-top: 4rem;
  padding-top: 1.5rem;

  ol {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0 0 0 2ch;
    row-gap: 0.5em;
  }

  @media (${breakpoints.small}) {
    font-size: 0.9rem;
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
