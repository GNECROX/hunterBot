const { SlashCommandBuilder } = require("@discordjs/builders");
const { Rank, canvacord } = require("canvacord");
const Discord = require("discord.js");
const levels = require("../schemas/levelsSchema");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rank")
    .setDescription("Muestra tu Rango en el Servidor.")
    .addUserOption((option) =>
      option
        .setName("usuario")
        .setDescription("El Rank de otro Usuario.")
    ),
  async run( client, interaction) {
    const member = interaction.options.getMember('usuario') || interaction.member;

    const data = await levels.findOne({
      guildId: interaction.guild.id,
      userId: member.user.id,
    });
    if (!data)
      return interaction.reply({
        content: "Usuario sin Datos en el RANK!",
        ephemeral: true,
      });

    let dataGlobal = await levels
      .find({ 
        guildId: interaction.guild.id, 
        userId: member.user.id, 
      })
      .sort([["xp", "descending"]])
      .exec();
    if (!dataGlobal)
      return interaction.reply({
        content: "NO existen datos usuario en este Servidor para el RANK.",
        ephemeral: true,
      });

    const rank = new Rank()
      .setAvatar(member.user.displayAvatarURL({ format: "png", size: 1024 }))
      .setCurrentXP(data.xp)
      .setRequiredXP(data.limit)
      .setLevel(data.level)
      .setStatus(member.presence ? member.presence.status : "offline")
      .setProgressBar(["#FF0000", "#0000FF"], "GRADIENT")
      .setUsername(member.user.username)
      .setDiscriminator(member.user.discriminator)
      .setRank(dataGlobal.findIndex((dataUser) => dataUser.userId === member.user.id) + 1);

    const buffer = await rank.build()

    const attachment = new Discord.MessageAttachment(buffer, "rank.png");

    interaction.reply({ files: [attachment] });
  },
};
