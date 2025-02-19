/* empty css                                  */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CHXx7Kpb.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Container, b as $$TextLink } from '../chunks/Layout_FHsauJfk.mjs';
import { g as getFilteredCollectionEntries, H as HOME, G as GLOBAL, r as resolvePath } from '../chunks/utils_DDuO5gsQ.mjs';
import { $ as $$BlogCardButton } from '../chunks/BlogCardButton_BmuDZ3Sx.mjs';
import { $ as $$ProjectCardButton } from '../chunks/ProjectCardButton_DUCbXxUJ.mjs';
import { $ as $$Bio, a as $$Contact } from '../chunks/Contact_Cx7Zycs3.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://bartoszlenar.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  async function getCollectionEntries(collectionName, maxItems) {
    const { entries } = await getFilteredCollectionEntries(collectionName);
    return entries.slice(0, maxItems);
  }
  const blog = await getCollectionEntries("blog", HOME.blogEntries);
  const projects = await getCollectionEntries(
    "projects",
    HOME.projectEntries
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<aside data-pagefind-ignore> <div class="animate mb-8 flex items-center justify-center"> <img${addAttribute(resolvePath(GLOBAL.authorPhotoSrc, Astro2.url.pathname), "src")}${addAttribute(GLOBAL.author, "alt")} class="h-48 w-48 rounded-full"> </div> <h1 class="animate text-3xl font-semibold text-black dark:text-white">
¡Hola!, Mi Nombre es ${GLOBAL.author} </h1> <div class="space-y-16"> <section> <article class="animate space-y-4"> ${renderComponent($$result3, "Bio", $$Bio, {})} <h2 class="font-semibold text-black dark:text-white">
Contacto:
</h2> ${renderComponent($$result3, "Contact", $$Contact, {})} </article> </section> ${blog.length > 0 && renderTemplate`<section class="animate space-y-6"> <div class="flex flex-wrap items-center justify-between gap-y-2"> <h2 class="font-semibold text-black dark:text-white">
Publicaciones Recientes
</h2> ${renderComponent($$result3, "TextLink", $$TextLink, { "href": "blog" }, { "default": ($$result4) => renderTemplate`Todas las Publicaciones` })} </div> <ul class="not-prose flex flex-col gap-4"> ${blog.map((post) => renderTemplate`<li> ${renderComponent($$result3, "BlogCardButton", $$BlogCardButton, { "entry": post })} </li>`)} </ul> </section>`} ${projects.length > 0 && renderTemplate`<section class="animate space-y-6"> <div class="flex flex-wrap items-center justify-between gap-y-2"> <h2 class="font-semibold text-black dark:text-white">
Proyectos
</h2> ${renderComponent($$result3, "TextLink", $$TextLink, { "href": "projects" }, { "default": ($$result4) => renderTemplate`Todos los Proyectos` })} </div> <ul class="not-prose flex flex-col gap-4"> ${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "ProjectCardButton", $$ProjectCardButton, { "entry": project })} </li>`)} </ul> </section>`} </div> </aside> ` })} ` })}`;
}, "/Users/jonathan/Documents/GitHub/astro-milidev/src/pages/index.astro", void 0);

const $$file = "/Users/jonathan/Documents/GitHub/astro-milidev/src/pages/index.astro";
const $$url = "/astro-milidev";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
