/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CHXx7Kpb.mjs';
import 'kleur/colors';
import { $ as $$BackToPrevious } from '../../chunks/BackToPrevious_DVrsY1mf.mjs';
import { $ as $$Layout, a as $$Container } from '../../chunks/Layout_FHsauJfk.mjs';
import { $ as $$TableOfContents } from '../../chunks/TableOfContents_KPtef6Cc.mjs';
import { g as getFilteredCollectionEntries, r as resolvePath } from '../../chunks/utils_DDuO5gsQ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://bartoszlenar.github.io");
async function getStaticPaths() {
  const { entries } = await getFilteredCollectionEntries("talks");
  return entries.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const entry = Astro2.props;
  const { Content, headings } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title, "description": entry.data.description, "ogImage": entry.data.ogImage }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> ${renderComponent($$result3, "BackToPrevious", $$BackToPrevious, { "href": resolvePath("/talks", Astro2.url.pathname) }, { "default": ($$result4) => renderTemplate`All talks` })} </div>  ${headings?.length ? renderTemplate`${renderComponent($$result3, "TableOfContents", $$TableOfContents, { "headings": headings })}` : void 0}<article class="animate"> <hr> ${renderComponent($$result3, "Content", Content, {})} </article> ` })} ` })}`;
}, "/Users/jonathan/Documents/GitHub/astro-milidev/src/pages/talks/[...slug].astro", void 0);

const $$file = "/Users/jonathan/Documents/GitHub/astro-milidev/src/pages/talks/[...slug].astro";
const $$url = "/astro-milidev/talks/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
