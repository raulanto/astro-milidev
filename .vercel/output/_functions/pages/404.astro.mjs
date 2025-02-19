/* empty css                                  */
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CHXx7Kpb.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Container } from '../chunks/Layout_FHsauJfk.mjs';
import { $ as $$BackToPrevious } from '../chunks/BackToPrevious_DVrsY1mf.mjs';
import { r as resolvePath } from '../chunks/utils_DDuO5gsQ.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-16 grid place-items-center gap-3"> <h4 class="animate text-2xl font-semibold text-black dark:text-white">
404: Page not found
</h4> <span class="animate"> ${renderComponent($$result3, "BackToPrevious", $$BackToPrevious, { "href": resolvePath("/") }, { "default": ($$result4) => renderTemplate`Go to home page` })} </span> </div> ` })} ` })}`;
}, "/Users/jonathan/Documents/GitHub/astro-milidev/src/pages/404.astro", void 0);

const $$file = "/Users/jonathan/Documents/GitHub/astro-milidev/src/pages/404.astro";
const $$url = "/astro-milidev/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
