/* empty css                                  */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CHXx7Kpb.mjs';
import 'kleur/colors';
import { $ as $$ArrowCardButton } from '../chunks/ArrowCardButton_DWRJxItD.mjs';
import { $ as $$RootPageIndex } from '../chunks/RootPageIndex_CSWrDF87.mjs';
import { C as CONTACT, r as resolvePath } from '../chunks/utils_DDuO5gsQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://bartoszlenar.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const linkedInContact = CONTACT.find((contact) => contact.type === "LinkedIn");
  return renderTemplate`${renderComponent($$result, "RootPageIndex", $$RootPageIndex, { "title": "Hire me", "searchable": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="animate mb-4"> <p class="mb-1">The PDF resume:</p> <section> ${renderComponent($$result2, "ArrowCardButton", $$ArrowCardButton, { "href": resolvePath("/hire-me/milidev_resume.pdf", Astro2.url.pathname), "text": "Download PDF", "openInNewTab": true })} </section> </div> <div class="animate mb-4"> <p class="mb-1">The TXT resume:</p> <section> ${renderComponent($$result2, "ArrowCardButton", $$ArrowCardButton, { "href": resolvePath("/hire-me/milidev_resume.txt", Astro2.url.pathname), "text": "Download TXT", "openInNewTab": true })} </section> </div> ${linkedInContact && renderTemplate`<div class="animate mb-4"> <p class="mb-1">Or you can check my LinkedIn profile:</p> <section> ${renderComponent($$result2, "ArrowCardButton", $$ArrowCardButton, { "href": linkedInContact.href, "text": "Navigate to LinkedIn", "openInNewTab": true })} </section> </div>`}` })}`;
}, "/Users/jonathan/Documents/GitHub/astro-milidev/src/pages/hire-me/index.astro", void 0);

const $$file = "/Users/jonathan/Documents/GitHub/astro-milidev/src/pages/hire-me/index.astro";
const $$url = "/astro-milidev/hire-me";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
