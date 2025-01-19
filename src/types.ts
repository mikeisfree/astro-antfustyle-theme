/* SITE */
export type Url = `http://${string}` | `https://${string}`
type Path = `/${string}`

export interface Site {
  /**
   * Specifies the final deployed URL, which must start with `http://` or `https://`. It will be passed to the
   * {@link https://docs.astro.build/en/reference/configuration-reference/#site `site`} config in Astro,
   * used for generating canonical URLs, `rss.xml` and other features.
   */
  website: Url

  /**
   * Specifies the base path for your site, which must start with `/`. It wiil be passed to the
   * {@link https://docs.astro.build/en/reference/configuration-reference/#base `base`} config in Astro,
   * used when deploying to a subdirectory.
   *
   * @example
   * `/my-site/` (for a site deployed to `https://example.com/my-site/`)
   */
  base: Path

  /**
   * Specifies the site name for formatting the `title` in the frontmatter as `<pageTitle> - <siteTitle>`.
   * Used for the title and meta tags, found in `src/components/base/Head.astro`.
   */
  title: string

  /**
   * Specifies the default content for meta tags, found in `src/components/base/Head.astro`.
   */
  description: string

  /**
   * Specifies your name for meta tags, found in `src/components/base/Head.astro`.
   */
  author: string

  /**
   * Specifies the primary language of the document content, found in `src/layouts/BaseLayout.astro`.
   *
   * @description
   * It must be a single 'language tag' in the format defined in
   * {@link https://datatracker.ietf.org/doc/html/rfc5646#appendix-A RFC 5646: Tags for Identifying Languages} (also known as BCP 47).
   *
   * @example
   * 'zh-Hant' (Chinese written using the Traditional Chinese script)
   * 'fr' (French)
   */
  lang: string

  /**
   * Specifies the page content's language and region for better content display on social platforms,
   * found in `src/components/base/Head.astro`.
   *
   * @description
   * It must be in `language_TERRITORY` format, which you can find in
   * {@link https://www.unicode.org/cldr/charts/44/supplemental/language_territory_information.html Language-Territory Information}.
   *
   * @example
   * 'zh_CN'
   * 'fr_FR'
   */
  ogLocale: string
}

/* UI */
export type Icon = `i-${string}-${string}` | `i-${string}:${string}`
export type RepoWithOwner = `${string}/${string}`

interface BaseNavItem {
  /**
   * Specifies the navigation path. It must start with `/`.
   *
   * @example
   * '/blog'、'/blog/'
   */
  path: Path

  /**
   * Sets the content displayed on hover for accessibility.
   */
  title: string
}

interface TextNavItem extends BaseNavItem {
  /**
   * Defines how the navigation item is displayed responsively. Allowed values:
   *  - 'alwaysText': Always display text, regardless of screen size.
   *  - 'alwaysIcon': Always display as a chart, regardless of screen size.
   *  - 'textHiddenOnMobile': Display text when viewport is ≥768px, hide text when <768px.
   *  - 'iconHiddenOnMobile': Display icon when viewport is ≥768px, hide icon when <768px.
   *  - 'textToIconOnMobile': Display text when viewport is ≥768px, switch to icon when <768px.
   *  - 'iconToTextOnMobile': Display icon when viewport is ≥768px, switch to text when <768px.
   *
   * @remark
   * The `text` property is required for 'alwaysText', 'textHiddenOnMobile', 'iconToTextOnMobile' or 'textToIconOnMobile'.
   * The `icon` property is required for 'alwaysIcon', 'iconHiddenOnMobile', 'iconToTextOnMobile' or 'textToIconOnMobile'.
   */
  displayMode: 'alwaysText' | 'textHiddenOnMobile'

  /**
   * Sets the text displayed for the navigation item.
   * Required for `displayMode` values 'alwaysText', 'textHiddenOnMobile', 'iconToTextOnMobile' or 'textToIconOnMobile'.
   */
  text: string
}

