export class Games {
    async getGames(category) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const response = await api.json();
        return response;
    }
}