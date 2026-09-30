import type { Config } from '@docusaurus/types';
import * as path from 'path';

const config: Config = {
    title: 'My Blog',
    url: 'https://g-b-f.github.io',
    baseUrl: '/blog/',
    onBrokenLinks: 'throw',
    // Docusaurus's head script defaults to 'light' and ignores defaultMode,
    // so force dark here (this runs after that script).
    head: [
        '<script>document.documentElement.setAttribute("data-theme","dark")</script>',
    ],
    // The SPA is dark-only, so force the blog to dark mode as well.
    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: 'My Blog',
            style: 'dark',
            items: [
                { to: '/blog/', label: 'Blog', position: 'left' },
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} g-b-f.github.io`,
        },
    },
    presets: [
        [
            'classic',
            {
                docs: false,
                blog: { routeBasePath: '/' },
                theme: {
                    // Share the SPA's stylesheet (src/index.css) for the bulk of
                    // the theme, plus a small blog-specific file for tweaks.
                    customCss: [
                        path.resolve(process.cwd(), '../src/index.css'),
                        path.join(__dirname, 'src/css/custom.css'),
                    ],
                },
            }
        ]
    ]
};

export default config;