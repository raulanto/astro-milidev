import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DUKm6o2F.mjs';
import { manifest } from './manifest_DK_Y7w6J.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/blog/_---page_.astro.mjs');
const _page3 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page4 = () => import('./pages/feed.xml.astro.mjs');
const _page5 = () => import('./pages/hire-me.astro.mjs');
const _page6 = () => import('./pages/projects/_---page_.astro.mjs');
const _page7 = () => import('./pages/projects/_---slug_.astro.mjs');
const _page8 = () => import('./pages/tags/_---slug_/_---page_.astro.mjs');
const _page9 = () => import('./pages/tags.astro.mjs');
const _page10 = () => import('./pages/talks/_---page_.astro.mjs');
const _page11 = () => import('./pages/talks/_---slug_.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog/[...page].astro", _page2],
    ["src/pages/blog/[...slug].astro", _page3],
    ["src/pages/feed.xml.js", _page4],
    ["src/pages/hire-me/index.astro", _page5],
    ["src/pages/projects/[...page].astro", _page6],
    ["src/pages/projects/[...slug].astro", _page7],
    ["src/pages/tags/[...slug]/[...page].astro", _page8],
    ["src/pages/tags/index.astro", _page9],
    ["src/pages/talks/[...page].astro", _page10],
    ["src/pages/talks/[...slug].astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a449f916-108a-42c2-9639-0a1773f1a3ec",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
