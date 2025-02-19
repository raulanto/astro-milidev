/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CHXx7Kpb.mjs';
import 'kleur/colors';
import { g as getFilteredCollectionEntries, B as BLOG } from '../../chunks/utils_DDuO5gsQ.mjs';
import { $ as $$BlogCardButton } from '../../chunks/BlogCardButton_BmuDZ3Sx.mjs';
import { $ as $$RootPageIndex } from '../../chunks/RootPageIndex_CSWrDF87.mjs';
import { $ as $$PageNavigation } from '../../chunks/PageNavigation_oiGnx4C6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://bartoszlenar.github.io");
async function getStaticPaths({ paginate }) {
  const { entries } = await getFilteredCollectionEntries("blog");
  const posts = entries.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
  return paginate(posts, { pageSize: BLOG.pageSize });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const entries = page.data.map((pageEntry) => ({
    ...pageEntry.props
  }));
  return renderTemplate`${renderComponent($$result, "RootPageIndex", $$RootPageIndex, { "title": "Blog" }, { "default": ($$result2) => renderTemplate`${renderTemplate`${maybeRenderHead()}<ul class="animate not-prose mb-12 flex flex-col gap-4"> ${entries.map((entry) => renderTemplate`<li> ${renderComponent($$result2, "BlogCardButton", $$BlogCardButton, { "entry": entry })} </li>`)} </ul>`}${renderComponent($$result2, "PageNavigation", $$PageNavigation, { "page": page })} ` })}`;
}, "/Users/jonathan/Documents/GitHub/astro-milidev/src/pages/blog/[...page].astro", void 0);

const $$file = "/Users/jonathan/Documents/GitHub/astro-milidev/src/pages/blog/[...page].astro";
const $$url = "/astro-milidev/blog/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
