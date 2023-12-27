// Constants
const { ORG, SUBDOMAIN } = '../constants';

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Brandon Durham ❤️ ${ORG}`,
    siteUrl: `https://${SUBDOMAIN}.smallparade.com`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-preload-fonts',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{userAgent: '*', disallow: '/'}]
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-HWE0FF8399'],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src\/images/
        },
      },
    },
  ],
};
