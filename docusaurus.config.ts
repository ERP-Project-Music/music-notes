import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { PAYPAL_ME_LINK } from './src/shared/constants';

const title = 'Music Notes';

const config: Config = {
  title,
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
          customCss: './src/theme.css',
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
      title,
      logo: {
        alt: title,
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/ERP-Project-Music/music-notes',
          label: 'GitHub',
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
      copyright: `Copyright © ${new Date().getFullYear()} Music Notes powered by ERP Project and built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
