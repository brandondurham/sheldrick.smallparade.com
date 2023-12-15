import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Sticky from 'react-stickynode';
import Markdown from 'react-markdown';
import Vivus from 'vivus';
import rehypeRaw from 'rehype-raw';

// Images
import ElephantA from '../images/elephant_a-1.svg';
import ElephantB from '../images/elephant_a-2.svg';
import ElephantC from '../images/elephant_a-3.svg';
import ElephantD from '../images/elephant_a-4.svg';
import ElephantE from '../images/elephant_a-5.svg';

// Styles
import * as Styled from '../styles/index.styled.js';

const GlobalStyle = createGlobalStyle`
  html {
    --nav-height: 7.5rem;
    --message-line-height: 1.3em;
    --transition-easing: cubic-bezier(0.16, 1, 0.3, 1);

    /* Colors */
    --color-default: rgb(23 23 22);
    --color-highlight: rgb(211 141 44);
    --color-lowlight: rgb(151 142 129);

    color: var(--color-default);
    font-family: Decimal, "Ringside Regular SSm", Decimal, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    scroll-behavior: smooth;
    scroll-padding-top: var(--nav-height);
  }

  body {
    --body-background: rgb(215 210 202);

    background-color: var(--body-background);
    margin: 0;
    padding: 0;
  }

  * { box-sizing: border-box; }

  p {
    margin: 1em 0;
    /* text-wrap: balance; */

    &:first-of-type { margin-top: 0;}
  }

  a {
    color: var(--color-lowlight);
    text-underline-offset: 0.3em;
    transition: color 0.8s var(--transition-easing);

    &:hover { color: var(--color-default); }
  }

  [aria-describedby="footnote-label"] {
    color: inherit;
    counter-increment: footnotes;
    cursor: default;
    outline: none;
    text-decoration: none;
  }

  [aria-describedby="footnote-label"]::after {
    color: var(--color-lowlight);
    content: '[' counter(footnotes) ']';
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
`;

const animationOptions = {
  animTimingFunction: Vivus.EASE_OUT,
  duration: 100,
  start: 'manual'
};

const sections = [
  {
    anchor: 'about',
    content: `
My name is Brandon Durham. I’ve been a Software Engineer and Designer professionally since 2006. My primary focus has always been front-end development with a strong interest in its relationship to design (I’m a developer first, designer second), but in today’s world I would likely be considered more of a _<a href="#generalist" aria-describedby="footnote-label" id="generalist-ref">Generalist</a>_.

Writing a line of code and seeing something happen in the browser as a result still feels like magic to me, even after all of these years. I’ve worked my fair share of jobs for the paycheck. I almost always enjoy the work itself, so I’ve been able to convince myself that I’m fulfilled. But that has become more and more difficult to do as time goes by. It’s time for a change.

I’ve followed the work of Sheldrick Wildlife Trust for many years and have always dreamt of somehow 
    `,
    footnotes: [
      'Hello!'
    ],
    icon: '',
    label: 'Brandon Durham',
    menu: 'About me',
    picture: <ElephantA id="elephant-a" />,
    section: '¹',
  },
  {
    anchor: 'work',
    content: 'One of the earliest examples of my work that is still online is [palaxytracks.com](https://palaxytracks.com).',
    icon: '',
    label: 'would love to work for',
    menu: 'Examples of my work',
    picture: <ElephantB id="elephant-b" />,
    section: '²',
  },
  {
    anchor: 'why',
    content: 'Ullamco fugiat ipsum Lorem laborum proident veniam ex et consequat. Incididunt duis qui veniam labore et et incididunt quis est enim ipsum. Non anim in laborum est do exercitation irure enim velit sunt sint. Exercitation velit sit labore laboris excepteur. Proident elit qui id eiusmod. Magna eiusmod ad exercitation cillum cillum qui minim laboris occaecat do qui duis pariatur tempor. Labore ut non dolor incididunt irure do excepteur.',
    icon: '♥',
    label: 'Sheldrick Wildlife Trust.',
    menu: 'Why Sheldrick Wildlife Trust?',
    picture: <ElephantC id="elephant-c" />,
    section: '³',
  },
  {
    anchor: 'hooray',
    content: `Brandon’s an outstandingly talented developer, a thoughtful and constructive collaborator, ten times the designer that he thinks he is, and just one of my favorite people. I count myself immensely fortunate that his sensitivity to typography brought him to Hoefler&Co ([typography.com](https://typography.com)), where I had the pleasure of working with him for seven of my company’s most energetic years, and I’m happy to call him a friend.

Over these years, Brandon was instrumental in the design and development of not only typography.com, which underwent both evolutionary and revolutionary changes, but also the award-winning and influential [discover.typography.com](https://discover.typography.com), which raised the bar for typography in the browser. Brandon took the reins of our SaaS product [cloud.typography.com](https://cloud.typography.com), and was an absolutely critical part of my team that was charged with creating an elegant front-end to conceal the massively complex set of decisions required of a sophisticated font library. Behind the scenes, Brandon dealt smartly and confidently with the demanding back-end integrations of two different content management systems, a best-of-breed CDN, and a sophisticated internal CRM that he designed while tackling the public-facing websites at the same time. I was always grateful for not only Brandon’s talents and energies but his ideas and opinions, his honesty, his good humor, his eagerness to simultaneously explore new technologies while committing to time-tested ones, his patience with the limited resources of an established company (bootstrapped, profitable, old-school), and his camaraderie with a diverse group of colleagues. I know him to have been both a generous collaborator and a good friend to the many designers, developers, engineers, managers, and typeface designers he worked with at H&Co, and I’d recommend him without hesitation to absolutely anyone with the good fortune to be considering him for a project.`,
    icon: '',
    label: 'Interested?',
    menu: 'Interested?',
    picture: <ElephantD id="elephant-d" />,
    section: '⁴',
  },
  {
    anchor: 'contact',
    content: 'Pariatur cupidatat tempor sint cupidatat. Pariatur laborum nulla ullamco aute consequat non. Deserunt est Lorem voluptate quis nisi. Voluptate occaecat ea sint est non pariatur nisi incididunt dolor est. Ad minim magna ad nostrud deserunt aliquip. Magna ad fugiat nisi laborum est cupidatat.',
    icon: '💬',
    label: 'Get in touch!',
    menu: 'Contact me',
    picture: <ElephantE id="elephant-e" />,
    section: '⁵',
  },
];

