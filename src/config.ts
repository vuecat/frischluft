import type {
  CategoriesConfig,
  FooterConfig,
  LicenseConfig,
  LogoConfig,
  NavBarConfig,
  NavBarLocalLink,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

import I18nKey from '@i18n/i18nKey'
import { i18n } from '@i18n/translation'

export const siteConfig: SiteConfig = {
  title: 'vuecat',
  subtitle: 'Demo Site',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 235,     // 设置您想要的色调值（0-360）
  },
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false,         // Display the credit text of the banner image
      text: '',              // Credit text to be displayed
      url: ''                // (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: {
    enable: true,           // Display the table of contents on the right side of the post
    depth: 2                // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
} as const;
const navBarLocalLinks: NavBarLocalLink[] = [
  {
    i18nKey: I18nKey.home,
    url: '/',
  },
  {
    i18nKey: I18nKey.archive,
    url: '/archive/',
  }, 
  {
    i18nKey: I18nKey.about,
    url: '/about/',
  },
]
export const navBarConfig: NavBarConfig = {
  links: [
    ...navBarLocalLinks,
    {
      name: 'GitHub',
      url: 'https://github.com/saicaca/fuwari',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
  ],
}

export const profileConfig: ProfileConfig = {
  profileCardEnable: false,
  avatar: 'assets/images/demo-avatar.png',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Codeview',
  bio: '-',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://twitter.com',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://store.steampowered.com',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/saicaca/fuwari',
    },
  ],
}

export const footerConfig: FooterConfig = {
  name: 'Codeview',
  enableRSS: false,
  enableSitemap: false,
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}

export const categoriesConfig: CategoriesConfig = {
  enable: true,
  postcardCategoriesEnable: true,    //Otherwise the default icon will be displayed
  logoMap: new Map<string, LogoConfig>([
    ['Obsidian', {icon: 'logos:obsidian-icon'}],
    ['Vue', {icon: 'vscode-icons:file-type-vue'}],
    ['Java', {icon: 'logos:java'}],
    ['Default', {icon: 'material-symbols:book-2-rounded',opacity:0.7}],
    ['DefaultTiny', {icon: 'material-symbols:book-2-outline-rounded'}],
  ]),
}