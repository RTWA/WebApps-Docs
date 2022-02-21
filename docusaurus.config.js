module.exports = {
  title: 'WebApps Docs',
  url: 'https://docs.getwebapps.uk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'RTWA',
  projectName: 'WebApps',
  themeConfig: {
    navbar: {
      title: 'WebApps Docs',
      logo: {
        alt: 'WebApps',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/RTWA/WebApps',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://studio.getwebapps.uk',
          label: 'Studio',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} WebApps. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    prism: {
      additionalLanguages: ['php']
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/RTWA/WebApps-Documentation/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [require.resolve('./webapps-plugin.js')],
  scripts: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-VSDEZZZ110',
      async: true
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.1/cookieconsent.min.js',
      'data-cfasync': false
    },
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4461111494402111',
      async: true,
      crossorigin: 'anonymous'
    },
    {
      src: 'https://getwebapps.uk/js/docs-consent.js'
    },
  ],
  stylesheets: [
    'https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.1/cookieconsent.min.css'
  ]
};
