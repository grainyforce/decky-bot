const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Notifies @everyone to play Deceit.'),
	async execute(interaction){
		interaction.channel.send('@everyone :drop_of_blood: A Deceit Game is Starting! :drop_of_blood: React to this message to cast your presence!').then(sentMessage => {
			// Unicode emoji
			sentMessage.react('🗿');
		});
	},
}
