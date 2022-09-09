const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
			name: "comandos",
			alias: ["cmd"],
            guildOnly: true,
            cooldown: 10,
	execute( client, message, args ) {
        const embed = new Discord.MessageEmbed()

        .setTitle("Lista de Comandos")
        .setDescription("Estos son los Comandos Disponibles.\n[&!] < PREFIX\n[/] < SLASH")
        .setColor("RANDOM")
        .addFields(
            {
                name: "[&!] sugerencia",
                value: "Envia tu Sugerencia al Canal Especificado.\n[Alias: sug]"
            }, 
            {
                name: "[&!] avatar",
                value: "Muestra tu Avatar o el de otro Usuario.\n[Alias: ava]"
            }, 
            {
                name: "[&!] Server",
                value: "Muestra Informacion sobre el Servidor.\n[No Tiene Alias]"
            }, 
            {
                name: "[&!] Comandos",
                value: "Muestra esta lista de Comandos.\n[Alias: cmd]"
            }, 
            {
                name: "[/] beep",
                value: "Calcula el PING del Bot.\n[No Tiene Alias]"
            }, 
            {
                name: "[/] Snipe",
                value: "Mira el ULTIMO mensaje borrado.\n[No Tiene Alias]"
            }, 
            {
                name: "[/] Rank",
                value: "Muestra Informacion sobre tu Rank.\n[No Tiene Alias]"
            }
        )
        .setFooter({ text: `Comando Usado por: ${message.author.tag}`})
        message.channel.send({ embeds: [embed] })
    }
};