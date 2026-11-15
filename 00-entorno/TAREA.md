# 📝 Tarea 00 — Configura tu entorno y abre tu primer PR

**Tiempo estimado:** 2–4 horas
**Objetivo:** demostrar que dominas el flujo básico terminal → Git → PR.

## Instrucciones

> ⚠️ Haz TODO desde la terminal integrada de VS Code. Nada de crear carpetas con el explorador de archivos.

1. Instala Node 22+, Git y VS Code. Clona este repositorio y ábrelo con `code .`.
2. Instala las extensiones recomendadas.
3. Configura tu identidad en Git:
   ```bash
   git config --global user.name "Tu Nombre"
   git config --global user.email "tu@email.com"
   git config --global init.defaultBranch main
   ```
4. Crea la rama `tarea/00-entorno`.
5. Dentro de `00-entorno/`, crea la carpeta `entrega/` y dentro:
   - **`sobre-mi.md`** con:
     - Tu salida de `node -v`, `npm -v` y `git --version`.
     - 3 cosas que te gustaron de C# y crees que vas a extrañar.
     - Qué esperas aprender en la pasantía.
   - **`hola.js`** que, al ejecutarlo con `node 00-entorno/entrega/hola.js`, imprima:
     ```
     Hola, soy <tu nombre> y hoy es <fecha actual en formato local>
     ```
     *Pista:* busca `new Date().toLocaleDateString()` y los *template literals* (`` `Hola ${nombre}` ``).
6. Agrega a `package.json` un script llamado `"hola"` que ejecute tu archivo, de modo que
   `npm run hola` funcione.
7. Haz **al menos 3 commits separados** (uno por archivo/cambio) con mensajes en formato Conventional Commits.
8. Sube la rama y abre un Pull Request con:
   - Título: `Tarea 00: configuración de entorno`
   - Descripción: qué hiciste, un screenshot de VS Code con la terminal abierta y el resultado de `npm run hola`.

## Desafío extra ⭐ (opcional)
- Ejecuta `git log --oneline --graph --all` y explica en el PR qué ves.
- Crea un alias de Git: `git config --global alias.lg "log --oneline --graph --all"` y úsalo.
- Pon un breakpoint en `hola.js` y depúralo con la *JavaScript Debug Terminal*.

## Criterios de evaluación
- [ ] La rama y los commits siguen las convenciones
- [ ] `npm run hola` funciona
- [ ] El PR tiene una descripción clara
- [ ] No se subieron archivos basura (`node_modules`, `.DS_Store`, etc.)
