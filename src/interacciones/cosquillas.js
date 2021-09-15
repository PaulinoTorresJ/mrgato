const Discord = require("discord.js")
exports.run = (client, message, args) => {
    let user = message.mentions.users.first();  
    let gifs = [
            "https://media1.tenor.com/images/05a64a05e5501be2b1a5a734998ad2b2/tenor.gif?itemid=11379130",
            "https://media1.tenor.com/images/d38554c6e23b86c81f8d4a3764b38912/tenor.gif?itemid=11379131",
            "https://thumbs.gfycat.com/NaiveFrailBushsqueaker-size_restricted.gif",
            "https://media1.tenor.com/images/16662667791fc3275c25db595fdf89f8/tenor.gif?itemid=12374065",
            "https://media1.tenor.com/images/fea79fed0168efcaf1ddfb14d8af1a6d/tenor.gif?itemid=7283507",
            "https://thumbs.gfycat.com/BlandMassiveCranefly-size_restricted.gif",
            "https://i.imgur.com/6VniMLU.gif",
            "https://i.pinimg.com/originals/86/71/4f/86714fe4b8235be518273095b4eacc38.gif",
            "https://i.gifer.com/R6VH.gif",
            "https://media1.tenor.com/images/193f5b35611a82dd205d829c75f546f4/tenor.gif?itemid=15515147",
            "https://media1.tenor.com/images/025ae0bda72a0640aa4cd45ed5325067/tenor.gif?itemid=14386292",
            "https://66.media.tumblr.com/ba913c0d21916e57b846e93b783cab39/tumblr_o505jxtnWk1vpbklao4_500.gif",
            "https://thumbs.gfycat.com/DaringGrossJellyfish-max-1mb.gif",
            "http://nagatoyuki.dangeru.net/wp-content/uploads/2014/12/neptunia-is-coming.gif",
            "https://media.giphy.com/media/Ycr587EkQo8KY/giphy.gif",
            "https://media.giphy.com/media/7sC5l8ZZKMzXG/giphy.gif",
            "https://media.giphy.com/media/H2GX5Ik1ILy5q/giphy.gif",
            "https://media.giphy.com/media/dRvjN0O9rXA0U/giphy.gif",
               ] 
  if(!user) return message.channel.send('Mencione a un usuario.');
  if(user === message.author) return message.channel.send('Aunque  quisieras no te puedes hacer cosquillas a ti mismo');
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**¡Le hizo cosquillas** "+user+"**!**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)])
  message.channel.send({embed});
}