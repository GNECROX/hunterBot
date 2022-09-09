const Discord = require("discord.js");

module.exports = {
			name: "channel",
			alias: ["cc"],
            guildOnly: true,
            cooldown: 10,
	execute( client, message, args ) {
        let nameC = args.join(' ');
        if (!nameC) return message.channel.send("*Debes poner un Nombre para el Canal!*");
        message.guild.channels.create(nameC)
    }
};