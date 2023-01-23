const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild

		//variables are used here to enable `` text
		var username = interaction.user.username;
		var joinTime = interaction.member.joinedAt;

		await interaction.reply("You are `" + username + "`, and you joined the server on `" + joinTime + "`");
	},
};
