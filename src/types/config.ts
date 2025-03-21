import type {AUTO_MODE, DARK_MODE, LIGHT_MODE} from '@constants/constants'
import type I18nKey from '@i18n/i18nKey'

export type SiteConfig = {
    title: string
    subtitle: string

    lang: string

    themeColor: {
        hue: number
    }
    banner: {
        enable: boolean
        src: string
        position?: 'top' | 'center' | 'bottom'
        credit: {
            enable: boolean
            text: string
            url?: string
        }
    }
    toc: {
        enable: boolean
        depth: 1 | 2 | 3
    }

    favicon: Favicon[]
}

export type Favicon = {
    src: string
    theme?: 'light' | 'dark'
    sizes?: string
}
export type NavBarLocalLink = {
    i18nKey: I18nKey
    url: string
}
export type NavBarLink = {
    name: string
    url: string
    external?: boolean
}

export type NavBarConfig = {
    links: (NavBarLink | NavBarLocalLink)[]
}

export type ProfileConfig = {
    enable: boolean
    avatar?: string
    name: string
    bio?: string
    links: {
        name: string
        url: string
        icon: string
    }[]
}

export type LicenseConfig = {
    enable: boolean
    name: string
    url: string
}

export type LIGHT_DARK_MODE =
    | typeof LIGHT_MODE
    | typeof DARK_MODE
    | typeof AUTO_MODE

export type BlogPostData = {
    body: string
    title: string
    published: Date
    description: string
    tags: string[]
    draft?: boolean
    pinned?: boolean
    image?: string
    category?: string
    prevTitle?: string
    prevSlug?: string
    nextTitle?: string
    nextSlug?: string
}

export type CategoriesConfig = {
    enable: boolean,
    customLogoEnable: boolean,
    logoMap: Map<string, LogoConfig>
}

export type LogoConfig = {
    icon: string
    opacity?: number
}

export type FooterConfig = {
    name: string
    enableRSS: boolean
    enableSitemap: boolean
}
export type PostCardConfig={
    customLogoEnable: boolean
}
export type TagConfig = {
    enable: boolean
}