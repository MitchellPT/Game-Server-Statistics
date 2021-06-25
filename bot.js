const Discord = require('discord.js');
const Gamedig = require('gamedig');
const config = require('./config');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
    var interval = setInterval(function() { 

        config.servers.forEach(function(item) {
            Gamedig.query({
                type: item.gametype,
                host: item.ip_address,
                port: item.port
            }).then((state) => {
                // console.log(state)
                // console.log(state.players.length+"/"+String(state.maxplayers));
                channel_name = item.Structure
                channel_name = channel_name.replace("%currentplayers%", state.players.length);
                channel_name = channel_name.replace("%maximumamount%", state.maxplayers);
                channel_name = channel_name.replace("%gamemode%", state.raw.game);
                channel_name = channel_name.replace("%map%", state.map);
                channel_name = channel_name.replace("%name%", state.name);
                client.channels.cache.get(item.channel_id).setName(channel_name);
            }).catch((error) => {
                console.log(error);
                console.log("Server is offline");
            });
        });
    }, config.Refresh_Time);
});

client.login(config.token);