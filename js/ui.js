export class Ui {
    displayGames(games, gameData) {
        var cartona = "";
        games.forEach(game => {
            var content = `
    <div class="col">
                        <div data-id="${game.id}" class="card card-game h-100 bg-transparent" role="button">
                            <div class=" card-body">

                                <figure class="position-relative">
                                    <img class="card-img-top object-fit-cover h-100"
                                        src="${game.thumbnail}">

                                </figure>
                                    
                                <figcaption>

                                    <div class="hstack justify-content-between">
                                        <h3 class="h6 small text-white">${game.title}</h3>
                                        <span class="badge text-bg-primary text-white p-2">Free</span>
                                    </div>

                                    <p class="card-text text-white small text-center opacity-50">
                                        ${game.short_description}
                                    </p>

                                </figcaption>
                            </div>

                            <footer class="card-footer small hstack justify-content-between">

                                <span class="badge text-white badge-color">${game.genre}</span>
                                <span class="badge badge-color text-white">${game.platform}</span>

                            </footer>
                        </div>
                    </div>
            `;
            cartona += content;
        });
        gameData.innerHTML = cartona;
    }

    displayGameDetails(game) {
        const detailsContent = document.getElementById('detailsContent');
        detailsContent.innerHTML = `
            <div class="col-md-4">
                <img src="${game.thumbnail}" class="w-100" alt="image details">
            </div>
            <div class="col-md-8">
                <h3 class="text-white">Title: ${game.title}</h3>
                <p class="text-white">Category: <span class="badge text-bg-info"> ${game.genre}</span> </p>
                <p class="text-white">Platform: <span class="badge text-bg-info"> ${game.platform}</span> </p>
                <p class="text-white">Status: <span class="badge text-bg-info"> ${game.status}</span> </p>
                <p class="small text-white">${game.description}</p>
                <a class="btn btn-outline-warning text-white" target="_blank" href="${game.game_url}">Show Game</a>
            </div>`;
    }
}