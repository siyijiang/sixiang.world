const path = require('path')
const beian = '粤ICP备2022062715号-1'


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '四象世界',
  titleDelimiter: '-',
  url: 'https://sixiang.world',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'siyijiang',
  projectName: 'sixiang.world',
  tagline: '来源于思想，四象的幻想',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/logo.png',
    metadata: [
      {
        name: 'keywords',
        content:'四象'
      },
      {
        name: 'keywords',
        content: 'blog, docusaurus, 四象, node, react, vue, web',
      },
      {
        name: 'keywords',
        content: '博客, docusaurus, 文档, 四象，现在主攻ts全栈',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      }
    },
    navbar: {
      title: '四象',
      logo: {
        alt: '四象',
        src: 'img/logo.webp',
        srcDark: 'img/logo.webp',
      },
      hideOnScroll: true,
      items: [
        {
          label: '博客',
          position: 'left',
          items: [
            {
              label: '标签',
              to: 'tags',
            },
            {
              label: '历史文章',
              to: 'archive',
            },
          ],
        },
        {
          label: '文档',
          position: 'left',
          items: [
            {
              label: '技术笔记',
              to: 'docs/skill/',
            },
            {
              label: '我的分享',
              to: 'docs/share/',
            },
          ],
        },
        {
          label: '工具',
          position: 'left',
          items: [
            {
              label: '个人导航页',
              to: 'https://my.sixiang.world/',
            },
            {
              label: '网盘',
              to: 'https://file.sixiang.world',
            },
          ],
        },
        {
          label: '导航',
          position: 'right',
          to: 'website',
        },
        {
          label: '友链',
          position: 'right',
          to: 'links',
        },
        {
          label: '项目',
          position: 'right',
          to: 'project',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '博客',
          items: [
            {
              label: '标签',
              to: 'tags',
            },
            {
              label: '历史文章',
              to: 'archive',
            },
          ],
        },
        {
          title: '文档',
          items: [
            {
              label: '技术笔记',
              to: 'docs/skill',
            },
            {
              label: '我的分享',
              to: 'docs/share/',
            },
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: '关于我',
              to: '/about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/siyijiang',
            },
            {
              label: 'RSS',
              href: 'https://sixiang.world/rss.xml',
            },
          ],
        },
        {
          title: '更多',
          items: [{
            label: '友链',
            position: 'right',
            to: 'links',
          }, {
            label: '导航',
            position: 'right',
            to: 'website',
          },
          {
            html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`
          },
        ],
        },
      ],
      copyright: `<p><a href="http://beian.miit.gov.cn/" >${beian}</a></p><p>Copyright © 2020 - PRESENT 四象世界 Built with Docusaurus.</p>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php', 'rust', 'toml'],
      defaultLanguage: 'shell',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    algolia: {
      appId: 'GV6YN1ODMO',
      apiKey: '50303937b0e4630bec4a20a14e3b7872',
      indexName: 'kuizuo',
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {}
    },
    giscus: {
      repo: 'siyijiang/sixiang-giscus',
      repoId: 'R_kgDOIyhUpQ',
      category: 'General',
      categoryId: 'DIC_kwDOIyhUpc4CTorz',
      mapping: 'title',
      lang: 'zh-CN',
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      github: 'https://github.com/siyijiang',
      mail: 'mailto:siyijiang233@outlook.com',
      qq: 'https://qm.qq.com/cgi-bin/qm/qr?k=bIV7oANAIUbMHsZ5NCWbS6J93ssOHSKL&noverify=0',
      bilibili: 'https://space.bilibili.com/393582043',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        gtag: {
          trackingID: "G-6QQ140H08N",
          anonymizeIP: true,
        },
        // debug: true,
      }),
    ],
  ],
  // themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'), {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/siyijiang/sixiang.world/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogSidebarCount: 10,
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: '四象',
          copyright: `Copyright © ${new Date().getFullYear()} 四象世界 Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      }
    ],
    [
      '@docusaurus/plugin-ideal-image', {
        disableInDev: false,
      }
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(0 47 167)',
          },
        ],
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: 'zh',
    locales: [ 'zh'],
    localeConfigs: {
      zh: {
        htmlLang: 'zh-Hans',
      },
    },
  },
}

module.exports = config
