const Discord = require("discord.js")
exports.run = (client, message, args) => {

if (!message.member.roles.find(r => r.name === "〘👑〙Staff")) return;
  
let user = message.mentions.users.first();
let user2 = message.guild.member(user);

let texto = args.slice(1).join(' ');

user2.send(":warning: **__Has recibido una infracción__** :warning:("+user+")\n\n→ **Servidor:** `CatChat`\n**→ Motivo:** `"+ texto+"`"+"\n\nModera tu comportamiento para evitar futuras infracciones.");
user2.send("");

var embed = new Discord.RichEmbed()
.setColor("#f22b46")
.setDescription("⚠️ El usuario " + user + " ha sido infraccionado, motivo: " +"`"+texto+"`")
.setColor(3447003)
message.channel.send({embed});

};
