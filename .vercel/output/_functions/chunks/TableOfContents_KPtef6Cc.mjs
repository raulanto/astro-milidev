import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from './astro/server_CHXx7Kpb.mjs';
import 'kleur/colors';
import { b as $$TextLink } from './Layout_FHsauJfk.mjs';
/* empty css                          */

const $$Astro$1 = createAstro("https://bartoszlenar.github.io");
const $$TableOfContentsHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TableOfContentsHeading;
  const { heading } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="list-inside list-disc px-6 py-1.5 text-sm"> ${renderComponent($$result, "TextLink", $$TextLink, { "href": "#" + heading.slug, "underline": true }, { "default": ($$result2) => renderTemplate`${heading.text}` })} ${heading.subheadings.length > 0 && renderTemplate`<ul class="translate-x-3"> ${heading.subheadings.map((subheading) => renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "heading": subheading })}`)} </ul>`} </li>`;
}, "/Users/jonathan/Documents/GitHub/astro-milidev/src/components/TableOfContentsHeading.astro", void 0);

const $$Astro = createAstro("https://bartoszlenar.github.io");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { headings } = Astro2.props;
  const toc = buildToc(headings);
  function buildToc(headings2) {
    const toc2 = [];
    const parentHeadings = /* @__PURE__ */ new Map();
    headings2.forEach((h) => {
      const heading = { ...h, subheadings: [] };
      parentHeadings.set(heading.depth, heading);
      if (heading.depth === 2) {
        toc2.push(heading);
      } else {
        parentHeadings.get(heading.depth - 1).subheadings.push(heading);
      }
    });
    return toc2;
  }
  return renderTemplate`${maybeRenderHead()}<details open class="animate rounded-lg border border-black/15 dark:border-white/20" data-astro-cid-xvrfupwn> <summary data-astro-cid-xvrfupwn>Table of Contents</summary> <nav class="" data-astro-cid-xvrfupwn> <ul class="py-3" data-astro-cid-xvrfupwn> ${toc.map((heading) => renderTemplate`${renderComponent($$result, "TableOfContentsHeading", $$TableOfContentsHeading, { "heading": heading, "data-astro-cid-xvrfupwn": true })}`)} </ul> </nav> </details> `;
}, "/Users/jonathan/Documents/GitHub/astro-milidev/src/components/TableOfContents.astro", void 0);

export { $$TableOfContents as $ };
