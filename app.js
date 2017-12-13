const Hapi = require('hapi');

const server = new Hapi.Server();

// eslint-disable-next-line
server.connection({
  host: 'localhost',
  port: process.env.PORT || 3000,
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    // eslint-disable-next-line
    console.log(request);
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
