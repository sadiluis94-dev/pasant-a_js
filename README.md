# 🚀 Programa de Pasantía: de C# a Junior Front-end

> **Mentor:** Senior Software Engineer (15+ años)
> **Objetivo:** que en ~6 meses puedas tomar tickets reales del equipo Front-end como Junior.

Bienvenido/a. Este repositorio es tu **campo de entrenamiento**. Aquí vas a trabajar exactamente
como trabajamos en el equipo: ramas, commits, Pull Requests, revisiones de código y tests.
Lo que aprendas del *proceso* vale tanto como lo que aprendas del *lenguaje*.

---

## 🧭 Cómo vamos a trabajar

1. Cada módulo tiene un `README.md` (la **lección**) y un `TAREA.md` o carpeta `ejercicios/` (el **homework**).
2. Para cada tarea creas una rama: `git checkout -b tarea/01-fundamentos`.
3. Resuelves, corres los tests (`npm test`) hasta que estén en verde ✅.
4. Haces commit, push y abres un **Pull Request** hacia `main`.
5. Yo reviso el PR y te dejo comentarios, como en un code review real. Corriges y se mergea.

**Regla de oro:** no copies soluciones de internet ni de una IA sin entenderlas. Si te trabas más
de 30–45 min en algo, pregúntame. Atascarse es normal; quedarse atascado en silencio, no.

---

## 🗺️ Roadmap

| Fase | Módulo | Contenido | Duración aprox. | Entregable |
|------|--------|-----------|-----------------|------------|
| 0 | [`00-entorno`](./00-entorno) | VS Code, terminal, Git, Node, npm | 1 semana | Repo configurado + primer PR |
| 1 | [`01-javascript-fundamentos`](./01-javascript-fundamentos) | JS para devs de C#: tipos, funciones, arrays, objetos | 2 semanas | Ejercicios con tests |
| 2 | `02-javascript-avanzado` | Closures, `this`, prototipos, clases, módulos, async/await, Promises, errores | 2 semanas | Ejercicios + mini CLI |
| 3 | `03-html-css` | HTML semántico, accesibilidad, Flexbox, Grid, responsive, Tailwind | 2 semanas | Landing page responsive |
| 4 | `04-dom-y-apis` | DOM, eventos, `fetch`, localStorage | 1–2 semanas | **Proyecto 1:** App de tareas en vanilla JS |
| 5 | `05-typescript` | Tipos, interfaces, genéricos (vas a sentirte en casa 😉) | 1 semana | Migrar Proyecto 1 a TS |
| 6 | `06-react` | Componentes, props, estado, hooks, formularios, testing | 3 semanas | **Proyecto 2:** Dashboard consumiendo API |
| 7 | `07-node-express` | Node, Express, REST, middlewares, validación, base de datos | 2–3 semanas | **Proyecto 3:** API REST |
| 8 | `08-nextjs` | App Router, Server Components, data fetching, rutas API, deploy | 3 semanas | **Proyecto 4:** App full-stack |
| 9 | `09-simulacion-trabajo-real` | Tickets tipo Jira sobre un código existente: bugs, features, refactors | 3–4 semanas | PRs revisados como en producción |

> Los módulos se van agregando a medida que avances. Cuando termines uno, se libera el siguiente.

---

## 🛠️ Requisitos

- **Node.js 22 LTS o superior** → `node -v`
- **Git** → `git --version`
- **VS Code** con las extensiones recomendadas (VS Code te las sugiere solo al abrir esta carpeta; ver `.vscode/extensions.json`)

## ▶️ Comandos

```bash
npm test          # corre TODOS los tests
npm run test:01   # corre solo los tests del módulo 01
npm run test:watch # re-ejecuta tests al guardar
```

---

## ✅ Checklist de "listo para Junior Front-end"

- [ ] Me muevo con soltura en la terminal y Git (branch, rebase básico, resolver conflictos)
- [ ] Entiendo cómo JS difiere de C# (tipado dinámico, `this`, asincronía, closures)
- [ ] Maqueto una UI responsive y accesible a partir de un diseño
- [ ] Construyo componentes React reutilizables con estado y efectos bien manejados
- [ ] Consumo APIs REST y manejo estados de carga/error
- [ ] Conozco Next.js App Router lo suficiente para agregar páginas y features
- [ ] Puedo leer código ajeno, estimar una tarea y abrir un PR claro y pequeño
- [ ] Escribo tests básicos para mi código