export interface IconNavItem extends BaseNavItem {
  /**
   * Defines how the navigation item is displayed responsively. Allowed values:
   *  - 'alwaysText': Always display text, regardless of screen size.
   *  - 'alwaysIcon': Always display as a chart, regardless of screen size.
   *  - 'textHiddenOnMobile': Display text when viewport is ≥768px, hide text when <768px.
   *  - 'iconHiddenOnMobile': Display icon when viewport is ≥768px, hide icon when <768px.
   *  - 'textToIconOnMobile': Display text when viewport is ≥768px, switch to icon when <768px.
   *  - 'iconToTextOnMobile': Display icon when viewport is ≥768px, switch to text when <768px.
   *
   * @remark
   * The `text` property is required for 'alwaysText', 'textHiddenOnMobile', 'iconToTextOnMobile' or 'textToIconOnMobile'.
   * The `icon` property is required for 'alwaysIcon', 'iconHiddenOnMobile', 'iconToTextOnMobile' or 'textToIconOnMobile'.
   */
  displayMode: 'alwaysIcon' | 'iconHiddenOnMobile'

  /**
   * Sets the icon displayed for the navigation item.
   * Required for `displayMode` values 'alwaysIcon', 'iconHiddenOnMobile', 'iconToTextOnMobile' or 'textToIconOnMobile'.
   *
   * @description
   * Icon must be in the format `i-<collection>-<icon>` or `i-<collection>:<icon>`
   * as per {@link https://unocss.dev/presets/icons UnoCSS} specs.
   *
   * @example
   * "i-ri:twitter-x-fill", "i-ri-twitter-x-fill", "i-mdi:github", "i-mdi-github"
   *
   * @see {@link https://icon-sets.iconify.design/ Check all available icons}
   */
  icon: Icon
}

export interface ResponsiveNavItem extends BaseNavItem {
  /**
   * Defines how the navigation item is displayed responsively. Allowed values:
   *  - 'alwaysText': Always display text, regardless of screen size.
   *  - 'alwaysIcon': Always display as a chart, regardless of screen size.
   *  - 'textHiddenOnMobile': Display text when viewport is ≥768px, hide text when <768px.
   *  - 'iconHiddenOnMobile': Display icon when viewport is ≥768px, hide icon when <768px.
   *  - 'textToIconOnMobile': Display text when viewport is ≥768px, switch to icon when <768px.
   *  - 'iconToTextOnMobile': Display icon when viewport is ≥768px, switch to text when <768px.
   *
   * @remark
   * The `text` property is required for 'alwaysText', 'textHiddenOnMobile', 'iconToTextOnMobile' or 'textToIconOnMobile'.
   * The `icon` property is required for 'alwaysIcon', 'iconHiddenOnMobile', 'iconToTextOnMobile' or 'textToIconOnMobile'.
   */
  displayMode: 'textToIconOnMobile' | 'iconToTextOnMobile'

  /**
   * Sets the text displayed for the navigation item.
   * Required for `displayMode` values 'alwaysText', 'textHiddenOnMobile', 'iconToTextOnMobile' or 'textToIconOnMobile'.
   */
  text: string

  /**
   * Sets the icon displayed for the navigation item.
   * Required for `displayMode` values 'alwaysIcon', 'iconHiddenOnMobile', 'iconToTextOnMobile' or 'textToIconOnMobile'.
   *
   * @description
   * Icon must be in the format `i-<collection>-<icon>` or `i-<collection>:<icon>`
   * as per {@link https://unocss.dev/presets/icons UnoCSS} specs.
   *
   * @example
   * "i-ri:twitter-x-fill", "i-ri-twitter-x-fill", "i-mdi:github", "i-mdi-github"
   *
   * @see {@link https://icon-sets.iconify.design/ Check all available icons}
   */
  icon: Icon
}

export type InternalNav = TextNavItem | IconNavItem | ResponsiveNavItem

