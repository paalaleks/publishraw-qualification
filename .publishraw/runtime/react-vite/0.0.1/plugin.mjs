import { buildContent } from './build.mjs';
export function contentPlugin(request) {
  let queue = Promise.resolve();
  const build = () => queue = queue.catch(() => {}).then(() => buildContent(request));
  return { name: 'publishraw-content', buildStart: build, configureServer(server) {
    server.middlewares.use((req,res,next) => { let url; try { url = decodeURIComponent(req.url || ''); } catch { res.statusCode=400;res.end();return; } if (url.replaceAll('\\','/').toLowerCase().includes('.publishraw/')) {res.statusCode=403;res.end();return;} next(); });
    const changed = (path) => { if (path.replaceAll('\\','/').includes('/content/notes/') && path.endsWith('.md')) { build().then(() => server.ws.send({type:'full-reload'})).catch(error => server.config.logger.error(String(error))); } };
    server.watcher.on('add',changed).on('change',changed).on('unlink',changed);
    server.httpServer?.once('close', () => { server.watcher.off('add',changed).off('change',changed).off('unlink',changed); });
  }};
}
