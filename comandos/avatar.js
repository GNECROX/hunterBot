const Discord = require("discord.js");
const { MessageAttachment } = require("discord.js");
const { profileImage } = require("discord-arts");

module.exports = {
			name: "avatar",
			alias: ["ava"],
            guildOnly: true,
            cooldown: 10,
	async execute( client, message, args ) {
    const discordUser = message.mentions.users.first() || message.author;
    const bufferImg = await profileImage(discordUser);
    const imgAttachment = new MessageAttachment(bufferImg, "profile.png");

    message.reply({ files: [imgAttachment] });
	},
};
