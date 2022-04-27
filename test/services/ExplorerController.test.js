const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Explorer Controller tests",()=>{
    test("1) Get a list of explorers in a mission", () => {
        const explorersInMission = ExplorerController.getExplorersByMission("node");
        expect(explorersInMission.length).toBe(10);
    });

    test("2) Get a username list of explorers in a mission", () => {
        const explorersByUsernameInMission = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorersByUsernameInMission).toContain("ajolonauta5");
    });
    
    test("3) Get the amount of explorers in a mission", () => {
        const explorersInMissionAmount = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorersInMissionAmount).toBe(10);
    });

    test("4) Validate a number score", () => {
        const number = 5;
        const validationScoreResponse = ExplorerController.validateNumberScore(number);
        expect(validationScoreResponse).toBe("Buzz");
    });
});