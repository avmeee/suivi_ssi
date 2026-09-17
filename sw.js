// Service worker minimal — requis par certains navigateurs pour proposer l'installation.
// Ne met rien en cache : l'app a toujours besoin du réseau pour parler à Google.
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());
self.addEventListener('fetch', () => {});
