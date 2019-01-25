const uuid_timestamp = require('uuid/v1')

class Game {

    constructor(max_users, min_users, game_name) {
        this.max_users = max_users;
        this.min_users = min_users;
        this.user_ids = new Int32Array();
        this.game_id = uuid_timestamp();
        this.is_started = false;
        this.room_id = 'room_' + self.game_id;
        this.game_name = game_name;
    }

    dump() {
        return {
            'name': this.game_name,
            'players_count': this.user_ids.length,
            'status': this.is_started
        };
    }

}

module.exports = Game;