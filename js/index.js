import { Games } from "./games.js";
import { Ui } from "./ui.js";

var gameData = document.getElementById('gameData');
var categories = document.getElementsByClassName('nav-link');
var games = new Games();
var ui = new Ui();

for (var i of categories) {
    i.addEventListener('click', async function (e) {
        for (var j of categories) {
            j.classList.remove('active');
        }
        e.target.classList.add('active');
        var category = e.target.textContent;
        var gamesData = await games.getGames(category);
        ui.displayGames(gamesData, gameData);
    });
}



(async function () {
    var defaultCategory = document.querySelector('.active').textContent;
    var gamesData = await games.getGames(defaultCategory);
    ui.displayGames(gamesData, gameData);
})();
