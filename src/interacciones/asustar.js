const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let user = message.mentions.users.first();
  
    let gifs = [
        "https://gifimage.net/wp-content/uploads/2018/10/anime-scared-gif-3.gif",
        "https://media3.giphy.com/media/1rkP9M3TShHeU/source.gif",
        "https://media.giphy.com/media/kT7VY5eUanako/giphy.gif",
        "https://i.gifer.com/NUWI.gif",
        "https://gifimage.net/wp-content/uploads/2018/05/scared-anime-girl-gif-10.gif",
        "https://media.tenor.com/images/6e69348509544a2654cccc99ead3fd36/tenor.gif",
        "https://media.giphy.com/media/51Uiuy5QBZNkoF3b2Z/giphy.gif",
        "https://media.giphy.com/media/KmTnUKop0AfFm/giphy.gif",
        "https://media.giphy.com/media/11985ZD4lblPCo/giphy.gif",
        "https://media.giphy.com/media/SUBxai0moNW7K/giphy.gif",
        "https://media.giphy.com/media/9kKlRx7qpUGze/giphy.gif",
        "https://media.giphy.com/media/ENt72LgUE2gV2/giphy.gif",
        "https://media.giphy.com/media/cEOG7nGA7448M/giphy.gif",
        "https://media.giphy.com/media/cEOG7nGA7448M/giphy.gif",
        "https://media.tenor.com/images/91843c93a618cbed9741ee1531025639/tenor.gif",
        "http://cdn.lowgif.com/full/d6fdb7db1e65f336-yuri-kuma-arashi-anime-girl-gif-wifflegif.gif",
        "https://thumbs.gfycat.com/LividUnrealisticIndianringneckparakeet-size_restricted.gif",
      ] 
  if(!user) return message.channel.send('Mencione a un usuario.');
  if(user === message.author) return message.channel.send('Tienes miedo o que?');
var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Asusto a** "+user+"**!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)])
  message.channel.send({embed});
}