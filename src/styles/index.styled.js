import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: min-content 1fr;

  #about .sticky-inner-wrapper::before {
    background-image: url('/background.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    inset: 0;
    opacity: 0;
    position: absolute;
    transform: scale(0.9);
    transition:
      opacity 2s var(--transition-easing),
      transform 2s var(--transition-easing);
    z-index: -1;
  }

  #about .sticky-outer-wrapper.active .sticky-inner-wrapper::before {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Main = styled.main`
  counter-reset: footnotes;
  display: flex;
  flex-direction: column;
  padding: 0 6rem 50vh;
  row-gap: 8vh;
  z-index: 1;
`;

export const Landing = styled.section`
  align-items: center;
  display: flex;
  min-height: calc(100vh - var(--nav-height));
  padding-bottom: var(--nav-height);
`;

export const Header = styled.header`
  background-color: var(--body-background);
  box-shadow: -1px 0 0 rgb(151 142 129/0.5);
  display: flex;
  grid-row: 1/-1;
  height: 100vh;
  justify-content: space-between;
  padding: 2rem;
  position: sticky;
  top: 0;
  transform: scale(-1);
  width: 5rem;
  writing-mode: vertical-lr;
  z-index: 3;

  * {
    font: inherit;
    margin: 0;
  }
`;

export const Nav = styled.nav`
  align-items: center;
  backdrop-filter: blur(10px);
  display: flex;
  font-size: 0.9rem;
  height: var(--nav-height);
  padding: 0 6rem;
  position: sticky;
  top: 0;
  z-index: 2;

  &::before {
    background-color: var(--body-background);
    content: "";
    inset: 0;
    opacity: 0.9;
    position: absolute;
    z-index: -1;
  }
`;

export const NavItems = styled.ol`
  color: var(--color-lowlight);
  column-gap: 2rem;
  display: flex;
  flex-wrap: wrap;
  list-style-position: inside;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  text-underline-offset: 0.4em;
  transition: color 0.8s var(--transition-easing);

  &:hover {
    color: rgb(23 23 22);
    text-decoration: underline;
  }
`;

export const Message = styled.article``;

export const MessageItems = styled.ul`
  column-gap: 3rem;
  display: flex;
  flex-wrap: wrap;
  font-size: 3vw;
  line-height: var(--message-line-height);
  list-style: none;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  transform: translate3d(-0.13em, 0, 0);
`;

export const MessageItem = styled.li`
  margin: 0;
  padding: 0;
`;

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

export const Panel = styled.section`
  align-items: start;
  column-gap: 1vw;
  display: flex;
  font-size: 2rem;
  min-height: calc(100vh - var(--nav-height));
  overflow: hidden;
`;

export const Article = styled.article`
  /* position: sticky; */
  /* top: var(--nav-height); */
  width: 33vw;
`;

export const Picture = styled.picture`
  /* display: flex; */
  flex-grow: 1;
  /* height: 100vh; */
  /* justify-content: center; */
  /* overflow: hidden; */
  
  & .sticky-outer-wrapper {
    /* flex-grow: 1; */
  }
  
  svg {
    aspect-ratio: 1/1;
    /* background: red; */
    fill: none;
    /* height: 100vh; */
    left: 50%;
    max-width: 100%;
    position: relative;
    transform: translate3d(-50%, 0, 0);
    stroke: rgb(142, 127, 105);
    /* stroke: black; */
    stroke-width: 4px;
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
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 4rem;
  padding-top: 1.5rem;

  ol {
    margin: 0;
    padding: 0 0 0 2ch;
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
