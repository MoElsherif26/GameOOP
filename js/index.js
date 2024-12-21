import { Games } from "./games.js";
import { Ui } from "./ui.js";

var gameData = document.getElementById('gameData');
var categories = document.getElementsByClassName('nav-link');
var cards
var games = new Games();
var ui = new Ui();

const loadingElement = document.querySelector('.loading');

function showLoader() {
    loadingElement.classList.remove('d-none');
}

function hideLoader() {
    loadingElement.classList.add('d-none');
}


for (var i of categories) {
    i.addEventListener('click', async function (e) {
        for (var j of categories) {
            j.classList.remove('active');
        }
        e.target.classList.add('active');
        var category = e.target.textContent;
        showLoader();
        var gamesData = await games.getGames(category);
        ui.displayGames(gamesData, gameData);
        hideLoader();
        cards = document.querySelectorAll('.card-game');
        setupGameCardListeners();
    });
}

function setupGameCardListeners() {
    cards.forEach(card => {
        card.addEventListener('click', async function () {
            document.querySelector('.games').style.display = 'none';
            document.getElementById('games-details-section').style.display = 'block';
            const gameId = card.dataset.id;
            showLoader();
            const game = await games.getGameDetails(gameId);
            ui.displayGameDetails(game);
            hideLoader();
        });
    });
}

var defaultCategory = document.querySelector('.active').textContent;
showLoader();
var gamesData = await games.getGames(defaultCategory);
ui.displayGames(gamesData, gameData);
hideLoader();
cards = document.querySelectorAll('.card-game');

setupGameCardListeners();

var closeDetails = document.getElementById('btnClose');
closeDetails.addEventListener('click', function () {
    document.getElementById('games-details-section').style.display = 'none';
    document.querySelector('.games').style.display = 'block';
});