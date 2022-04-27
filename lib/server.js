const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const FizzBuzzService = require("./services/FizzbuzzService");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const amountExplorersInMission = ExplorerController.getExplorersAmonutByMission(mission);
    //response.json(amountExplorersInMission);
    response.json({mission: request.params.mission, quantity: amountExplorersInMission});
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const usernamesListInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission: mission, explorers: usernamesListInMission});
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const validationResponse = FizzBuzzService.applyValidationInNumber(score);
    response.json({score: score, trick: validationResponse});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});