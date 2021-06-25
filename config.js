// Configs File :/
var config = {};

//Config
config.Refresh_Time = 1000; // 10000 = 10 seconds
config.token = ""; // Discord bot token
// Servers
// DOCS
// %currentplayers%  = current amount of players on the servers
// %maximumamount% = amount of slots on the servers
// %gamemode% = gamemode
// %map% = Map of the server
// %name% = display name of the server


config.servers = [
    {   
        gametype: "garrysmod",
        ip_address: "139.99.185.81",
        port: "27015",
        channel_id: "856304287583567902",
        Structure: "UK %currentplayers% - %maximumamount%"
    },
    {
        gametype: "garrysmod",
        ip_address: "208.103.169.155",
        port: "27015",
        channel_id: "856615272680521728",
        Structure: "UK %currentplayers% - %maximumamount%"
    }
]

module.exports = config;