# Módulo 0 — Tu entorno de desarrollo

> "Un buen carpintero conoce sus herramientas antes de tocar la madera."

Vienes de C# y seguramente de **Visual Studio**, donde todo ocurre con botones: compilar, depurar,
gestionar paquetes NuGet… En el mundo JavaScript **todo pasa por la terminal**. Al principio
incomoda; en dos semanas no vas a querer volver.

---

## 1. El mapa mental: C# vs JavaScript

| En C# / .NET | En JavaScript | Para qué sirve |
|---|---|---|
| Visual Studio | **VS Code** | Editor |
| .NET Runtime / CLR | **Node.js** (servidor) / **navegador** (cliente) | Ejecuta el código |
| NuGet | **npm** (o pnpm / yarn) | Gestor de paquetes |
| `.csproj` | **`package.json`** | Dependencias y scripts del proyecto |
| `dotnet build` / `dotnet run` | `npm run build` / `npm run dev` | Scripts definidos en `package.json` |
| `bin/` `obj/` | `node_modules/` `dist/` `.next/` | Carpetas generadas (¡nunca al repo!) |
| xUnit / NUnit | `node:test`, Vitest, Jest | Testing |
| StyleCop / Roslyn analyzers | **ESLint** | Análisis estático |
| Formateo de VS | **Prettier** | Formateo automático |

---

## 2. Instalación

1. **Node.js 22 LTS** → https://nodejs.org (en Windows, mejor usa [nvm-windows](https://github.com/coreybutler/nvm-windows); en Mac/Linux [nvm](https://github.com/nvm-sh/nvm) o `fnm`). Así puedes cambiar de versión por proyecto.
2. **Git** → https://git-scm.com (en Windows incluye **Git Bash**: úsalo como terminal por defecto).
3. **VS Code** → https://code.visualstudio.com

Verifica en la terminal:

```bash
node -v    # v22.x o superior
npm -v
git --version
```

---

## 3. VS Code como un profesional

### Atajos que vas a usar 100 veces al día

| Acción | Windows/Linux | Mac |
|---|---|---|
| Abrir/cerrar terminal integrada | `` Ctrl + ` `` | `` Ctrl + ` `` |
| Nueva terminal | `` Ctrl + Shift + ` `` | `` Ctrl + Shift + ` `` |
| Paleta de comandos | `Ctrl + Shift + P` | `Cmd + Shift + P` |
| Buscar archivo por nombre | `Ctrl + P` | `Cmd + P` |
| Buscar en todo el proyecto | `Ctrl + Shift + F` | `Cmd + Shift + F` |
| Ir a definición | `F12` | `F12` |
| Renombrar símbolo | `F2` | `F2` |
| Multi-cursor | `Alt + Click` / `Ctrl + D` | `Option + Click` / `Cmd + D` |
| Mover línea | `Alt + ↑/↓` | `Option + ↑/↓` |
| Duplicar línea | `Shift + Alt + ↓` | `Shift + Option + ↓` |
| Comentar línea | `Ctrl + /` | `Cmd + /` |
| Dividir editor | `Ctrl + \` | `Cmd + \` |

### Extensiones del equipo
Al abrir este repo, VS Code te sugerirá instalar las de `.vscode/extensions.json`:
**ESLint, Prettier, GitLens, Error Lens, Tailwind CSS IntelliSense, ES7 React snippets, Live Server.**

### Abrir VS Code desde la terminal
`Ctrl+Shift+P` → *"Shell Command: Install 'code' command in PATH"* (en Mac). Luego:

```bash
code .          # abre la carpeta actual en VS Code
```

---

## 4. La terminal: comandos esenciales

Usamos **bash** (Git Bash en Windows, zsh en Mac es casi idéntico).

```bash
pwd                     # ¿dónde estoy? (print working directory)
ls                      # listar archivos
ls -la                  # listar todo, incluso ocultos, con detalles
cd carpeta              # entrar a una carpeta
cd ..                   # subir un nivel
cd ~                    # ir a tu home
cd -                    # volver a la carpeta anterior
mkdir mi-carpeta        # crear carpeta
mkdir -p a/b/c          # crear carpetas anidadas
touch index.js          # crear archivo vacío
cp origen destino       # copiar
mv origen destino       # mover / renombrar
rm archivo              # borrar archivo (¡no hay papelera!)
rm -r carpeta           # borrar carpeta (¡cuidado!)
cat archivo             # ver contenido
clear                   # limpiar pantalla (o Ctrl + L)
```

**Trucos que te ahorran horas:**
- `Tab` autocompleta rutas y comandos. Úsalo SIEMPRE.
- `↑` / `↓` recorre el historial de comandos.
- `Ctrl + C` cancela el proceso actual (por ejemplo, un servidor corriendo).
- `Ctrl + R` busca en el historial de comandos.
- `comando --help` te explica cualquier comando.

---

## 5. npm: el NuGet de JavaScript

```bash
npm init -y                 # crea un package.json
npm install lodash          # instala dependencia (va a "dependencies")
npm install -D vitest       # dependencia de desarrollo ("devDependencies")
npm install                 # instala todo lo del package.json (después de clonar)
npm uninstall lodash        # desinstala
npm run <script>            # ejecuta un script de package.json
npm test                    # atajo de "npm run test"
npx <paquete>               # ejecuta un paquete sin instalarlo globalmente
```

- `package-lock.json` **sí** se sube al repo (fija versiones exactas, como un lockfile de NuGet).
- `node_modules/` **nunca** se sube (por eso está en `.gitignore`).

---

## 6. Git: el flujo del equipo

```bash
git clone <url>                       # traer el repo
git status                            # ¿qué cambió? (úsalo constantemente)
git checkout -b tarea/00-entorno      # crear rama nueva y moverte a ella
git add archivo.js                    # preparar un archivo
git add .                             # preparar todo
git commit -m "feat: agrega X"        # guardar el cambio
git push -u origin tarea/00-entorno   # subir la rama
git pull                              # traer cambios del remoto
git log --oneline --graph             # ver historial
git diff                              # ver qué cambiaste (antes del add)
git switch main                       # cambiar de rama
```

### Convención de commits (Conventional Commits)
Usamos prefijos para que el historial se lea solo:

```
feat: agrega validación al formulario de login
fix: corrige cálculo de total con descuento
refactor: extrae función formatPrice
docs: actualiza README con instrucciones
test: agrega tests para cart.js
chore: actualiza dependencias
```

### Flujo de una tarea
```
main ──●───────────────●── (merge del PR)
        \             /
         ●──●──●──────    tarea/xx
        (commits pequeños y descriptivos)
```

1. `git switch main && git pull`
2. `git checkout -b tarea/xx-descripcion`
3. Trabajas y haces commits pequeños
4. `git push -u origin tarea/xx-descripcion`
5. Abres el PR en GitHub, describes **qué** hiciste y **por qué**
6. Code review → correcciones → merge

---

## 7. Depurar en VS Code (tu "F5" de Visual Studio)

- Rápido: `console.log(variable)` (sí, en JS se usa muchísimo, sin vergüenza).
- Pro: pon un *breakpoint* (click a la izquierda del número de línea), abre la paleta de comandos →
  **"Debug: JavaScript Debug Terminal"**, y corre ahí `node archivo.js` o `npm test`. Se detendrá
  en el breakpoint como en Visual Studio.

👉 Ahora ve a [`TAREA.md`](./TAREA.md).
