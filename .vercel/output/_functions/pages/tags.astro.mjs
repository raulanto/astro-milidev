/* empty css                                  */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from '../chunks/astro/server_CHXx7Kpb.mjs';
import 'kleur/colors';
import { r as resolvePath, a as getAllEntriesWithTags } from '../chunks/utils_DDuO5gsQ.mjs';
import { $ as $$RootPageIndex } from '../chunks/RootPageIndex_CSWrDF87.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://bartoszlenar.github.io");
const $$Hash = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hash;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(className, "class")} viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"> <line x1="8" y1="3" x2="8" y2="21"></line> <line x1="16" y1="3" x2="16" y2="21"></line> <line x1="3" y1="9" x2="21" y2="9"></line> <line x1="3" y1="15" x2="21" y2="15"></line> </svg>`;
}, "/Users/jonathan/Documents/GitHub/astro-milidev/src/components/Hash.astro", void 0);

const $$Astro = createAstro("https://bartoszlenar.github.io");
const $$Tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tag;
  const { tag, entriesCount } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(resolvePath(`/tags/${tag}`), "href")} class="inline-flex items-center rounded border border-black/15 px-2 py-1 transition-colors duration-300 ease-in-out hover:bg-black/5 hover:text-black focus-visible:bg-black/5 focus-visible:text-black dark:border-white/20 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:bg-white/5 dark:focus-visible:text-white"> ${renderComponent($$result, "Hash", $$Hash, { "class": "mr-1 h-4 w-4 text-gray-500" })} ${tag} ${entriesCount !== void 0 ? renderTemplate`<span class="ml-2 text-sm text-gray-500">(${entriesCount})</span>` : void 0} </a>`;
}, "/Users/jonathan/Documents/GitHub/astro-milidev/src/components/Tag.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { entries, tags } = await getAllEntriesWithTags();
  return renderTemplate`${renderComponent($$result, "RootPageIndex", $$RootPageIndex, { "title": "Tags" }, { "default": ($$result2) => renderTemplate`${renderTemplate`${maybeRenderHead()}<div class="animate flex flex-wrap gap-2"> ${tags.map((tag) => renderTemplate`${renderComponent($$result2, "Tag", $$Tag, { "tag": tag, "entriesCount": entries.filter(
    (post) => post.data.tags?.includes(tag)
  ).length })}`)} </div>`}` })}`;
}, "/Users/jonathan/Documents/GitHub/astro-milidev/src/pages/tags/index.astro", void 0);

const $$file = "/Users/jonathan/Documents/GitHub/astro-milidev/src/pages/tags/index.astro";
const $$url = "/astro-milidev/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
