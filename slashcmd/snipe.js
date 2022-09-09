const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const snipe = require("../schemas/snipeschema")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('snipe')
		.setDescription('Muestra el Ultimo Mensaje Eliminado!'),
	async run( client, interaction ) {
        let data = await snipe.findOne({ channelId: interaction.channel.id })
        if(!data){
            interaction.reply({ content: "No se ha Borrado Nada Ultimamente.", ephemeral: true })
        } else {
        const embed = new Discord.MessageEmbed()
        .setTitle(`Mensaje de ${data.author}`)
        .setDescription(`${data.message}`)
        .addField("Tiempo", `<t:${data.time}:R>`, true)
        .addField("Canal", `<#${data.channelId}>`, true)
        .setColor("RANDOM")
        .setTimestamp()

        interaction.reply({ embeds: [embed] })
        }
        
    }
}