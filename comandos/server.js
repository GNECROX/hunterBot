const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const { Guild } = require("discord.js");

module.exports = {
  name: "server",
  alias: ["sv"],
  async execute( message, interaction ) {
    const embed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Servidor de GNECROX#7557")
      .setURL("https://discord.gg/DuN5KBgMaa")
      .setDescription("**Descripcion del Servidor.**")
      .addField(`Cantidad de Usuarios: `, `${interaction.guild.memberCount}`, true)
      .addField(
        "Invitacion al Servidor: ",
        `[Hunter's Grace](https://discord.gg/vtkMHm37vq)`
      )
      .setTimestamp();
      await interaction.reply({ embeds: [embed] });
  },
};
