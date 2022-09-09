const Discord = require("discord.js");

module.exports = {
			name: "autorol",
			alias: ["rol"],
	async execute( client, message, args ) {
        const row = new Discord.MessageActionRow()
        //ADDCOMPONENTS: Nos permitira crear Uno o Mas Botones, que se pueden seperar con [], [] < para mas de 1 Botom.. Si solo requerimos 1 Botom no es Necesario.
        .addComponents(
            //$Boton #1
            [
                new Discord.MessageButton()
                //CUSTOM ID: Es la ID o Identificador del Botom.
                .setCustomId("b1")
                //LABEL es el Nombre del Botom.
                .setLabel("Color_1")
                //STYLE se encarga de Añadir un Color al Botom. Los Estilos son: 
                //PRIMARY [Azul], SECUNDARY [Griss], SUCCES [Verde], DANGER [Rojo], LINK [Para ir a una URL].
                .setStyle("SUCCESS")
                //EMOJI permite añadir un Emoji al Botom.
                //.setEmoji("👍")
            ],
            //$Boton #1

            //$Boton #2
            [
                new Discord.MessageButton()
                .setCustomId("b2")
                .setLabel("Color_2")
                .setStyle("SUCCESS")
            ],
            //$Boton #2

            //$Boton #3
            [
                new Discord.MessageButton()
                .setCustomId("b3")
                .setLabel("Color_3")
                .setStyle("SUCCESS")
            ],
            //$Boton #3

            //$Boton #4
            [
                new Discord.MessageButton()
                .setCustomId("b4")
                .setLabel("Color_4")
                .setStyle("SUCCESS")
            ],
            //$Boton #4

            //$Boton #5
            [
                new Discord.MessageButton()
                .setCustomId("b5")
                .setLabel("Color_5")
                .setStyle("SUCCESS")
            ],
            //$Boton #5
        )

        const embed = new Discord.MessageEmbed()
        .setTitle("Auto_Roles")
        .setDescription("Hola! Aqui Puedes Escoger tus Roles.")
        .addFields({
            name: "Rol 1️⃣",
            value: "<@&985595775176302692>",
            },
            {
            name: "Rol 2️⃣",
            value: "<@&985595866641465344>",
            },
            {
            name: "Rol 3️⃣",
            value: "<@&989635340555943946>",
            },
            {
            name: "Rol 4️⃣",
            value: "<@&989635390338113576>",
            },
            {
            name: "Rol 5️⃣",
            value: "<@&989635413754929234>",
            })
        .setColor("RANDOM")
        .setFooter({ text: `Comando Usado por: ${message.author.tag}`})
        message.channel.send({ embeds: [embed], components: [row] })
    }
};