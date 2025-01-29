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

interface DriversParams {
    id: string
}

server.get<{ Params: DriversParams }>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const drive = drivers.find(d => d.id === id)

    if (!drive) {
        response.type("application/json").code(404);
        return { message: "Drive not founded :(" };
    } else {
        response.type("application/json").code(200);
        return drive;
    }

})

server.listen({ port: 3333 }, () => {
    console.log("Server init");
})