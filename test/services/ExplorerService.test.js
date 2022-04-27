const Reader = require("./../../lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");
const ExplorerService = require("../../lib/services/ExplorerService");

describe('Explorer Services tests',()=>{
    test('1) Get a list of explorers in node', () => {
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(10);
    });

    test('2) Get the amount of explorers in node', () => {
        const explorersInNodeAmount = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNodeAmount).toBe(10);
    });

    test('3) Get a username list of explorers in node', () => {
        const explorersByUsernameInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorersByUsernameInNode).toContain("ajolonauta5");
    });
});