const Reader = require("./../lib/utils/Reader");

describe('Reader tests',()=>{
    test('1) File reading', () => {
        const explorers = Reader.readJsonFile("explorers.json");
    });
});