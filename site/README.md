# Routerless Vite baseline

Controlled customer fixture for ticket 02's A01 baseline slice. Two YAML-frontmatter Markdown notes render through one repeated section on an existing page. The filename supplies identity and the `order` field supplies ordering. No router or PublishRaw adapter is installed.

Pinned React/DOM 19.3.0, Vite 8.2.2 and plugin-react 6.1.1 match specification v1.2. Node 24.15.0 and npm 12.0.2 are the actual baseline environment; this is not isolated-helper runtime qualification. Marked and YAML are fixture dependencies, not a product parser selection.

In a disposable copy, run `npx npm@12.0.2 ci`, then `npm run dev` or `npm run build` and `npm run preview`. Both dev and build regenerate `src/generated/notes.json`; generated files and dependencies are excluded from the pinned source. Restart dev after editing Markdown; watch-mode content refresh is outside this baseline slice. The loader accepts only these trusted committed inputs and does not qualify arbitrary Markdown or HTML.

Use the [qualification harness](../../README.md) for immutable evidence and temporary-checkout cleanup. Do not run installs or builds in the pinned baseline directory.

`conversion/source/` is an independent case pack for the bounded repeated-literal conversion. Qualification copies the canonical fixture to a temporary checkout, replaces only `src/main.jsx` and `package.json` with these literal inputs, and removes the already-converted Markdown/loader before inspection. The tracked canonical fixture is never overwritten.