interface BaseSocialItem {
  /**
   * Set the URL to the social platform.
   */
  link: Url

  /**
   * Sets the content displayed on hover for accessibility.
   *
   * @description
   * You can use template literals to reference other configuration items.
   *
   * @example
   * `Follow ${SITE.author} on Twitter`
   */
  title: string
}

interface TextSocialItem extends BaseSocialItem {
  /**
   * Defines how the social item is displayed responsively. Allowed values:
   *  - 'alwaysText': Always display text, regardless of screen size.
   *  - 'alwaysIcon': Always display as a chart, regardless of screen size.
   *  - 'textHiddenOnMobile': Display text when viewport is ≥768px, hide text when <768px.
   *  - 'iconHiddenOnMobile': Display icon when viewport is ≥768px, hide icon when <768px.
   *  - 'textToIconOnMobile': Display text when viewport is ≥768px, switch to icon when <768px.
   *  - 'iconToTextOnMobile': Display icon when viewport is ≥768px, switch to text when <768px.
   *
   * @remark
   * The `text` property is required for 'alwaysText', 'textHiddenOnMobile', 'iconToTextOnMobile' or 'textToIconOnMobile'.
   * The `icon` property is required for 'alwaysIcon', 'iconHiddenOnMobile', 'iconToTextOnMobile' or 'textToIconOnMobile'.
   */
  displayMode: 'alwaysText' | 'textHiddenOnMobile'

  /**
   * Sets the text displayed for the social item.
   * Required for `displayMode` values 'alwaysText', 'textHiddenOnMobile', 'iconToTextOnMobile' or 'textToIconOnMobile'.
   */
  text: string
}

export interface IconSocialItem extends BaseSocialItem {
  /**
   * Defines how the social item is displayed responsively. Allowed values:
   *  - 'alwaysText': Always display text, regardless of screen size.
   *  - 'alwaysIcon': Always display as a chart, regardless of screen size.
   *  - 'textHiddenOnMobile': Display text when viewport is ≥768px, hide text when <768px.
   *  - 'iconHiddenOnMobile': Display icon when viewport is ≥768px, hide icon when <768px.
   *  - 'textToIconOnMobile': Display text when viewport is ≥768px, switch to icon when <768px.
   *  - 'iconToTextOnMobile': Display icon when viewport is ≥768px, switch to text when <768px.
   *
   * @remark
   * The `text` property is required for 'alwaysText', 'textHiddenOnMobile', 'iconToTextOnMobile' or 'textToIconOnMobile'.
   * The `icon` property is required for 'alwaysIcon', 'iconHiddenOnMobile', 'iconToTextOnMobile' or 'textToIconOnMobile'.
   */
  displayMode: 'alwaysIcon' | 'iconHiddenOnMobile'

  /**
   * Sets the icon displayed the social platform.
   * Required for `displayMode` values 'alwaysIcon', 'iconHiddenOnMobile', 'iconToTextOnMobile' or 'textToIconOnMobile'.
   *
   * @description
   * Icon must be in the format `i-<collection>-<icon>` or `i-<collection>:<icon>`
   * as per {@link https://unocss.dev/presets/icons UnoCSS} specs.
   *
   * @example
   * "i-ri:twitter-x-fill", "i-ri-twitter-x-fill", "i-mdi:github", "i-mdi-github"
   *
   * @see {@link https://icon-sets.iconify.design/ Check all available icons}
   */
  icon: Icon
}

