const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: process.env.PORT,
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    // eslint-disable-next-line
    console.log(request, reply);
    reply('Hello World');
  },
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    // eslint-disable-next-line
    console.log(request, reply);
  },
});

server.start((err) => {
  if (err) {
    throw err;
  }
  // eslint-disable-next-line
  console.log(`Server running at ${server.info.uri}:${server.info.port}`);
});
