import { defineConfig } from 'vitepress'

export default defineConfig({
  title: ' ',
  description: '',
  lastUpdated: true,
  base: '/',
  sitemap: {
    hostname: 'https://monojson.tech'
  },
  themeConfig: {
    logo: { src: '/logo.png', width: 24, height: 24 },
    nav: [
      { text: '🏠 Home', link: '/' },
      { text: '📚 Journals', link: '/journals/adonis-captcha-guard' },
      { text: '❤️ Health', link: '/health/happy-running' },
      { text: '🧰 Toolbox', link: '/toolbox' },
      { text: '📺 TV Shows', link: '/tv-shows' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/monojson' }],
    footer: {
      message: '',
      copyright: '© 2024 Monojson'
    },
    sidebar: {
      '/journals': [
        {
          text: 'Skills',
          items: [
            {
              text: 'Adonis Captcha Guard',
              link: '/journals/adonis-captcha-guard'
            },
            {
              text: 'Vitepress with Tailwind',
              link: '/journals/vitepress-with-tailwind'
            }
          ]
        }
      ],
      '/health': [
        {
          text: 'Running',
          items: [{ text: 'Happy Running', link: '/health/happy-running' }]
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
