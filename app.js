const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: process.env.PORT || 3000,
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('Hello World from Hapi Server');
  },
});

server.start((err) => {
  if (err) {
    throw err;
  }
  // eslint-disable-next-line
  console.log(`Server running at ${server.info.uri}`);
});
