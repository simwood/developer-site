module.exports = {
  title: 'Simwood Developer',
  tagline: 'Developer site for simwood products',
  url: 'https://developer.simwood.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'simwood', // Usually your GitHub org/user name.
  projectName: 'developer-site', // Usually your repo name.
  onBrokenLinks: 'warn',
  themeConfig: {
    navbar: {
      title: 'Simwood Developer',
      logo: {
        alt: 'Simwood Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/direct/introduction',
          label: 'Direct',
          position: 'left',
        },
        {
          to: 'docs/wholesale',
          label: 'Wholesale',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              to: 'docs/direct/introduction',
              label: 'Direct',
              position: 'left',
            },
            {
              to: 'docs/wholesale',
              label: 'Wholesale',
              position: 'left',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/SimwoodeSMS',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/simwood',
            },
            {
              label: 'Slack Signup',
              href: 'https://docs.google.com/forms/d/e/1FAIpQLSdARUKFPPmY840UezuYboOD5N_yahGLcxly2TbulyKfjIqR9Q/viewform',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              href: 'https://simwood.com',
            },
            {
              label: 'Blog',
              href: 'https://blog.simwood.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/simwood',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Simwood eSMS Limited.`,
    },
    // algolia: {
    //   apiKey: 'YOUR_API_KEY',
    //   indexName: 'YOUR_INDEX_NAME',
    //   searchParameters: {}, // Optional (if provided by Algolia)
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/simwood/developer-site/tree/master',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
