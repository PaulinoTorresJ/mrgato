const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let user = message.mentions.users.first();
    let gifs = [
        "https://media.giphy.com/media/pVBwnPDeIpd3wToeQ2/giphy.gif",
        "https://media.giphy.com/media/2wZ07PIbTSbenXUTxM/giphy.gif",
        "https://media.giphy.com/media/W5Zf6k7mbnMRWnicfg/giphy.gif",
        "https://media.giphy.com/media/afXX9ioU7XCjS/giphy.gif",
        "https://media.giphy.com/media/pq1PquPVI8M8M/giphy.gif",
        "https://media.giphy.com/media/5xaOcLyxnN1UxgqDTuU/giphy.gif",
        "https://images-ext-2.discordapp.net/external/VNHUC308gO5atSWYEkrq_vnJNMj2cdseaXMbx-qosg8/https/cdn.nekos.life/feed/feed_009.gif?width=400&height=207",
        "https://images-ext-2.discordapp.net/external/G4dY31eCpedsy6S4r0CbXX5X8dY73OaL23BeariedVA/https/cdn.nekos.life/feed/feed_008.gif?width=400&height=300",
        "https://images-ext-1.discordapp.net/external/qqFAzlrH3iTyhNZSsH0jfK7AAcMt4I75G5G0C69yk_0/https/cdn.nekos.life/feed/feed_017.gif?width=400&height=225",
        "https://images-ext-1.discordapp.net/external/clGX4GPfQr7wXPh62n5oPNpA7goIQuqTznDAJypvgJc/https/cdn.nekos.life/feed/feed_001.gif?width=400&height=225",
        "https://images-ext-1.discordapp.net/external/EXCeATaurEsrH2AmgcuOqCFCDnvhgk5SKVw5qrJ6On4/https/cdn.nekos.life/feed/feed_015.gif?width=400&height=224",
        "https://images-ext-1.discordapp.net/external/thL2udnBUClTQQdL6js4Qb3THR8lb4A0hJG_jj3edz0/https/cdn.nekos.life/feed/feed_003.gif?width=400&height=225",
        "https://images-ext-1.discordapp.net/external/9-jk08uNYiGV457N84CrrSViVFn7Q04R-_Y-MV4WfJE/https/cdn.nekos.life/feed/feed_002.gif?width=400&height=248",
        "https://media.discordapp.net/attachments/399448944889036801/591800132878729236/e0c932b40bce1dc235c11c1e7a29b8f1.gif?width=400&height=224",
      ] 

      if(user === message.author) return message.channel.send('¿Quieres alimentarte a ti mismo?');
      if (user){ // bailar con
      var embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription("**¡Alimento a **"+user+"**!**")
      .setColor(3447003)
      .setTimestamp()
      .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
      message.channel.send({embed});
      } else {
      var embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription("**¡Toma un poco de mi comida!**")
      .setColor(3447003)
      .setTimestamp()
      .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
      message.channel.send({embed});
      }
    }