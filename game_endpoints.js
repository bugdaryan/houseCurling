const demo_app = require('express')()
const http = require('http').Server(demo_app)
const gm = require('./games_manager')
const games = require('./game_in_process')
const bodyParser = require('body-parser');


let game_manager = new gm()
let dynamicgames = new games();

dynamicgames.update( game_manager );
demo_app.use(bodyParser);

demo_app.post('/game', (req, res) => {
    res.send(create_game_handler(req.body['max_users'], req.body['min_users'], req.body['game_name']))
})


let create_game_handler = function(max_users=4, min_users=2, game_name='') {
    game_manager.add(max_users=4, min_users=2, game_name='')
    return game_manager.dump()
}