// Require the framework and instantiate it
import fastify = require("fastify");

const instance = fastify({ logger: true });
instance.register(require("@fastify/sensible"));
// Declare a route
instance.get("/", function handler(request, reply) {
  reply.notFound();
});

// Run the server!
instance.listen({ port: 3000 }, (err) => {
  if (err) {
    instance.log.error(err);
    process.exit(1);
  }
});
