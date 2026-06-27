# AGENTS.md

## Purpose
This file helps AI coding agents understand the repository structure, how to run the project, and where to make changes in a React + Vite + TypeScript personal page.

## Project overview
- Simple personal website built with React, TypeScript, and Vite.
- Uses client-side routing with `HashRouter` and lazy-loaded pages.
- Pages are defined under `src/pages` and referenced from `src/modules/Navigation.tsx`.
- UI modules and reusable components live in `src/modules` and `src/utils`.

## Important files
- `package.json` - scripts, dependencies, and project commands.
- `src/App.tsx` - entry point, router layout, navigation, and route rendering.
- `src/modules/Navigation.tsx` - route metadata and lazy page loading via `import.meta.glob`.
- `src/modules/DropDown.tsx` - example dropdown component used by the app.
- `src/pages/*` - page components loaded by the router.
- `eslint.config.js` - linting rules and project conventions for TypeScript and React.
- `src/scripts/create_llm_directives.ts` - custom directive generation script.

## Local commands
Use these from the repository root:
- `npm run dev` - start Vite dev server.
- `npm run build` - run `tsc -b` then `vite build`.
- `npm run build:gh` - production build using `tsconfig.prod.json`. Mostly used by CI/CD, not you.
- `npm run lint` - run ESLint across the workspace.
- `npm run preview` - preview the production build.
- `npm run format` - format `src/**/*.tsx` using `prettier-eslint`.
- `npm run directive` - execute a custom script to generate `LLMS.txt`. Mostly used by CI/CD, not you.

## Conventions for AI agents
- Prefer edits to existing `src/pages` and `src/modules` files rather than adding unrelated new folders.
- Keep route definitions in sync with `src/modules/Navigation.tsx` and `src/App.tsx`.
- Preserve the existing `HashRouter` routing pattern for the deployed GitHub Pages site.
- Respect existing style and lint rules from `eslint.config.js`.
- Avoid introducing new build tools or test frameworks unless the user asks for them.

## Notes
- No dedicated test suite is present in this repository.
- The app is currently intended as a personal site rather than a large application.
