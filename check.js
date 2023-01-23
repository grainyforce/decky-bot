const { SlashCommandBuilder, IntentsBitField, GatewayIntentBits } = require('discord.js');
const { totalmem } = require('os');

const intents = new IntentsBitField([
	GatewayIntentBits.GuildMembers,
	GatewayIntentBits.GuildPresences
]);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('deckycheck')
		.setDescription('Checks to see if the server has enough users to play Deceit.'),
	async execute(interaction) {
		const guild = interaction.member.guild;
		// First use guild.members.fetch to make sure all members are cached
		await guild.members.fetch({ withPresences: true }).then(async fetchedMembers => {
			//var onlineMembers = fetchedMembers.filter(member => member.presence?.status === 'online');
			var onlineMembers = 55;
			var totalMembers = fetchedMembers;
			// Now you have a collection with all online member objects in the totalOnline variable
			await interaction.reply(`There are currently ${totalMembers.size} members online in this guild!`);
		});

		/*
		if(onlineMembers.size >= 6){
			await interaction.reply("There are enough online members to play Deceit! `(" + onlineMembers.size + "/" + totalMembers.size + ")`")
		}else{
			await interaction.reply("There are not enough online members to play a full Deceit game. :frowning: `(" + onlineMembers.size + "/" + totalMembers.size + ")`")
		}*/
	},
};