export interface ResponsiveSocialItem extends BaseSocialItem {
  /**
   * Defines how the social item is displayed responsively. Allowed values:
   *  - 'alwaysText': Always display text, regardless of screen size.
   *  - 'alwaysIcon': Always display as a chart, regardless of screen size.
   *  - 'textHiddenOnMobile': Display text when viewport is ≥768px, hide text when <768px.
   *  - 'iconHiddenOnMobile': Display icon when viewport is ≥768px, hide icon when <768px.
   *  - 'textToIconOnMobile': Display text when viewport is ≥768px, switch to icon when <768px.
   *  - 'iconToTextOnMobile': Display icon when viewport is ≥768px, switch to text when <768px.
   *
   * @remark
   * The `text` property is required for 'alwaysText', 'textHiddenOnMobile', 'iconToTextOnMobile' or 'textToIconOnMobile'.
   * The `icon` property is required for 'alwaysIcon', 'iconHiddenOnMobile', 'iconToTextOnMobile' or 'textToIconOnMobile'.
   */
  displayMode: 'textToIconOnMobile' | 'iconToTextOnMobile'

  /**
   * Sets the text displayed for the social item.
   * Required for `displayMode` values 'alwaysText', 'textHiddenOnMobile', 'iconToTextOnMobile' or 'textToIconOnMobile'.
   */
  text: string

  /**
   * Sets the icon displayed the social platform.
   * Required for `displayMode` values 'alwaysIcon', 'iconHiddenOnMobile', 'iconToTextOnMobile' or 'textToIconOnMobile'.
   *
   * @description
   * Icon must be in the format `i-<collection>-<icon>` or `i-<collection>:<icon>`
   * as per {@link https://unocss.dev/presets/icons UnoCSS} specs.
   *
   * @example
   * "i-ri:twitter-x-fill", "i-ri-twitter-x-fill", "i-mdi:github", "i-mdi-github"
   *
   * @see {@link https://icon-sets.iconify.design/ Check all available icons}
   */
  icon: Icon
}

export type SocialLink = TextSocialItem | IconSocialItem | ResponsiveSocialItem

type NavBarComponentType =
  | 'internalNavs'
  | 'socialLinks'
  | 'searchButton'
  | 'themeButton'
  | 'rssLink'

export interface NavBarLayout {
  /**
   * Defines which components ('internalNavs', 'socialLinks', 'searchButton',
   * 'themeButton', 'rssLink') are positioned on the left side of the navigation bar.
   *
   * @remark
   * If you want all components to appear on the right side, leave this array empty.
   * Components in `left` and `right` arrays must not contain duplicates.
   */
  left: NavBarComponentType[]

  /**
   * Defines which components ('internalNavs', 'socialLinks', 'searchButton',
   * 'themeButton', 'rssLink') are positioned on the right side of the navigation bar.
   *
   * @remark
   * If you want all components to appear on the left side, leave this array empty.
   * Components in `left` and `right` arrays must not contain duplicates.
   */
  right: NavBarComponentType[]

  /**
   * Controls whether the 'internalNavs' and 'socialLinks' section are combined into
   * a single navigation menu on mobile, managed through a hamburger icon.
   */
  mergeOnMobile: boolean
}

interface Tab {
  /**
   * Sets the navigation path associated with the tab, which must start with `/`.
   *
   * @example
   * '/blog'、'/blog/'
   */
  path: Path

  /**
   * Sets the content displayed on hover for accessibility.
   */
  title: string
}

export type Tabs = [Tab, Tab, ...Tab[]]

interface GroupView {
  /**
   * Sets the maximum number of columns displayed in the group view.
   * Used in `src/components/views/GroupItem.astro`.
   */
  maxGroupColumns: 2 | 3

  /**
   * Determines whether group item icons display in color when hovered over.
   * Used in `src/components/views/GroupView.astro` and `src/components/base/Categorizer.astro`.
   *
   * @description
   * If `true`, the icon for the group item will display in its original colors on hover.
   */
  showGroupItemColorOnHover: boolean
}

export interface GitHubView {
  /**
   * Defines monorepo repositories using `<owner>/<repo>` format.
   * For monorepos, the tag name is used as the primary text for `/releases` page.
   */
  monorepos: RepoWithOwner[]

