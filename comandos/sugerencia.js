const Discord = require("discord.js");

module.exports = {
			name: "sugerencia",
			alias: ["sug"],
            guildOnly: true,
            cooldown: 10,
	async execute( client, message, args ) {
        let canal = client.channels.cache.get('984497378910429234');
        let msg = args.join(' ');
        if (!msg) return message.channel.send("*Debes escribir el Mensaje!*")
        setTimeout(() => message.delete(), 10000);
        const embed = new Discord.MessageEmbed()
            .setDescription(`Nueva Sugerencia por: ${message.author.tag}`)
            .addField("Sugerencia: ", `${msg}`)
            .setColor("WHITE");
       
        message.channel.send({ content: `**Sugerencia Enviada al Canal:** ${canal}` })
        canal.send({ embeds: [embed] }).then(m => {
            m.react('✅')
            m.react('⛔')
        })        
    }
};