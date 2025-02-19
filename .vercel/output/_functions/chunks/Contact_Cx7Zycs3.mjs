import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent, F as Fragment } from './astro/server_CHXx7Kpb.mjs';
import 'kleur/colors';
import 'clsx';
import { C as CONTACT } from './utils_DDuO5gsQ.mjs';

const $$Astro$1 = createAstro("https://bartoszlenar.github.io");
const $$Bio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Bio;
  const { small } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(small ? "font-size: 0.875rem" : "", "style")}> <p>
Soy un apasionado por la programación y actualmente me desempeño como <strong>desarrollador Full Stack</strong>,
    con experiencia en:
</p> <ul> <li><strong>Frontend:</strong> Creación de interfaces intuitivas y dinámicas utilizando <strong>Vue.js</strong>.</li> <li><strong>Backend:</strong> Desarrollo de APIs robustas y escalables con <strong>Django</strong>.</li> </ul> <h3>💡 Mis intereses incluyen:</h3> <ul> <li>Desarrollo de aplicaciones web dinámicas y eficientes.</li> <li>Creación y consumo de APIs RESTful.</li> <li>Mejora continua en tecnologías frontend y backend.</li> </ul> <h3>🧠 Habilidades blandas:</h3> <ul> <li><strong>Resolución de problemas:</strong> Capacidad para analizar y descomponer problemas complejos, identificando soluciones prácticas y eficientes.</li> <li><strong>Abstracción y modelado:</strong> Habilidad para comprender y simplificar conceptos complejos, transformándolos en modelos claros y aplicables.</li> <li><strong>Colaboración:</strong> Trabajo en equipo efectivo, promoviendo la comunicación abierta y el aprendizaje mutuo.</li> </ul> <p>
Actualmente, estoy trabajando en proyectos que combinan <strong>Vue.js</strong> y <strong>Django</strong>,
    explorando cómo integrar estas tecnologías para crear soluciones completas.
</p> <h3>🚀 ¡Estoy emocionado por contribuir a proyectos colaborativos y seguir aprendiendo de la comunidad!</h3> <p>🫶 También, tengo una persona especial en mi vida a quien quiero muchísimo. ❤️</p> <h2>Tecnologías conocidas👨🏻‍💻</h2> <p> <a href="https://skillicons.dev"> <img src="https://skillicons.dev/icons?i=git,js,html,css,kubernetes,python,docker,c,vue,java,nuxt,pycharm,django,postman,mysql,figma,npm,pinia,mongodb,astro"> </a> </p> </div>`;
}, "/Users/jonathan/Documents/GitHub/astro-milidev/src/components/Bio.astro", void 0);

const $$Astro = createAstro("https://bartoszlenar.github.io");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const { small } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="mb-0"${addAttribute(small ? "font-size: 0.875rem" : "", "style")}> ${CONTACT.map((c, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a${addAttribute(c.href, "href")} target="_blank"> ${c.displayAs ?? c.type} </a> <span class="mx-2">${index < CONTACT.length - 1 && " | "}</span> ` })}`)} </p>`;
}, "/Users/jonathan/Documents/GitHub/astro-milidev/src/components/Contact.astro", void 0);

export { $$Bio as $, $$Contact as a };
