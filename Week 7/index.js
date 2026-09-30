// npm init -y
// npm install @hapi/hapi

import Hapi from '@hapi/hapi';

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

server.route({
  method: 'GET',
  path: '/',
  handler: () => 'Hello Hapi!'
});

await server.start();
console.log('Server running on %s', server.info.uri);
