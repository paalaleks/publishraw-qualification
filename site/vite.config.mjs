import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { contentPlugin } from "../.publishraw/runtime/react-vite/0.0.1/plugin.mjs";
const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const request = { adapterProtocolVersion: 1, repositoryRoot, siteRoot: "site", profilePaths: [".publishraw/collections/becc746e-4a24-4e54-a346-7fba3cf08767.json"], outputRoot: "site/src/generated" };
export default defineConfig({ plugins: [contentPlugin(request), react()], server: { fs: { deny: ['**/.publishraw/**', '**/.git/**', '**/.env*'] } } });
