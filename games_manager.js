const Game = require('./game')
const assert = require('assert')


class GameManager{

    constructor() {
        this.games = {};
    }

    add(max_users, min_users, game_name) {
        assert(typeof(max_users) === 'number' && typeof(min_users) === 'number' && typeof(game_name) === 'string');
        let temp_game = new Game(max_users, min_users, game_name);
        this.games[temp_game.game_id] = temp_game;
    }

    dump() {
        let result = {}
        this.games.forEach(key, value => {
            result[key] = value.dump();
        });
        return result;
    }

}

module.exports = GameManager;