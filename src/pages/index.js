import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import FontFaceObserver from 'fontfaceobserver';
import { motion } from 'framer-motion';
import Sticky from 'react-stickynode';

// Hooks
import { useBreakpoints } from '../hooks/useBreakpoints';

// Styles
import GlobalStyle from '../styles/global.styled';
import * as Styled from '../styles/index.styled';

// Constants
import { ORG, SUBDOMAIN } from '../constants';

// Content
import Content from '../content';
import { Letters } from '../content/letters';
import { Backdrop } from '../content/backdrop';

const IndexPage = () => {
  const [isScrolledToContent, setIsScrolledToContent] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const { current, matches } = useBreakpoints();

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

  const getScrollPercent = useCallback(() => {
    const h = document.documentElement;
    const b = document.body;
    const st = 'scrollTop';
    const sh = 'scrollHeight';

    const scrollPercent = Math.round(((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100);
    setScrollPercent(isNaN(scrollPercent) ? -1 : scrollPercent);
  }, []);

  useEffect(() => {
    if (window) window.addEventListener('scroll', getScrollPercent);
    return () => {
      if (window) window.removeEventListener('scroll', getScrollPercent);
    };
  }, [getScrollPercent]);

  const letterCollection = useMemo(() => Letters({ breakpoint: current }), [current]);
  const numLetters = letterCollection.length;

  const handleStateChange = useCallback((status) => {
    if (matches.small) {
      setIsScrolledToContent(status.status === Sticky.STATUS_FIXED);
    }
  }, [matches]);

  return (
    <Styled.Wrapper>
      <GlobalStyle />
      {
        matches?.medium && (
          <Styled.Letters>
            <Styled.Resting>
              {
                Backdrop.map(({ end, path }, index) => (
                  <motion.div
                    animate={end}
                    initial={{
                      scale: 0,
                      x: '50vw',
                      y: '50vh',
                    }}
                    key={`${index}-${path}`}
                    transition={{
                      damping: 8,
                      delay: index * 0.01,
                      stiffness: 120,
                      type: 'spring',
                    }}
                  >
                    <svg viewBox="0 0 240 240">
                      <path
                        d={path}
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </motion.div>
                ))
              }
            </Styled.Resting>
            <Styled.Lockup>
              {
                letterCollection.map(({ end, height, path, start, width }, index) => {
                  const waypoint = 10 + ((index + 1) * (90 / numLetters));
                  return (
                    <motion.div
                      animate={scrollPercent >= waypoint ? end : start}
                      initial={start}
                      key={`${index}-${path}`}
                      transition={end.transition}
                    >
                      <svg
                        style={{
                          height: height ? `${height}px` : '240px',
                          width: width ? `${width}px` : '240px',
                        }}
                        viewBox={`0 0 ${width || 240} ${height || 240}`}
                      >
                        <path d={path} vectorEffect="non-scaling-stroke"/>
                      </svg>
                    </motion.div>
                  );
                })
              }
            </Styled.Lockup>
          </Styled.Letters>
        )
      }
      <Styled.Overlay $isLoaded={isLoaded} />
      <Styled.Header>
        <h1><span aria-hidden>●</span> Brandon Durham, Web Developer/Designer</h1>
        <h2><span aria-hidden>●</span> 18+ years experience</h2>
      </Styled.Header>
      <Styled.Nav id="navigation" $isScrolledToContent={isScrolledToContent}>
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
        {
          !matches?.medium && (
            <Styled.StaticRestingContainer>
              <Styled.Resting $static>
                {
                  Backdrop.map(({ end, path }, index) => (
                    <motion.div
                      animate={end}
                      initial={{
                        scale: 0,
                        x: '50vw',
                        y: '50vh',
                      }}
                      key={`${index}-${path}`}
                      transition={{
                        damping: 8,
                        delay: index * 0.01,
                        stiffness: 120,
                        type: 'spring',
                      }}
                    >
                      <svg viewBox="0 0 240 240">
                        <path
                          d={path}
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </motion.div>
                  ))
                }
              </Styled.Resting>
            </Styled.StaticRestingContainer>
          )
        }
        {
          Content.map(({ anchor, content, menu }, index) => (
            <Styled.Panel as="section" className="element" id={anchor} name={anchor} key={anchor}>
              {
                anchor === 'about' && (
                  <Sticky onStateChange={handleStateChange} top={120} />
                )
              }
              <Styled.Article>
                <Styled.ArticleHeader>
                  <Styled.Anchor href={`#${anchor}`}>
                    <span aria-hidden="true">§</span>
                    <span className="visually-hidden">Section titled “{menu}”</span>
                  </Styled.Anchor>
                  <h3><span>{index + 1}</span> <strong>{menu}</strong></h3>
                </Styled.ArticleHeader>
                <div dangerouslySetInnerHTML={{ __html: content }} />
                {
                  anchor === 'contact' && (
                    <>
                      <svg width="0" height="0">
                        <clipPath id="svgClip" clipPathUnits="objectBoundingBox">
                          <path d="M0.622,0.852 C0.686,1.049,0.314,1.049,0.378,0.852 C0.119,1,-0.05,0.883,0.151,0.613 C-0.041,0.667,-0.041,0.333,0.151,0.387 C-0.05,0.117,0.119,-0.049,0.392,0.148 C0.314,-0.049,0.686,-0.049,0.622,0.148 C0.895,-0.049,1,0.117,0.863,0.387 C1.035,0.333,1.05,0.647,0.863,0.613 C1,0.883,0.895,1,0.622,0.852" />
                        </clipPath>
                      </svg>
                      <Styled.Photo>
                        <img alt="Photography of Brandon Durham" src="/brandon-durham.jpg" />
                      </Styled.Photo>
                    </>
                  )
                }
              </Styled.Article>
            </Styled.Panel>
          ))
        }
      </Styled.Main>
      {/* <Styled.BreakpointReporter>
        {current}
      </Styled.BreakpointReporter> */}
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
    <meta property="og:description" content="Software Engineer/Designer seeks pioneering organization for meaninigful relationship." />
    <meta property="og:type" content="person" />
    <meta property="og:url" content={`https://${SUBDOMAIN}.smallparade.com`} />
    <title>Brandon Durham ❤️ {ORG}</title>
  </>
);
