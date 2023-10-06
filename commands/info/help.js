const { ApplicationCommand, ApplicationCommandType } = require("discord.js");
var config = require("../../config.json")

module.exports = {
  name: 'help',
  description: 'help',

 userPerms:[],
 botPerms:[],


  run: async (client, message) => {
    
    message.reply({
        content: `
        # **Music Commands**
        \`play\` => play a song
        \`stop\` => stop a song
        \`pause\` => pause a song
        \`resume\` => resume a song
        \`volume\` => set volume for the song
        \`repeat\` => repeat the song
        \`autoplay\` => autoplay songs
        \`nowplaying\` => song are playing
        \`skip\` => skip a song

`
    })
  }
}