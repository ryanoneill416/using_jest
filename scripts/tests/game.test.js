/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore, addTurn } = require("../game");

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contains correct IDs", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("new game works correctly", () => {
    beforeEach(() => {
        game.score = 42;
        game.playerMoves = [1, 2, 3, 4];
        game.currentGame = [1, 2, 3, 4];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should empty playerMoves array", () => {
        expect(game.playerMoves.length).toEqual(0);
    });
    test("should be one element in comupters array", () => {
        expect(game.currentGame.length).toBe(1);
    });
    test("should display 0 for element w/ #score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
})