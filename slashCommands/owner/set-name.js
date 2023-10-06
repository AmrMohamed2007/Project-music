var config = require("../../config.json")
const { ApplicationCommandType } = require("discord.js");

module.exports = {
    name: 'set_name',
    description: 'change name for bot',
    type: ApplicationCommandType.ChatInput,
    options: [{ name: "name", description: "type name for your bot", type: 3, required: true }],

    /**
     * @param { import('discord.js').Client } client
     * @param { import('discord.js').CommandInteraction } Interaction
     */

    run: async (client, Interaction) => {
        const Name = Interaction.options.getString('name')
        if(!config.dev.includes(Interaction.user.id)) return;
        client.user.edit({username:Name}).then(() => {
           Interaction.reply({content:"Bot name updated successfully!"})
            }).catch((err) => {
                Interaction.reply({content:`${err.message}`})
            })
    
    }
}