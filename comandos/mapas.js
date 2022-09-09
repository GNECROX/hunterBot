const Discord = require("discord.js");

module.exports = {
  name: "mapas",
  alias: [],
  async execute(client, message, args) {
    //[------------------------------------------MENUS DE MAPAS-----------------------------------------------------------------]
    //Menu Principal.
    const mapas = new Discord.MessageActionRow().addComponents(
      new Discord.MessageSelectMenu()
        .setCustomId("menu_1")
        //MAXVALUES: Determina la cantidad de Opciones que se pueden Seleccionar en el Menu.
        .setMaxValues(1)
        //OPTIONS: Son las Opciones del Menu a Seleccionar.
        .addOptions([
          {
            label: "Mapa MHF1",
            description: "Muestra los Mapas de Monster Hunter Freedom 1!",
            //VALUE: Es el Valor que Tomara el EXECUTE para hacer Reaccionar la Opcion escogida.
            value: "F1",
          },
          {
            label: "Mapa MHP3",
            description: "Muestra los Mapas de Monster Hunter Portable 3!",
            value: "P3",
          },
        ])
    );
    //Menu Principal.

    //Mapas del MONSTER HUNTER FREEDOM 1.
    const M_MHF1 = new Discord.MessageActionRow().addComponents(
      new Discord.MessageSelectMenu()
        .setCustomId("menu_2")
        .setMaxValues(1)
        .addOptions([
          {
            label: "Bosque y Colina",
            description: "Muestra el mapa del Bosque y Colina + Informacion!",
            value: "MF1_1",
          },
          {
            label: "Desierto",
            description: "Muestra el mapa del Desierto + Informacion!",
            value: "MF1_2",
          },
          {
            label: "Jungla",
            description: "Muestra el mapa de la Jungla + Informacion!",
            value: "MF1_3",
          },
          {
            label: "Volcan",
            description: "Muestra el mapa del Volcan + Informacion!",
            value: "MF1_4",
          },
          {
            label: "Pantano",
            description: "Muestra el mapa del Pantano + Informacion!",
            value: "MF1_5",
          },
        ])
    );
    //Aqui Acaba el Menu para Monster Hunter Freedom 1.

    //MAPAS DE MONSTER HUNTER PORTABLE 3RD.
    const M_MHP3 = new Discord.MessageActionRow().addComponents(
      new Discord.MessageSelectMenu()
        .setCustomId("menu_3")
        .setMaxValues(1)
        .addOptions([
          {
            label: "Picos Nublados",
            description: "Muestra el mapa del Picos Nublados + Informacion!",
            value: "MP3_1",
          },
          {
            label: "Desierto",
            description: "Muestra el mapa del Desierto + Informacion!",
            value: "MP3_2",
          },
          {
            label: "Bosque",
            description:
              "Muestra el mapa de los Bosque Inundado + Informacion!",
            value: "MP3_3",
          },
          {
            label: "Volcan",
            description: "Muestra el mapa del Volcan + Informacion!",
            value: "MP3_4",
          },
          {
            label: "Isla",
            description: "Muestra el mapa de Isla Desierta + Informacion!",
            value: "MP3_5",
          },
          {
            label: "Tundra",
            description: "Muestra el mapa de la Tundra + Informacion!",
            value: "MP3_6",
          },
        ])
    );
    //Aqui Acaba el Menu de Monster Hunter Portable 3rd.
    //[------------------------------------------MENUS DE MAPAS-----------------------------------------------------------------]

    //[------------------------------------------DATOS EMBED PARA LOS MENUS-----------------------------------------------------------------]
    //Creamos un EMBED personalizado para el Menu.
    const embed = new Discord.MessageEmbed()
      .setTitle("Bienvenido al Menu de Mapas de Puerto de Tanzia.")
      .setDescription("Escoge tu Juego para Mostrar los Mapas Disponibles!")
      .setColor("BLUE");
    //Terminamos el EMBED Personalizado y Creamos la Base de Datos para cada Opcion.

    //Si Selecciona F1 lanzara el Siguiente Embed.
    const e_f1 = new Discord.MessageEmbed()
      .setTitle("Mostrando los Mapas para MHF1")
      .setColor("WHITE");
    //Fin del Embed para F1.

    //Si Selecciona P3 lanzara el Siguiente Embed.
    const e_p3 = new Discord.MessageEmbed()
      .setTitle("Mostrando los Mapas para MHP3rd")
      .setColor("RED");
    //Fin del Embed para P3.

    //Mapas de MHF1.
    let bosqueycolinas = "https://i.imgur.com/TR8nWra.png";
    let desierto = "https://i.imgur.com/jfRdQWo.png";
    let jungla = "https://i.imgur.com/V385Om0.png";
    let volcan = "https://i.imgur.com/k6G3LGJ.png";
    let pantano = "https://i.imgur.com/jAiQH5A.png";
    //$
    const f1_byc = new Discord.MessageEmbed()
      .setTitle("Mostrando Bosque y Colinas")
      .setImage(bosqueycolinas);
    const f1_des = new Discord.MessageEmbed()
      .setTitle("Mostrando Desierto")
      .setImage(desierto);
    const f1_jg = new Discord.MessageEmbed()
      .setTitle("Mostrando Jungla")
      .setImage(jungla);
    const f1_vol = new Discord.MessageEmbed()
      .setTitle("Mostrando Volcan")
      .setImage(volcan);
    const f1_pan = new Discord.MessageEmbed()
      .setTitle("Mostrando Pantano")
      .setImage(pantano);
    //Mapas de MHF1 completado.

    //Mapas de Monster Hunter Portable 3rd.
    let p3_piconublado = "https://i.imgur.com/l9sGhd8.png";
    let p3_desierto = "https://i.imgur.com/wFgFeSp.png";
    let p3_bosque = "https://i.imgur.com/N0xdF6s.png";
    let p3_volcan = "https://i.imgur.com/mRmsC0S.png";
    let p3_isla = "https://i.imgur.com/0qVnBHX.png";
    let p3_tundra = "https://i.imgur.com/nFuLKCW.png";
    //$
    const p3_pn = new Discord.MessageEmbed()
      .setTitle("Mostrando Picos Nublados")
      .setImage(p3_piconublado);
    const p3_des = new Discord.MessageEmbed()
      .setTitle("Mostrando Desierto")
      .setImage(p3_desierto);
    const p3_bos = new Discord.MessageEmbed()
      .setTitle("Mostrando Bosque Inundado")
      .setImage(p3_bosque);
    const p3_vol = new Discord.MessageEmbed()
      .setTitle("Mostrando Volcan")
      .setImage(p3_volcan);
    const p3_is = new Discord.MessageEmbed()
      .setTitle("Mostrando Isla Desierta")
      .setImage(p3_isla);
    const p3_tun = new Discord.MessageEmbed()
      .setTitle("Mostrando Tundra")
      .setImage(p3_tundra);
    //Mapas de Monster Hunter Portable 3rd.
    //[------------------------------------------DATOS EMBED PARA LOS MENUS-----------------------------------------------------------------]

    //[------------------------------------------FILTRO, COLLECTOR y ENVIO DE LOS MENUs-----------------------------------------------------------------]
    //Crearemos el Filtro y los Collectores del o los Menus y luego enviamos el Embed junto al Menu.
    const m = await message.channel.send({
      embeds: [embed],
      components: [mapas],
    });
    //Filtramos al usuario que uso el comando.. para que solo funcione con este Usuario.
    const ifilter = (i) => i.user.id === message.author.id;
    //TIME: Sera el tiempo asignado.. para validar el comando.
    const collector = m.createMessageComponentCollector({
      filter: ifilter,
      time: 60000,
    });

    collector.on("collect", async (i) => {
      //Una ves filtrado y collecionado los Datos.. le hacemos una Variable y luego lo enviamos.
      //Se iterisa el VALUES con el Nombre del VALUE de cada Opcion.

      //Este Collector es para Freedom 1.
      if (i.values[0] === "F1") {
        await i.deferUpdate();
        i.editReply({ embeds: [e_f1], components: [M_MHF1] });
      } else {
        //Usaremos ELSE para poner OTRO menu segun el menu seleccionado anteriormente,
        //este menu tendra la lista.
        if (i.values[0] === "MF1_1") {
          await i.deferUpdate();
          i.editReply({ embeds: [f1_byc], components: [] });
        }
        if (i.values[0] === "MF1_2") {
          await i.deferUpdate();
          i.editReply({ embeds: [f1_des], components: [] });
        }
        if (i.values[0] === "MF1_3") {
          await i.deferUpdate();
          i.editReply({ embeds: [f1_jg], components: [] });
        }
        if (i.values[0] === "MF1_4") {
          await i.deferUpdate();
          i.editReply({ embeds: [f1_vol], components: [] });
        }
        if (i.values[0] === "MF1_5") {
          await i.deferUpdate();
          i.editReply({ embeds: [f1_pan], components: [] });
        }
      }

      //Este Collector es para Portable 3rd.
      if (i.values[0] === "P3") {
        await i.deferUpdate();
        i.editReply({ embeds: [e_p3], components: [M_MHP3] });
      } else {
        if (i.values[0] === "MP3_1") {
          await i.deferUpdate();
          i.editReply({ embeds: [p3_pn], components: [] });
        }
        if (i.values[0] === "MP3_2") {
          await i.deferUpdate();
          i.editReply({ embeds: [p3_des], components: [] });
        }
        if (i.values[0] === "MP3_3") {
          await i.deferUpdate();
          i.editReply({ embeds: [p3_bos], components: [] });
        }
        if (i.values[0] === "MP3_4") {
          await i.deferUpdate();
          i.editReply({ embeds: [p3_vol], components: [] });
        }
        if (i.values[0] === "MP3_5") {
          await i.deferUpdate();
          i.editReply({ embeds: [p3_is], components: [] });
        }
        if (i.values[0] === "MP3_6") {
          await i.deferUpdate();
          i.editReply({ embeds: [p3_tun], components: [] });
        }
      }
    });
    //[------------------------------------------FILTRO, COLLECTOR y ENVIO DE LOS MENUs-----------------------------------------------------------------]
  },
};
