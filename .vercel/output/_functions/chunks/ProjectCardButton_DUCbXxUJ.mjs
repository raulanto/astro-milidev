import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from './astro/server_CHXx7Kpb.mjs';
import 'kleur/colors';
import { $ as $$ArrowCardButton } from './ArrowCardButton_DWRJxItD.mjs';
import { f as formatDateWithLastUpdateDate, r as resolvePath } from './utils_DDuO5gsQ.mjs';

const $$Astro = createAstro("https://bartoszlenar.github.io");
const $$ProjectCardButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCardButton;
  const { entry } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ArrowCardButton", $$ArrowCardButton, { "href": resolvePath(`/${entry.collection}/${entry.slug}`, Astro2.url.pathname), "textAbove": formatDateWithLastUpdateDate(
    entry.data.date,
    entry.data.lastUpdateDate
  ), "text": entry.data.title, "textBelow": entry.data.description })}`;
}, "/Users/jonathan/Documents/GitHub/astro-milidev/src/components/ProjectCardButton.astro", void 0);

export { $$ProjectCardButton as $ };
