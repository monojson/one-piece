import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: ' ',
  description: '',
  lastUpdated: true,
  base: '/',
  sitemap: {
    hostname: 'https://monojson.tech'
  },
  themeConfig: {
    nav: [
      { text: '🏠 Home', link: '/' },
      { text: '📚 Journal', link: '/journal' },
      { text: '❤️ Health', link: '/health' },
      { text: '🧰 Toolbox', link: '/toolbox' },
      { text: '📺 TV Shows', link: '/tv-shows' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/monojson' }],
    footer: {
      message: '',
      copyright: '© 2024 Monojson'
    },
    sidebar: {
      '/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Configuration', link: '/guide/configuration' },
            { text: 'Customization', link: '/guide/customization' },
            { text: 'Plugins', link: '/guide/plugins' },
            { text: 'Deploy', link: '/guide/deploy' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    }
  },
  head: [
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-G6SJGM4YX6'
      }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-G6SJGM4YX6');`
    ]
  ]
})
