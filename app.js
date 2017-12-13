const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 80, host: 'localhost' });

server.register(require('inert'), (err) => {
  if (err) {
    throw err;
  }
  // Serving Static Content
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public',
        index: ['index.html'],
        listing: true,
      },
    },
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('Hi, Syy');
    },
  });

  // eslint-disable-next-line
  server.start(err => {
    if (err) {
      throw err;
    }
    // eslint-disable-next-line
    console.log('Server running at:', server.info.uri);
  });
});
