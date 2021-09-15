const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let gifs = [
       "https://media.giphy.com/media/P0RWkdsRpK7ss/giphy.gif",
       "https://media.giphy.com/media/QBC5foQmcOkdq/giphy.gif",
       "https://media.giphy.com/media/Nf2PbfpGWSeKQ/giphy.gif",
       "https://media.giphy.com/media/DKqH1q9gN5AKA/giphy.gif",
       "https://media.giphy.com/media/2lQCBjuFMLCOvXno4l/giphy.gif",
       "https://media.giphy.com/media/ziO6FTlG4haUg/giphy.gif",
       "https://media.giphy.com/media/3BR9JfSiZOp6E/giphy.gif",
       "https://media.giphy.com/media/1mgpdUbUyT7z0olfmq/giphy.gif",
       "https://media.giphy.com/media/6mlQKvOnONCLXqzv29/giphy.gif",
       "https://media.giphy.com/media/1xNDVX4DV6B5vo6unw/giphy.gif",
       "https://media.giphy.com/media/Diym3aZO1dHzO/giphy.gif",
       "https://media.giphy.com/media/3DsFg62AqXwBVn1AQh/giphy.gif",
       "https://media.giphy.com/media/3o6gDPuHHdJxx3QmHe/giphy.gif",
       "https://media.giphy.com/media/KsPC9t0ToZhqU/giphy.gif",
       "https://media.giphy.com/media/AQz3wCDgDX3HO/giphy.gif",
       "https://media.giphy.com/media/TnPAmP7OLTaeY/giphy.gif",
       "https://media1.tenor.com/images/55df89598ea4201532c6396974ad9004/tenor.gif",
       "https://i.pinimg.com/originals/d0/5b/2a/d05b2aad6a19944ba378d8e365851f00.gif",
       "https://media1.tenor.com/images/b3c119a935c584ef2e4679312d2a412d/tenor.gif",
      ] 
    
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**Esta aplaudiendo. .**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
}   