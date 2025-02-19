import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes } from './astro/server_CHXx7Kpb.mjs';
import 'clsx';

const $$Astro = createAstro("https://bartoszlenar.github.io");
const $$ArrowCardButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArrowCardButton;
  const { href, text, textAbove, textBelow, openInNewTab = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="not-prose group relative flex flex-nowrap rounded-lg border border-black/15 px-4 py-3 pr-10 transition-colors duration-300 ease-in-out hover:bg-black/5 hover:text-black focus-visible:bg-black/5 focus-visible:text-black dark:border-white/20 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:bg-white/5 dark:focus-visible:text-white" style="min-height: 70px; text-decoration: none;"${spreadAttributes(openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}> <div class="flex flex-1 flex-col truncate" style="display: flex; justify-content: center;"> ${textAbove && renderTemplate`<div class="text-xs text-gray-500">${textAbove}</div>`} <div class="font-semibold"> ${text} </div> ${textBelow && renderTemplate`<div class="text-xs text-gray-500">${textBelow}</div>`} </div> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="absolute right-2 top-1/2 size-5 -translate-y-1/2 fill-none stroke-current stroke-2"> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-3 scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100 group-focus-visible:translate-x-0 group-focus-visible:scale-x-100"></line> <polyline points="12 5 19 12 12 19" class="-translate-x-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-focus-visible:translate-x-0"></polyline> </svg> </a>`;
}, "/Users/jonathan/Documents/GitHub/astro-milidev/src/components/ArrowCardButton.astro", void 0);

export { $$ArrowCardButton as $ };
