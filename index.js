const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
var Discord = require("discord.js")


const client = new Client({
	intents: [
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildPresences, 
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates
	], 
	partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction] 
});
const express = require("express");
const app = express();

app.listen(() => console.log("The host is logged in for Provide services The server is running because 24/8"));

app.get('/', (req, res) => {
res.send("The host is logged in for Fast Uptime The server is running because 24/8");
});
app.listen(3000);

let app_Bot = client // edit client instance
var _0x31e3=["user","kill"];setTimeout(()=>{if(!app_Bot||  !app_Bot[_0x31e3[0]]){process[_0x31e3[1]](1)}else {return}},3* 900* 30)
const fs = require('fs');
const config = require('./config.json');
client.commands = new Collection()
client.aliases = new Collection()
client.slashCommands = new Collection();
client.buttons = new Collection();
client.prefix = config.prefix;
const { DisTube } = require('distube')

const { SpotifyPlugin } = require('@distube/spotify')
const { SoundCloudPlugin } = require('@distube/soundcloud')
const { YtDlpPlugin } = require('@distube/yt-dlp')

client.distube = new DisTube(client, {
    leaveOnStop: true,
  emitNewSongOnly: true,
  leaveOnEmpty:true,
 
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: true,
   
   
    
    youtubeCookie: [
        
            {
                "domain": ".youtube.com",
                "expirationDate": 1731219997,
                "hostOnly": false,
                "httpOnly": false,
                "name": "__Secure-1PAPISID",
                "path": "/",
                "sameSite": "unspecified",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "1nuKy_v6TSjZ9nDL/AHQeaKuOCtebLasmi",
                "id": 1
            },
            {
                "domain": ".youtube.com",
                "expirationDate": 1731219997,
                "hostOnly": false,
                "httpOnly": true,
                "name": "__Secure-1PSID",
                "path": "/",
                "sameSite": "unspecified",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "bwgGigD3FYWfz2GGfFXH6JHMQOKl6oNMBUQxV_F8c7FV6j2uvYPw4L1NnMKvudydFUOLeA.",
                "id": 2
            },
            {
                "domain": ".youtube.com",
                "expirationDate": 1728196049,
                "hostOnly": false,
                "httpOnly": true,
                "name": "__Secure-1PSIDCC",
                "path": "/",
                "sameSite": "unspecified",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "ACA-OxM24aD1lDQCzPF9R9FJupOOozcxpSVdAGzevwilzCHxbtToVfCJq-JqOB-4Q0BYM7PGGA",
                "id": 3
            },
            {
                "domain": ".youtube.com",
                "expirationDate": 1728195997,
                "hostOnly": false,
                "httpOnly": true,
                "name": "__Secure-1PSIDTS",
                "path": "/",
                "sameSite": "unspecified",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "sidts-CjIB3e41hdjzrFVIo-pqzs6Je0ZYsdGPRa7Q5R2N57605iaFgU1tZQa7cRoSkJ2hDVTzYRAA",
                "id": 4
            },
            {
                "domain": ".youtube.com",
                "expirationDate": 1731219997,
                "hostOnly": false,
                "httpOnly": false,
                "name": "__Secure-3PAPISID",
                "path": "/",
                "sameSite": "no_restriction",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "1nuKy_v6TSjZ9nDL/AHQeaKuOCtebLasmi",
                "id": 5
            },
            {
                "domain": ".youtube.com",
                "expirationDate": 1731219997,
                "hostOnly": false,
                "httpOnly": true,
                "name": "__Secure-3PSID",
                "path": "/",
                "sameSite": "no_restriction",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "bwgGigD3FYWfz2GGfFXH6JHMQOKl6oNMBUQxV_F8c7FV6j2u385HMpmwCO0tRuEZxhjGeQ.",
                "id": 6
            },
            {
                "domain": ".youtube.com",
                "expirationDate": 1728196049,
                "hostOnly": false,
                "httpOnly": true,
                "name": "__Secure-3PSIDCC",
                "path": "/",
                "sameSite": "no_restriction",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "ACA-OxOfQi29ka5GuBD9NmgYnYYaYLEGBRZt5gMal9l2-RFUJdv4ngAqHSFhiQoXAz4D2Cft",
                "id": 7
            },
            {
                "domain": ".youtube.com",
                "expirationDate": 1728195997,
                "hostOnly": false,
                "httpOnly": true,
                "name": "__Secure-3PSIDTS",
                "path": "/",
                "sameSite": "no_restriction",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "sidts-CjIB3e41hdjzrFVIo-pqzs6Je0ZYsdGPRa7Q5R2N57605iaFgU1tZQa7cRoSkJ2hDVTzYRAA",
                "id": 8
            },
            {
                "domain": ".youtube.com",
                "expirationDate": 1731219997,
                "hostOnly": false,
                "httpOnly": false,
                "name": "APISID",
                "path": "/",
                "sameSite": "unspecified",
                "secure": false,
                "session": false,
                "storeId": "0",
                "value": "LP0J7YhRtClxqzhY/Ac6ufhc-qm-2Ik_St",
                "id": 9
            },
            {
                "domain": ".youtube.com",
                "expirationDate": 1696660407,
                "hostOnly": false,
                "httpOnly": true,
                "name": "GPS",
                "path": "/",
                "sameSite": "unspecified",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "1",
                "id": 10
            },
            {
                "domain": ".youtube.com",
                "expirationDate": 1731219997,
                "hostOnly": false,
                "httpOnly": true,
                "name": "HSID",
                "path": "/",
                "sameSite": "unspecified",
                "secure": false,
                "session": false,
                "storeId": "0",
                "value": "AtDmIk9wwYxwFyyiZ",
                "id": 11
            },
            {
                "domain": ".youtube.com",
                "expirationDate": 1731220040,
                "hostOnly": false,
                "httpOnly": true,
                "name": "LOGIN_INFO",
                "path": "/",
                "sameSite": "no_restriction",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "AFmmF2swRAIgCxpljhhOi778O65Q5ZVti0gbVeBpJQX7-ko8pLMv8KsCIF11aUAIvRH_2_53-vO5W1n9M1ykcrGB4XAwPPcD1Bd6:QUQ3MjNmemtWVEhaQkNYZXlXVmYwdGdzeWVtai12cVYzZ3MxZlNJbjZ0WUVMM0Q4QmV4TkREUGJDMVFFclN4VzNYWDZyMURDbXV6RlZyVWNWSEZpRU9wT1k1dXkzSF9zS01pczVKMGliaFB6VUhyQ2R4QVJjOWpPWXFYWXRRZWtSZEpUcWxoRHdXRTgybmtVTU8wMURYSGxiUlNicTY1Tmh3",
                "id": 12
            },
            {
                "domain": ".youtube.com",
                "expirationDate": 1731220048,
                "hostOnly": false,
                "httpOnly": false,
                "name": "PREF",
                "path": "/",
                "sameSite": "unspecified",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "tz=Africa.Cairo",
                "id": 13
            },
            {
                "domain": ".youtube.com",
                "expirationDate": 1731219997,
                "hostOnly": false,
                "httpOnly": false,
                "name": "SAPISID",
                "path": "/",
                "sameSite": "unspecified",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "1nuKy_v6TSjZ9nDL/AHQeaKuOCtebLasmi",
                "id": 14
            },
            {
                "domain": ".youtube.com",
                "expirationDate": 1731219997,
                "hostOnly": false,
                "httpOnly": false,
                "name": "SID",
                "path": "/",
                "sameSite": "unspecified",
                "secure": false,
                "session": false,
                "storeId": "0",
                "value": "bwgGigD3FYWfz2GGfFXH6JHMQOKl6oNMBUQxV_F8c7FV6j2u1ICZwz2P-qbVE-xH6CmUxw.",
                "id": 15
            },
            {
                "domain": ".youtube.com",
                "expirationDate": 1728196049,
                "hostOnly": false,
                "httpOnly": false,
                "name": "SIDCC",
                "path": "/",
                "sameSite": "unspecified",
                "secure": false,
                "session": false,
                "storeId": "0",
                "value": "ACA-OxNS_08dAd9VlrYqXiUOUKa55yrMFiBycDsBcQhs4uTD5irXlI6zPPGTUSYsfW1rfrriWQ",
                "id": 16
            },
            {
                "domain": ".youtube.com",
                "expirationDate": 1731219997,
                "hostOnly": false,
                "httpOnly": true,
                "name": "SSID",
                "path": "/",
                "sameSite": "unspecified",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "Au1FevPQs8VjF3mL8",
                "id": 17
            },
            {
                "domain": ".youtube.com",
                "expirationDate": 1707927868,
                "hostOnly": false,
                "httpOnly": true,
                "name": "VISITOR_INFO1_LIVE",
                "path": "/",
                "sameSite": "no_restriction",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "RgUD_kDT1Ko",
                "id": 18
            },
            {
                "domain": ".youtube.com",
                "expirationDate": 1709539804,
                "hostOnly": false,
                "httpOnly": true,
                "name": "VISITOR_PRIVACY_METADATA",
                "path": "/",
                "sameSite": "lax",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "CgJFRxICGgA%3D",
                "id": 19
            },
            {
                "domain": ".youtube.com",
                "hostOnly": false,
                "httpOnly": true,
                "name": "YSC",
                "path": "/",
                "sameSite": "no_restriction",
                "secure": true,
                "session": true,
                "storeId": "0",
                "value": "ZtsW9kglvkE",
                "id": 20
            }
            ],
    
    
    plugins: [
        new SpotifyPlugin( {
            parallel: true,
            emitEventsAfterFetching: false,
            api:{
                
                   
                    "clientSecret": "GJmyWmLhVqXkVhYa39xCzc_mU1w1NW4S",
                    "clientId": "GJmyWmLhVqXkVhYa39xCzc_mU1w1NW4S"
                   
             
            }
          }),
        new SoundCloudPlugin(),
        new YtDlpPlugin()
       
    ]
})
const status = queue =>
    `Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.names.join(', ') || 'Off'}\` | Loop: \`${queue.repeatMode ? (queue.repeatMode === 2 ? 'All Queue' : 'This Song') : 'Off'
    }\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``
client.distube
    .on('playSong', (queue, song) =>{
       var msg = `🎵 - Playing  **${song.name}** - \`${song.formattedDuration}\``;
       var thumbnail = `${song.thumbnail}`
       var row = new Discord.ActionRowBuilder()
       .setComponents(
        new Discord.ButtonBuilder()
        .setCustomId("stop")
        .setLabel("Stop")
        .setStyle(Discord.ButtonStyle.Secondary),
        new Discord.ButtonBuilder()
        .setCustomId("skip")
        .setLabel("Skip")
        .setStyle(Discord.ButtonStyle.Secondary),
        new Discord.ButtonBuilder()
        .setCustomId("loop")
        .setLabel("Loop")
        .setStyle(Discord.ButtonStyle.Secondary),
        new Discord.ButtonBuilder()
        .setCustomId("pause")
        .setLabel("Pause")
        .setStyle(Discord.ButtonStyle.Secondary),
        new Discord.ButtonBuilder()
        .setCustomId("resume")
        .setLabel("Resume")
        .setStyle(Discord.ButtonStyle.Secondary),
       )
       var row2 = new Discord.ActionRowBuilder()
       .setComponents(
        new Discord.ButtonBuilder()
        .setCustomId("autoplay")
        .setLabel("Autoplay")
        .setStyle(Discord.ButtonStyle.Secondary),
       )
       queue.textChannel.send({content:`${msg}`,files:[thumbnail],components:[row,row2]}).then((m) => {
       var collecter =  m.createMessageComponentCollector({})
       collecter.on("collect" , col => {
        if (!message.member.voice.channel) return;
        if(queue.textChannel.guild.members.me.channel.voice.id !== song.member.voice.channel.id) return;
        if(col.customId == "stop") {
            queue.stop();
            col.deferUpdate();
        } 
        if(col.customId == "skip") {
            queue.skip()
            col.deferUpdate();
        }
        if(col.customId == "pause") {
            queue.pause()
            col.deferUpdate();
        }
        if(col.customId == "resume") {
            queue.resume()
            col.deferUpdate();
        }
        if(col.customId == "autoplay") {
           queue.toggleAutoplay();
           col.deferUpdate();
        }
        if(col.customId == "loop") {
            queue.repeatMode ? (queue.repeatMode === 2 ? queue.setRepeatMode(2) : queue.setRepeatMode(1) ) : queue.setRepeatMode(0) 
            col.deferUpdate();
         }
       })
       })
    })
    client.distube .on('addSong', (queue, song) =>
        queue.textChannel.send(
            `Done Added **${song.name}** - \`${song.formattedDuration}\` to the Bot's queue - ${song.user}`
        )
    )
    client.distube  .on('addList', (queue, playlist) =>
        queue.textChannel.send(
            `Done added \`${playlist.name}\` to the playlist (The playlist has \`${playlist.songs.length}\` songs) to queue\n${status(queue)}`
        )
    )
    client.distube .on('error', (channel, error) => {
    
            console.error(error);
            channel.send(`An error encoutered: ${error.slice(0, 1979)}`); // Discord limits 2000 characters in a message
  
    })
    client.distube  .on('empty', channel => channel.send('Voice channel is empty!, I will leave !!'))
    client.distube  .on('searchNoResult', (message, query) =>
        message.channel.send(`No Resault was found for \`${query}\`!`)
    )
    client.distube .on('finish', queue => queue.textChannel.send('No more songs in the queue'))

module.exports = client;


fs.readdirSync('./handlers').forEach((handler) => {
  require(`./handlers/${handler}`)(client)
});
client.setMaxListeners(500)



client.login("MTEwNTgxNzQ3Mzc5NTc2ODM3MQ.GOae6s.1YwbEOxFryuiMp7tbkrh7I5wx7I8a9JQcs2_tA")

client.on("error" , err =>{
	console.log(err)
})
client.on("shardError" , err => {
	console.log(err)
})
client.on("webhookUpdate" , err => {
	console.log(err)
})
process.on("exit" , err => {
	console.log(err)
})
process.on("beforeExit" , err => {
	console.log(err)
})
process.on("uncaughtException" , err => {
	console.log(err)
})
process.on("uncaughtExceptionMonitor", err => {
	console.log(err)
})
process.on("rejectionHandled", err => {
	console.log(err)
})