const IndexPage = () => {
  let pictures = {};

  useEffect(() => {
    pictures = {
      about: new Vivus('elephant-a', animationOptions),
      work: new Vivus('elephant-b', animationOptions),
      why: new Vivus('elephant-c', animationOptions),
      hooray: new Vivus('elephant-e', animationOptions),
      contact: new Vivus('elephant-d', animationOptions),
    }
  }, []);

  const handleStateChange = (status, anchor) => {
    if ([Sticky.STATUS_FIXED, Sticky.STATUS_RELEASED].includes(status.status)) {
      pictures[anchor].play();
    }
  };

  return (
    <Styled.Wrapper>
      <GlobalStyle />
      <Styled.Header>
        <h1><span aria-hidden>●</span> Brandon Durham, Web Developer/Designer</h1>
        <h2><span aria-hidden>●</span> 18+ years experience</h2>
      </Styled.Header>
      <Styled.Nav id="navigation">
        <Styled.NavItems>
          {
            sections.map(({ anchor, menu }, index) => (
              <Styled.NavItem key={anchor}>
                <Styled.NavLink href={`#${anchor}`}>{menu}</Styled.NavLink>
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
                sections.map(({ anchor, section, label }, index) => (
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
          sections.map(({ anchor, content, footnotes, icon, menu, picture }) => (
            <Styled.Panel id={anchor} key={anchor}>
              <Styled.Article>
                <Styled.ArticleHeader>
                  <Styled.Anchor href={`#${anchor}`}>
                    <span aria-hidden="true">§</span>
                    <span className="visually-hidden">Section titled “{menu}”</span>
                  </Styled.Anchor>
                  <h3>{icon} {menu}</h3>
                </Styled.ArticleHeader>
                <Markdown rehypePlugins={[rehypeRaw]}>{content}</Markdown>
                {
                  footnotes && (
                    <Styled.Footer>
                      <h4 className="visually-hidden" id="footnote-label">Footnotes</h4>
                      <ol>
                        <li id="generalist">“A generalist refers to a professional who offers a range of diverse skills and an intelligent mix of knowledge from a variety of disciplines. Handling these diverse roles provides generalists a thorough understanding of all the functioning parts of an industry. Generalists multitask and collaborate to tap into related domains when opportunities arise. This hones their ability to handle unique situations and formulate enduring perspectives.” <a href="#generalist-ref" aria-label="Back to content">↩</a></li>
                      </ol>
                    </Styled.Footer>
                  )
                }
              </Styled.Article>
              <Styled.Picture>
                <Sticky onStateChange={(status) => handleStateChange(status, anchor)} top="#navigation">
                  {picture}
                </Sticky>
              </Styled.Picture>
            </Styled.Panel>
          ))
        }
      </Styled.Main>
    </Styled.Wrapper>
  )
}

export default IndexPage;
export const Head = () => <title>Brandon Durham ❤️ Sheldrick Wildlife Trust</title>;
