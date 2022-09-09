const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('usuario')
		.setDescription('Muestra tu informacion de Usuario.'),
	async run( client, interaction ) {
		return interaction.reply(`Nombre de Usuario: ${interaction.user.username}\nID de Usuario: ${interaction.user.id}`);
	},
};
