class Coordinate {
    constructor( x , y ){
        this.x = x
        this.y = y
    }
}

class User {

    constructor ( ) {
        this.users = {}
    }

    addUser ( userid , coordinates ) {
        users[userid] = coordinates
    }

    deleteUser ( userid ) {
        delete this.users[userid]
    }
}

class Games {
    constructor ( ) {
        this.games = {}
    }

    addGame ( gameid , users ) {
        games[gameid] = users
    }

    deleteGame ( gameid ) {
        delete this.games[gameid]
    }

    update ( gm ) {
        Object.keys( gm.games ).forEach(key => {
            let sockets = io.sockets.clients(gm.games[key].room_id);
            Object.keys( sockets ).forEach(function ( client ) {
                client.on ( 'connection', function ( socket ) {
                    socket.on ( 'data' , function ( msg ) {
                        this.games[msg[0]].users[msg[1]] = new Coordinate ( msg[2] , msg[3] )
                    })
                    if ( this.games[msg[0]].users.length == value.user_ids ) {
                        client.emit('update',games[msg[0]])
                    } 
                })
            })
        });
    }
}

module.exports = Games