const { ApplicationCommand, ApplicationCommandType } = require("discord.js");
var config = require("../../config.json")

module.exports = {
  name: 'repeat',
  description: 'help',

 userPerms:[],
 botPerms:[],


  run: async (client, message,args) => {
    if (!message.member.voice.channel) return message.reply({ content: `> ** يجب ان تكون في روم صوتي حقي**` });
    try {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`I'm not singing now to stop !`)
        let mode = null
switch (args[0]) {
  case 'off':
    mode = 0
    break
  case 'song':
    mode = 1
    break
}
mode = queue.setRepeatMode(mode)
mode = mode ? (mode === 'Repeat song') : 'Off'
message.channel.send(`repeat mode \`${mode}\``)
    }
    catch (e) {
        console.error(e)
        message.channel.send(`حدث خطا اثناء التشغيل !`)
    }
  }
}