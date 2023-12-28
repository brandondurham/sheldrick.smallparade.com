import React, { useCallback, useEffect, useRef, useState } from 'react';
import Sticky from 'react-stickynode';
import Vivus from 'vivus';
import FontFaceObserver from 'fontfaceobserver';

// Images
import AnimalA from '../images/horse-1.svg';
import AnimalB from '../images/horse-2.svg';
import AnimalC from '../images/horse-3.svg';
import AnimalD from '../images/horse-4.svg';
import AnimalE from '../images/horse-5.svg';

// Styles
import GlobalStyle from '../styles/global.styled.js';
import * as Styled from '../styles/index.styled.js';

// Constants
import { ORG, SUBDOMAIN } from '../constants';

// Hooks
import { useBreakpoints } from '../hooks/useBreakpoints';

// Content
import Content from '../content';

// Universal animation options for the Vivus package.
const animationOptions = {
  animTimingFunction: Vivus.EASE_OUT,
  duration: 100,
  start: 'manual'
};

const IndexPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const pictures = useRef({});

  // Track breakpoint state.
  const { matches } = useBreakpoints();

  // Fonts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fontDecimal = new FontFaceObserver('Decimal');
      const fontSentinel = new FontFaceObserver('Sentinel');
      Promise.all([fontDecimal.load(), fontSentinel.load()]).then(() => {
        setIsLoaded(true);
      });
    } else {
      setIsLoaded(true);
    }
  }, []);

  // Once this page loads let’s set up the Vivus animations for each 
  useEffect(() => {
    Content.forEach(({ anchor, image }) => {
      pictures.current[anchor] = new Vivus(image, animationOptions);
    });
    if (!matches.medium) {
      Object.keys(pictures.current).forEach((picture) => {
        pictures.current[picture].play();
      });
    }
  }, [matches]);

  const handleStateChange = useCallback((status, anchor) => {
    if (matches.medium) {
      if ([Sticky.STATUS_FIXED, Sticky.STATUS_RELEASED].includes(status.status)) {
        pictures.current[anchor] && pictures.current[anchor].play();
      } else if (status.status === Sticky.STATUS_ORIGINAL) {
        pictures.current[anchor] && pictures.current[anchor].play(-1);
      }
    }
  }, [matches]);

  return (
    <Styled.Wrapper>
      <GlobalStyle />
      <Styled.Overlay $isLoaded={isLoaded} />
      <Styled.Header>
        <h1><span aria-hidden>●</span> Brandon Durham, Web Developer/Designer</h1>
        <h2><span aria-hidden>●</span> 18+ years experience</h2>
      </Styled.Header>
      <Styled.Nav id="navigation">
        <Styled.NavItems>
          {
            Content.map(({ anchor, menu }) => (
              <Styled.NavItem key={anchor}>
                <Styled.NavLink
                  smooth
                  spy
                  activeClass="active"
                  delay={0}
                  duration={1000}
                  href={`#${anchor}`}
                  offset={-140}
                  to={anchor}
                >
                  {menu}
                </Styled.NavLink>
              </Styled.NavItem>
            ))
          }
        </Styled.NavItems>
      </Styled.Nav>
      <Styled.Main>
        <Styled.Landing>
          <Styled.Message>
            <Styled.MessageItems>
              {
                Content.map(({ anchor, section, label }, index) => (
                  <Styled.MessageItem key={anchor}>
                    <Styled.MessageLink
                      smooth
                      spy
                      activeClass="active"
                      delay={0}
                      duration={1000}
                      href={`#${anchor}`}
                      offset={-140}
                      to={anchor}
                    >
                      <Styled.MessageText>
                        <Styled.MessageSlide>
                          <Styled.MessageDefault>{label}</Styled.MessageDefault>
                          <Styled.MessageHover aria-hidden>{label}</Styled.MessageHover>
                        </Styled.MessageSlide>
                      </Styled.MessageText>
                      <Styled.Asterisk>
                        {section}
                      </Styled.Asterisk>
                    </Styled.MessageLink>
                  </Styled.MessageItem>
                ))
              }
            </Styled.MessageItems>
          </Styled.Message>
        </Styled.Landing>
        <Styled.Picture>
          <AnimalA id="animal-a" />
          <AnimalB id="animal-b" />
          <AnimalC id="animal-c" />
          <AnimalD id="animal-d" />
          <AnimalE id="animal-e" />
        </Styled.Picture>
        {
          Content.map(({ anchor, content, footnotes, menu }, index) => (
            <Styled.Panel as="section" className="element" id={anchor} name={anchor} key={anchor}>
              <Styled.Article>
                <Sticky onStateChange={(status) => handleStateChange(status, anchor)} top={160} />
                <Styled.ArticleHeader>
                  <Styled.Anchor href={`#${anchor}`}>
                    <span aria-hidden="true">§</span>
                    <span className="visually-hidden">Section titled “{menu}”</span>
                  </Styled.Anchor>
                  <h3><span>{index + 1}</span> <strong>{menu}</strong></h3>
                </Styled.ArticleHeader>
                <div dangerouslySetInnerHTML={{ __html: content }} />
                {
                  footnotes && footnotes.length > 0 && (
                    <Styled.Footer>
                      <h4 className="visually-hidden" id="footnote-label">Footnotes</h4>
                      <ol>
                        {
                          footnotes.map(({ content, id }) => (
                            <li key={id} id={id}>
                              {content}
                              {' '}
                              <a href={`#${id}-ref`} aria-label="Back to content">⎌</a>
                            </li>
                          ))
                        }
                      </ol>
                    </Styled.Footer>
                  )
                }
                {
                  anchor === 'contact' && (
                    <Styled.Photo>
                      <img alt="Photography of Brandon Durham" src="/brandon-durham.jpg" />
                    </Styled.Photo>
                  )
                }
              </Styled.Article>
            </Styled.Panel>
          ))
        }
      </Styled.Main>
    </Styled.Wrapper>
  )
}

export default IndexPage;
export const Head = () => (
  <>
    <meta property="og:image" content={`https://${SUBDOMAIN}.smallparade.com/social.png`} />
    <meta property="og:image:width" content="2000" />
    <meta property="og:image:height" content="1265" />
    <meta property="og:title" content={`Brandon Durham ❤️ ${ORG}`} />
    <meta property="og:description" content="Software Engineer/Designer seeks pioneering conservation organisation for meaninigful relationship." />
    <meta property="og:type" content="person" />
    <meta property="og:url" content={`https://${SUBDOMAIN}.smallparade.com`} />
    <title>Brandon Durham ❤️ {ORG}</title>
  </>
);
