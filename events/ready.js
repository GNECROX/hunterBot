const { ClientUser } = require("discord.js");

module.exports = {
  name: "ready",
  run: async ( client ) => {
  //async execute(client) {
    setInterval(function () {
      const frases = [
        "**Modeando el Trigger, para que pueda Volar!**",
        "**Distrayendo Una Manzana!**",
        "**Comprando Helados en Ebay!** 😎 ",
        "**Soy muy Sexy para morir!**",
        "**Siendo Akudama x1 Dia!** 😎 ",
        "**Cuando 2 admins compiten.. es una Batalla de staples!**",
        "**Dreekiu es un Pejelagarto!** 🤣",
        "**Ay quien dice que lil deja los Juegos.. Yo digo que solo saca imagenes de Google ,v**",
        "**La Duracion recomendada antes de Analizar un Juego.. es de 7,200s** 😎 ",
        "**Usa el / para ver Comandos Ocultos a Simple Vista!**",
      ];
      let result = Math.floor(Math.random() * frases.length);
      client.user.setActivity(frases[result]);
    }, 30000);
    console.log("Bot Listo y Funcionando!");
  },
};
