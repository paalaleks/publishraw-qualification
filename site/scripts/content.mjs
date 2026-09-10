import { buildContent } from "../../.publishraw/runtime/react-vite/0.0.1/build.mjs";
import { fileURLToPath } from 'node:url';
const repositoryRoot = fileURLToPath(new URL("../../", import.meta.url));
await buildContent({adapterProtocolVersion:1,repositoryRoot,siteRoot:"site",profilePaths:[".publishraw/collections/becc746e-4a24-4e54-a346-7fba3cf08767.json"],outputRoot:"site/src/generated" });
