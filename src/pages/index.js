import React, { useEffect, useRef, useState } from 'react';
import Sticky from 'react-stickynode';
import Vivus from 'vivus';
import FontFaceObserver from 'fontfaceobserver';

// Images
import ElephantA from '../images/elephant_a-1.svg';
import ElephantB from '../images/elephant_a-2.svg';
import ElephantC from '../images/elephant_a-3.svg';
import ElephantD from '../images/elephant_a-4.svg';
import ElephantE from '../images/elephant_a-5.svg';
import Horizon from '../images/horizon.svg';

// Styles
import GlobalStyle from '../styles/global.styled.js';
import * as Styled from '../styles/index.styled.js';

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
  
  // Fonts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fontDecimal = new FontFaceObserver('Decimal');
      const fontWhitneyIndex = new FontFaceObserver('Whitney Index');
      Promise.all([fontDecimal.load(), fontWhitneyIndex.load()]).then(() => {
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
    pictures.current.horizon = new Vivus('horizon', animationOptions);
  }, []);

  const handleStateChange = (status, anchor) => {
    if ([Sticky.STATUS_FIXED, Sticky.STATUS_RELEASED].includes(status.status)) {
      pictures.current[anchor] && pictures.current[anchor].play();
      if (anchor === 'contact') {
        pictures.current.horizon.play();
      }
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      pictures.current[anchor] && pictures.current[anchor].play(-1);
      if (anchor === 'contact') {
        pictures.current.horizon.play(-1);
      }
    }
  };

  return (
    <Styled.Wrapper>
      <GlobalStyle />
      <Styled.Overlay $isLoaded={isLoaded} />
      <Styled.Picture>
        <ElephantA id="elephant-a" />
        <ElephantB id="elephant-b" />
        <ElephantC id="elephant-c" />
        <ElephantD id="elephant-d" />
        <ElephantE id="elephant-e" />
        <Horizon id="horizon" />
      </Styled.Picture>
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
                    <Styled.MessageLink href={`#${anchor}`}>
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
        {
          Content.map(({ anchor, content, footnotes, icon, menu }) => (
            <Styled.Panel className="element" id={anchor} name={anchor} key={anchor}>
              <Styled.Article>
                <Sticky onStateChange={(status) => handleStateChange(status, anchor)} top={160} />
                <Styled.ArticleHeader>
                  <Styled.Anchor href={`#${anchor}`}>
                    <span aria-hidden="true">§</span>
                    <span className="visually-hidden">Section titled “{menu}”</span>
                  </Styled.Anchor>
                  <h3>{icon} {menu}</h3>
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
                              <a href={`#${id}-ref`} aria-label="Back to content">↩</a>
                            </li>
                          ))
                        }
                      </ol>
                    </Styled.Footer>
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
export const Head = () => <title>Brandon Durham ❤️ Sheldrick Wildlife Trust</title>;
