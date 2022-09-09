const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('borrar')
		.setDescription('Borra hasta 99 Mensajes.')
		.addIntegerOption(option => option.setName('amount').setDescription('Number of messages to prune')),
	async run( client, interaction ) {
		const amount = interaction.options.getInteger('amount');

		if (amount <= 1 || amount > 100) {
			return interaction.reply({ content: 'Debes colocar un Valor del 1 al 99.', ephemeral: true });
		}
		await interaction.channel.bulkDelete(amount, true).catch(error => {
			console.error(error);
			interaction.reply({ content: 'Parece que hay Mensaje imborrables\n [Recuerda que los mensajes con mas de 4 semanas, no se pueden borrar!] prueba de nuevo!', ephemeral: true });
		});

		return interaction.reply({ content: `Se han borrado exitosamente \`${amount}\` mensajes.`, ephemeral: false });
	},
};
