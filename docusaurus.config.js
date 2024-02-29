// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FWU BMI Docs',
  tagline: 'Technische Dokumentation der Bildungsmedieninfrastruktur des FWU',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://fwu-de.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/bmi-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fwu-de', // Usually your GitHub org/user name.
  projectName: 'bmi-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'docs/VIDIS/api/swagger.json',
            route: 'api/vidis',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#ff6900',
        },
      },
    ],
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fwu-de/bmi-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/fwu.de/bmi-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'BMI Docs',
        logo: {
          alt: 'LFWU Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'docs/mundo/intro',
            position: 'left',
            label: 'Mundo',
          },
          {
            to: 'docs/vidis/intro',
            position: 'left',
            label: 'Vidis',
          },
          {
            to: 'api/vidis',
            position: 'left',
            label: 'API',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/fwu-de/bmi-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        //style: 'dark',
        links: [
          {
            title: 'Weitere Links',
            items: [
              {
                label: 'Impressum und Datenschutz',
                to: 'https://fwu.de/impressum-datenschutz',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/fwu.de/bmi-docs',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} FWU - Das Medieninstitut der Länder, Inc.<br /> Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
