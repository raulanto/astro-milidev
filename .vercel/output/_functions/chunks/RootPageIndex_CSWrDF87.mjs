import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, s as spreadAttributes, e as renderSlot } from './astro/server_CHXx7Kpb.mjs';
import { $ as $$Layout, a as $$Container } from './Layout_FHsauJfk.mjs';

const $$Astro = createAstro("https://bartoszlenar.github.io");
const $$RootPageIndex = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RootPageIndex;
  const { title, searchable } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<aside${spreadAttributes(!searchable ? { "data-pagefind-ignore": true } : {})}> <div class="space-y-10"> <h1 class="animate text-3xl font-semibold text-black dark:text-white"> ${title} </h1> <div class="space-y-4"> ${renderSlot($$result3, $$slots["default"])} </div> </div> </aside> ` })} ` })}`;
}, "/Users/jonathan/Documents/GitHub/astro-milidev/src/components/RootPageIndex.astro", void 0);

export { $$RootPageIndex as $ };
