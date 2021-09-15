const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let gifs = [
        "https://media.giphy.com/media/kaq6GnxDlJaBq/giphy.gif",
        "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
        "https://media.giphy.com/media/xT0xeuOy2Fcl9vDGiA/giphy.gif",
        "https://media.giphy.com/media/CPskAi4C6WLHa/giphy.gif",
        "https://media.giphy.com/media/zkSFsZpQMZuG4/giphy.gif",
        "https://media.giphy.com/media/blPpTGDhn6hEI/giphy.gif",
        "https://media.giphy.com/media/gzQ1X1Fk25UwE/giphy.gif",
        "https://media.giphy.com/media/XQvhpuryrPGnK/giphy.gif",
        "https://media.giphy.com/media/i0QxELpBECp4Q/giphy.gif",
        "https://media.giphy.com/media/zgGrSqSi3SSqs/giphy.gif",
        "https://media.giphy.com/media/zZL4Oqk1PljdC/giphy.gif",
        "https://media.discordapp.net/attachments/399448944889036801/620655310587297818/8a5aeca0-ebdf-4929-96fa-90b87d411496.gif",
        "https://media.discordapp.net/attachments/399448944889036801/597134826683760651/6RbI.gif",
        "https://images-ext-2.discordapp.net/external/neNZoWY9wgXOgccyAoUFaFXgJ2cTuDiwUaY3tZCicR4/https/cdn.weeb.sh/images/Hygd3f8Qw-.png",
        "https://images-ext-2.discordapp.net/external/g3ky0gPj9EG4V_RqR9colfGVUFOwEwxpywik-_wjW5A/https/cdn.weeb.sh/images/HJ6FfLXPW.jpeg",
        "https://images-ext-1.discordapp.net/external/tMVruwgZPczHgyD5280st0Lz567dXfERCWTlt_4BB9E/https/cdn.weeb.sh/images/r1J5M8mvW.gif",
        "https://media.discordapp.net/attachments/399448944889036801/597134826683760650/57acb80bb32bc.gif?width=400&height=300",
        "https://media.discordapp.net/attachments/399448944889036801/608119519151521847/0a83428471cfe28ed541434addf9421b.gif?width=400&height=225",
        "https://images-ext-2.discordapp.net/external/sp4udAUh6OWy3l8tzj6eZZRRGbrivtLJ72ndOd9UK1I/https/cdn.weeb.sh/images/rkgUiM8mwZ.jpeg?width=400&height=225",
        "https://media.discordapp.net/attachments/399448944889036801/656908484931092480/9042993c-f4da-420a-ae78-1043e5a60ba4.gif?width=400&height=225",
        "https://images-ext-2.discordapp.net/external/1qx-IeTCeAdwjINX0Ru8Ah8yVyiSeBR8DzhYfDJNp5E/https/cdn.weeb.sh/images/SywoM8Qw-.png?width=339&height=301",
        "https://media.giphy.com/media/PkVHsFmmLeBfa/giphy.gif",
        "https://media.giphy.com/media/8mndEBLsg9Whg2Sduv/giphy.gif",
        "https://media.giphy.com/media/Qe5oD5aXjEbKw/giphy.gif",
        "https://media.giphy.com/media/l41JKqbDDbH0ssXsI/giphy.gif",
        "https://media.giphy.com/media/sauYjWmJJ18xW/giphy.gif",
      ] 
    
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**Esta Confundido..**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
}   
