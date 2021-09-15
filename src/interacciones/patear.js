const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let user = message.mentions.users.first();
  
    let gifs = [
        "https://media1.tenor.com/images/1ea2a1ac708db7d60a1997a54015f90b/tenor.gif?itemid=7680862",
        "https://media1.tenor.com/images/a667a119e4d83ba0793aea6cf6c2537b/tenor.gif?itemid=12942758",
        "https://media1.giphy.com/media/12kVD9BykU7IiI/source.gif",
        "https://media1.tenor.com/images/a78d54cea15f59bdba220ba032881381/tenor.gif?itemid=9257319",
        "https://media2.giphy.com/media/wOly8pa4s4W88/source.gif",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/053/707/042.gif",
        "https://data.whicdn.com/images/318687183/original.gif",
        "https://i.redd.it/thrde7m15d931.gif",
        "https://i.kym-cdn.com/photos/images/original/001/054/543/c22.gif",
    ]

  if(!user) return message.channel.send('Mencione a un usuario.');
  if(user === message.author) return message.channel.send('¿Te podras patear a ti mismo?');
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Pateo a** "+user+"**!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
}