import fastify from "fastify";

const server = fastify({ logger: true });

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return [{
        id: 1,
        name: "Max Verstappen",
        team: "Red Bull Racing",
        championships: 3
    }];
});

server.listen({port: 3333}, () => {
    console.log("Server init");
})