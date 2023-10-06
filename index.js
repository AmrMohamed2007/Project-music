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
   
   
    
    youtubeCookie: `PREF=tz=Africa.Cairo; CONSISTENCY=ADecB4uJV8rasR1-qBpC4-VcW2xWQV5I5_OEMg8ieT6PoH1NcBGDDHdLwbd6vQTFA1dTEB8hPHFb9CuvjrFFfuFXc0hdYsADv4iqEZHBOOD5kau4nWGAp_kLvnB19K9oEybX`,
    
    plugins: [
        new SpotifyPlugin( {
            parallel: true,
            emitEventsAfterFetching: false,
            api:{
                
                   
                    "clientSecret": "GJmyWmLhVqXkVhYa39xCzc_mU1w1NW4S",
                    "clientId": "GJmyWmLhVqXkVhYa39xCzc_mU1w1NW4S"
                   
             
            }
          }),
        new SoundCloudPlugin()
       
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
    client.distube .on('error', (channel, e) => {
        return console.error(e)
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



