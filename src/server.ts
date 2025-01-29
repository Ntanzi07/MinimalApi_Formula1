import fastify from "fastify";
import * as teamsJson from "./data/teams.json"
import * as driversJson from "./data/drivers.json"

const teams = teamsJson;
const drivers = driversJson;

const server = fastify({ logger: true });

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return teams;
});
server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
    return drivers;
})

server.listen({ port: 3333 }, () => {
    console.log("Server init");
})