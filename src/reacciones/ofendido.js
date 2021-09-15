const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let gifs = [
       "https://media.giphy.com/media/l0MYRr2MaX21xL8CQ/giphy.gif",
       "https://media.giphy.com/media/has1WKhoorwLS/giphy.gif",
       "https://media.giphy.com/media/1vZepLv7L9dTRJ7y9M/giphy.gif",
       "https://media.giphy.com/media/mIZr3jYOo0MbzPeqeN/giphy.gif",
       "https://media.giphy.com/media/pCMrNOFJ2cmu4/giphy.gif",
       "https://media.giphy.com/media/dC9I6hjH33wiuNXG0D/giphy.gif",
       "https://media.giphy.com/media/iyfeJqd6NLNK0/giphy.gif",
       "https://media.giphy.com/media/Jp4e2a1aSnrJ6/giphy.gif",
       "https://media.giphy.com/media/seUvFGNK0cQJG/giphy.gif",
       "https://media.giphy.com/media/BfGSgzHlsELtu/giphy.gif",
       "https://media.giphy.com/media/3o6Mbp4V7j2v6K5PTG/giphy.gif",
      ] 
    
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**Se siente ofendido. . .**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
}    