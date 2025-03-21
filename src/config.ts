import type {
  CategoriesConfig,
  FooterConfig,
  LicenseConfig,
  LogoConfig,
  NavBarConfig,
  NavBarLocalLink,
  PostCardConfig,
  ProfileConfig,
  SiteConfig, TagConfig,
} from './types/config'

import I18nKey from '@i18n/i18nKey'

export const siteConfig: SiteConfig = {
  title: 'Frischluft',
  subtitle: 'Demo Site',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 235,     // 设置您想要的色调值（0-360）
  },
  banner: {
    enable: true,
    src: 'assets/images/demo-banner.jpeg',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
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
// Local link, which has a i18nKey and a url
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
    // External link, which has a non translated name, an url and an icon
    {
      name: 'GitHub',
      url: 'https://github.com/saicaca/fuwari',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
  ],
}

export const profileConfig: ProfileConfig = {
  enable: false,
  avatar: 'assets/images/demo-avatar.png',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'frischluft',
  bio: '-',
  links: [
    {
      name: 'X(Twitter)',
      icon: 'fa6-brands:x-twitter',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://x.com',
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
  customLogoEnable: true,
  logoMap: new Map<string, LogoConfig>([
    ['Obsidian', {icon: 'logos:obsidian-icon'}],
    ['Vue', {icon: 'vscode-icons:file-type-vue'}],
    ['Java', {icon: 'logos:java'}],
    ['Minecraft', {icon: 'vscode-icons:file-type-minecraft'}],
    ['Default', {icon: 'material-symbols:book-2-rounded',opacity:0.7}],
    ['DefaultTiny', {icon: 'material-symbols:book-2-outline-rounded'}],

  ]),
}
export const postCardConfig:PostCardConfig={
  customLogoEnable:true     //Otherwise the default icon will be displayed
}
export const tagConfig:TagConfig={
  enable: true
}