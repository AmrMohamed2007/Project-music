const { ApplicationCommand, ApplicationCommandType } = require("discord.js");
var config = require("../../config.json")

module.exports = {
  name: 'set_avatar',
  description: 'change avatar for bot',
  type: ApplicationCommandType.ChatInput,
  options: [{ name: "avatar", description: "type link avatar", type: 3, required: true }],

  /**
   * @param { import('discord.js').Client } client
   * @param { import('discord.js').CommandInteraction } Interaction
   */

  run: async (client, Interaction) => {
      const Name = Interaction.options.getString('avatar')
      if(!config.dev.includes(Interaction.user.id)) return;      client.user.edit({avatar:Name}).then(() => {
         Interaction.reply({content:"Bot avatar updated successfully!"})
          }).catch((err) => {
              Interaction.reply({content:`${err.message}`})
          })
  
  }
}