const Discord = require("discord.js")
exports.run = (client, message, args) => {
    let user = message.mentions.users.first();  
    let gifs = [
      "https://media1.tenor.com/images/1236e0d70c6ee3ea91d414bcaf9f3aa4/tenor.gif?itemid=5015314",
      "https://media1.tenor.com/images/fd46d903c4a20a7e82519a78f15b2750/tenor.gif?itemid=8562185",
      "https://i.imgur.com/H7Ok5tn.gif",
      "https://i.pinimg.com/originals/ec/d5/db/ecd5db48f5bdfb9b67f86f2094554839.gif",
      "https://media.giphy.com/media/ovbDDmY4Kphtu/giphy.gif",
      "https://gifimage.net/wp-content/uploads/2017/09/anime-poke-gif-9.gif",
      "https://media1.tenor.com/images/76e377271bf00ba61d954b2752713596/tenor.gif?itemid=5075308",
      "https://66.media.tumblr.com/tumblr_m8pu2plq9m1roiqt7o1_400.gifv",
      "https://thumbs.gfycat.com/BriskRemorsefulFlies-size_restricted.gif",
      "https://media.giphy.com/media/Vfie0DJryAde8/giphy.gif",
      "https://media.giphy.com/media/TYAYywTcAb4Iw/giphy.gif",
      "https://media.giphy.com/media/aZSMD7CpgU4Za/giphy.gif",
      "https://media.giphy.com/media/LXTQN2kRbaqAw/giphy.gif",
      "https://media.giphy.com/media/PkR8gPgc2mDlrMSgtu/giphy.gif",
      "https://media.giphy.com/media/3ohfFH3gJpepwS5DEY/giphy.gif",
      "https://media.giphy.com/media/3oEjI49ChsFQwX7VBK/giphy.gif",
      "https://media.indiedb.com/images/groups/1/25/24269/ezgif.com-a0f7eccd83.gif",
              ] 
  if(!user) return message.channel.send('Mencione a un usuario.');
  if(user === message.author) return message.channel.send('¡¿No tienes algo mejor que hacer?!');
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Molesta a** "+user+"**!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)])
  message.channel.send({embed});
}

