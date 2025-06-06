import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { PAYPAL_ME_LINK } from './src/shared/constants';

import { version, appName } from './package.json';

const config: Config = {
  title: appName,
  tagline:
    'Apuntes personales de teoría musical organizados como referencia rápida. Ideal para repasar conceptos como escalas, modos, funciones armónicas y estructura de canciones.',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://erp-project-music.github.io',
  baseUrl: '/music-notes/',

  organizationName: 'ERP-Project-Music',
  projectName: 'music-notes',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true,

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        pages: false,
        theme: {
          customCss: './src/style.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: appName,
      logo: {
        alt: appName,
        src: 'img/logo.png',
      },
      items: [
        {
          label: '💖 Donar vía PayPal',
          href: PAYPAL_ME_LINK,
          position: 'right',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/ERP-Project-Music/music-notes',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Sígueme en',
          items: [
            {
              label: 'Instagram',
              to: 'https://www.instagram.com/erpprojectofficial/',
            },
            {
              label: 'YouTube',
              to: 'https://www.youtube.com/@ERPProject',
            },
            {
              label: 'Spotify',
              to: 'https://open.spotify.com/artist/6xR1HRj6SzReee9R2EkOUo?si=9ed48799ab984fa8',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ERP-Project-Music/music-notes',
            },
            {
              label: '💖 Donar vía PayPal',
              href: PAYPAL_ME_LINK,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} • Music Notes powered by ERP Project — v${version}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false, // puedes dejarlo en true para desarrollo
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#21252b',
          },
        ],
        swCustom: require.resolve('./src/sw.js'),
      },
    ],
  ],
};

export default config;
