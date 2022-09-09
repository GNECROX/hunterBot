const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('beep')
		.setDescription('Beep!'),
	async run( client, interaction ) {
		interaction.reply({ content: `Beep! **${client.ws.ping}mss**` })
	},
};