  /**
   * Configures main logos for repositories or packages (for monorepos).
   * Defaults to the owner's avatar if no custom logo is set.
   *
   * @remark
   * Matching supports regex or `<owner>/<repo>` format, prioritized by order.
   */
  mainLogoOverrides: [RepoWithOwner | RegExp, Url | Icon][]

  /**
   * Configures auxiliary logos for rrepositories or packages (for monorepos).
   * No logo is shown if unmatched.
   *
   * @remark
   * Matching supports regex or `<owner>/<repo>` format, prioritized by order.
   */
  subLogoMatches: [RepoWithOwner | RegExp, Url | Icon][]
}

interface ExternalLink {
  /**
   * Controls whether external links are opened in a new tab.
   *
   * Used in `plugins/index.ts` and `src/components/base/Link.astro`.
   */
  newTab: boolean

  /**
   * Specifies the cursor type for external links.
   * Accepts {@link https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#keyword standard keywords},
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#url custom URLs},
   * or an empty string to default to `'pointer'` for matching internal links.
   *
   * To apply it to other external links in the site's UI,
   * set `enableNewTabWarning` to `true` in `src/components/base/Link.astro`
   * or locally pass `enableNewTabWarning: true` to the Link component as needed.
   *
   * Used in `plugins/index.ts`, `src/layouts/BaseLayout.astro` and `src/components/base/Link.astro`.
   *
   * @example
   * 'url("/images/new-tab.svg") 10 10, pointer'
   */
  cursorType: string

  /**
   * Controls whether to add an indicator to external links when `newTab` is `true`,
   * showing they open in a new tab for accessibility.
   * Skip this if `cursorType` already uses an image for the same purpose.
   *
   * To apply it to other external links in the site's UI,
   * set `enableNewTabWarning` to `true` in `src/components/base/Link.astro`
   * or locally pass `enableNewTabWarning: true` to the Link component as needed.
   *
   * Used in `plugins/index.ts` and `src/components/base/Link.astro`.
   */
  showNewTabIcon: boolean
}

export interface Ui {
  /**
   * Configures internal navigation links, used in `src/components/base/NavBar.astro`.
   *
   * @remark
   * The configuration order matches the display order.
   */
  internalNavs: InternalNav[]

  /**
   * Configures external social links, used in `src/components/base/NavBar.astro`.
   *
   * @remark
   * The configuration order matches the display order.
   */
  socialLinks: SocialLink[]

  /**
   * Controls the layout of the navigation bar, used in `src/components/base/NavBar.astro`.
   */
  navBarLayout: NavBarLayout

  /**
   * Enables and configures for tabs within a tabbed layout, used in `src/layouts/TabbedLayout.astro`.
   *
   * @description
   * If your website does not use the `TabbedLayout`, you can set it to `false`.
   * Otherwise, required before using this layout.
   */
  tabbedLayoutTabs: false | Tabs

  /**
   * Configures the `/projects` UIs.
   */
  groupView: GroupView

  /**
   * Configures the `/releases` and `prs` UIs, used in `src/components/views/GithubView.astro`.
   */
  githubView: GitHubView

  /**
   * Configures external links' behavior and appearance.
   */
  externalLink: ExternalLink
}

