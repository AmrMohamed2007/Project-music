const { ApplicationCommand, ApplicationCommandType } = require("discord.js");
var config = require("../../config.json")

module.exports = {
  name: 'skip',
  description: 'help',

 userPerms:[],
 botPerms:[],


  run: async (client, message) => {
    if (!message.member.voice.channel) return message.reply({ content: `> ** يجب ان تكون في روم صوتي حقي**` });
    try {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`I'm not singing now to stop !`)
        const song = await queue.skip()
    }
    catch (e) {
        console.error(e)
        message.channel.send(`حدث خطا اثناء التشغيل !`)
    }
  
  }
}