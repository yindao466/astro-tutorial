import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'Astro Learner | Blog',
        description: 'My journey learning Astro',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
        site: 'https://didactic-engine-5gxxj46w4wpjc76vq-4321.app.github.dev'
    });
}