/* FEATURES */
export type BgType = 'plum' | 'dot' | 'rose' | 'particle'
type Mentioned = `@${string}` | `@${string}@${string}` | ''
type FeatureConfig<T> = false | [boolean, T]
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export interface ShareConfig {
  /**
   * Configures Twitter sharing:
   *  - Set to `false` or `[false, '@userName']` to disable.
   *  - Set to `[true, '@userName']` to enable and mention you.
   *
   * If an empty string is used, '@userName' will not appear in the pre-filled sharing text.
   */
  twitter: FeatureConfig<Mentioned>

  /**
   * Configures Bluesky sharing:
   *  - Set to `false` or `[false, '@handle']` to disable.
   *  - Set to `[true, '@handle']` to enable and mention you.
   *
   * If an empty string is used, '@handle' will not appear in the pre-filled sharing text.
   */
  bluesky: FeatureConfig<Mentioned>

  /**
   * Configures Mastodon sharing:
   *  - Set to `false` or `[false, '@userName@serverName']` to disable.
   *  - Set to `[true, '@userName@serverName']` to enable and mention you.
   *
   * If an empty string is used, '@userName@serverName' will not appear in the pre-filled sharing text.
   */
  mastodon: FeatureConfig<Mentioned>

  /**
   * Controls whether to include Facebook for sharing.
   */
  facebook: boolean

  /**
   * Controls whether to include Pinterest for sharing.
   */
  pinterest: boolean

  /**
   * Controls whether to include Reddit for sharing.
   */
  reddit: boolean

  /**
   * Controls whether to include Telegram for sharing.
   */
  telegram: boolean

  /**
   * Controls whether to include WhatsApp for sharing.
   */
  whatsapp: boolean

  /**
   * Controls whether to include Email for sharing.
   */
  email: boolean
}

interface TocConfig {
  /**
   * Sets the minimum heading level for TOC, constrained to a valid heading level (h1-h6).
   * Must be less than or equal to {@link maxHeadingLevel}.
   */
  minHeadingLevel: HeadingLevel

  /**
   * Sets the maximum heading level for TOC, constrained to a valid heading level (h1-h6).
   * Must be greater than or equal to {@link minHeadingLevel}.
   */
  maxHeadingLevel: HeadingLevel

  /**
   * Sets the position of TOC on the page (either on the left or right).
   */
  displayPosition: 'left' | 'right'

  /**
   * Controls whether the TOC is always visible or only appears when hovering.
   */
  displayMode: 'always' | 'hover'
}

interface OgImageConfig {
  /**
   * Defines your name or brand name that will be displayed on the OG image.
   * Displayed above the title to enhance recognition.
   */
  authorOrBrand: string

  /**
   * Sets the fallback title for OG images.
   * Used when the `title` in the frontmatter is missing or invalid.
   */
  fallbackTitle: string

  /**
   * Sets the fallback background for OG images.
   *
   * @description
   * By default, the background used for auto-generated OG images is based on the `bgType` set in frontmatter.
   * This value is only used for the fallback OG image (stored at `/public/og-images/og-image.png`)
   * and as the background when `bgType` is not specified.
   *
   * @note
   * A fallback OG image is the default image used when the specified or auto-generated OG image is missing.
   * You can delete the existing file to regenerate a new one.
   */
  fallbackBgType: BgType
}

interface slideEnterAnimConfig {
  /**
   * Adjusts the animation speed (ms). Smaller values speed up; larger values slow down.
   */
  enterStep: number
}

export interface Features {
  /**
   * Globally controls the sharing feature, which allows visitors to share content to social platforms.
   *
   * @description
   * When enabled, sharing links are displayed at the bottom of all posts.
   * To disable for a specific post, set the `share` field in the frontmatter to `false`.
   */
  share: FeatureConfig<ShareConfig>

  /**
   * Globally controls the TOC feature and related options.
   *
   * @description
   * To disable for a specific post or page, set the `toc` field in the frontmatter to `false`.
   * The TOC is automatically hidden when the viewport width is less than 1024px.
   */
  toc: FeatureConfig<TocConfig>

  /**
   * Globally controls OG image auto-generation and related options.
   * If disabled, deleting the fallback /public/og-images/og-image.png won’t regenerate it.
   *
   * @description
   * Automatically generate OG images for Markdown/MDX files when the `ogImage` field
   * is not present in the frontmatter or is set to `true`.
   * To disable for a specific post, set the `ogImage` field in the frontmatter to `false`.
   * Generated images are stored in `/public/og-images`.
   */
  ogImage: FeatureConfig<OgImageConfig>

  /**
   * Controls whether to enable slide enter animation on each page.
   */
  slideEnterAnim: FeatureConfig<slideEnterAnimConfig>
}
