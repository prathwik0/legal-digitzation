import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Amintelli',
            logo: {
                light: './src/assets/amintelli-logo.png',
                dark: './src/assets/amintelli-logo-dark.png',
                replacesTitle: true,
            },
            customCss: [
                './src/tailwind.css',
                './src/styles/katex.css',
                './src/styles/index.css',
            ],
            social: {
                rss: 'https://amintelli.com/',
                github: 'https://github.com/prathwik0/legal-digitization',
            },
            tableOfContents: {
                minHeadingLevel: 1,
                maxHeadingLevel: 4,
            },
            sidebar: [
                {
                    label: 'Home',
                    link: '/',
                },
                {
                    label: 'Digitization',
                    link: '/digitization',
                },
                {
                    label: 'Amintelli',
                    link: '/amintelli',
                },
                {
                    label: 'Examples',
                    autogenerate: {
                        directory: 'examples',
                    },
                },
            ],
        }),
        tailwind({
            // Disable the default base styles:
            applyBaseStyles: false,
        }),
    ],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },
});
