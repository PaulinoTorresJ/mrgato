

const Discord = require("discord.js")
exports.run = (client, message, args) => {

if (!message.member.hasPermission('ADMINISTRATOR ')) return;
  
guild.members.forEach(member => {
    if (member.roles.has("No Registrado")){
        member.kick()
    }
})

message.channel.send("Se ha expulsado a los usuarios no registrados");

};
