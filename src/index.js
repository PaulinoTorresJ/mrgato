/////////////////////////////////////// MegaDB
const db = require('megadb');

let prefix_db = new db.crearDB("prefixes");
let logs_db = new db.crearDB("channellogs")
///////////////////////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

///////////////////////////////////////
// Cargar carpetas
//admin
client.on('message',async message => {
  if (!message.guild) return;
  if (message.member.bot) return;
let prefix;
if(prefix_db.tiene('${message.guild.id}')) {  
prefix = await prefix_db.obtener('${message.guild.id}')
} else {
prefix = "+"
}
if (!message.content.startsWith(prefix)) return;    
  const args = message.content.slice(prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();   
  //
  try {
    let adm_comando = require("./admin/" + command + ".js");
    if (!adm_comando) return;
    adm_comando.run(client, message, args);
  } catch (err) {
    client.channels.find(c => c.id == "536997103356870677").send("```" + err + "```");
  } finally {};
});
// Reacciones
client.on('message',async message => {
  if (!message.guild) return;
  if (message.member.bot) return;
let prefix;
if(prefix_db.tiene('${message.guild.id}')) {  
prefix = await prefix_db.obtener('${message.guild.id}')
} else {
prefix = "+"
}
if (!message.content.startsWith(prefix)) return;    
  const args = message.content.slice(prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();   
  //
  try {
    let comando = require("./reacciones/" + command + ".js");
    if (!comando) return;
    comando.run(client, message, args);
  } catch (err) {
    client.channels.find(c => c.id == "536997103356870677").send("```" + err + "```");
  } finally {};
});
// Interacciones

client.on('message',async message => {
  if (!message.guild) return;
  if (message.member.bot) return;
let prefix;
if(prefix_db.tiene('${message.guild.id}')) {  
prefix = await prefix_db.obtener('${message.guild.id}')
} else {
prefix = "+"
}
if (!message.content.startsWith(prefix)) return;    
  const args = message.content.slice(prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();   
  //
  try {
    let interacciones_comando = require("./interacciones/" + command + ".js");
    if (!interacciones_comando) return;
    interacciones_comando.run(client, message, args);
  } catch (err) {
    client.channels.find(c => c.id == "536997103356870677").send("```" + err + "```");
  } finally {};
});

//////////////////////////////////////
// Utilidad
client.on('message',async message => {
  if (!message.guild) return;
  if (message.member.bot) return;
let prefix;
if(prefix_db.tiene('${message.guild.id}')) {  
prefix = await prefix_db.obtener('${message.guild.id}')
} else {
prefix = "+"
}
if (!message.content.startsWith(prefix)) return;    
  const args = message.content.slice(prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();   
  //
  try {
    let interacciones_comando = require("./utilidad/" + command + ".js");
    if (!interacciones_comando) return;
    interacciones_comando.run(client, message, args);
  } catch (err) {
    client.channels.find(c => c.id == "536997103356870677").send("```" + err + "```");
  } finally {};

});
//////////////////////////////////////
// Divertidos
client.on('message',async message => {
if (!message.guild) return;
if (message.member.bot) return;
let prefix;
if(prefix_db.tiene('${message.guild.id}')) {  
prefix = await prefix_db.obtener('${message.guild.id}')
} else {
prefix = "+"
}
if (!message.content.startsWith(prefix)) return;    
const args = message.content.slice(prefix.length).split(/ +/g);
const command = args.shift().toLowerCase();   
//
try {
  let interacciones_comando = require("./divertidos/" + command + ".js");
  if (!interacciones_comando) return;
  interacciones_comando.run(client, message, args);
} catch (err) {
  client.channels.find(c => c.id == "536997103356870677").send("```" + err + "```");
} finally {};

});
//////////////////////////////////////
let sector = 0;
var puntero = "";

setInterval(() => { ////// HORAS
    // FUNCION
    function tiempo(offset) {
        var d = new Date();
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        var nd = new Date(utc + (3600000*offset));
        //
        var minutos = nd.getMinutes(); 
        if (minutos < 10){ var minutos_fix = "0"+minutos}
        else {var minutos_fix = minutos;}
        //
        var horas = nd.getHours();
        if (horas > 11) var mm = "p. m.";
        else {var mm = "a. m.";}
        //
        var horas_fix = horas%12;
        if (horas_fix == 0) horas_fix = 12;
        //
        return horas_fix+":"+minutos_fix+" "+mm;
    }
    var d2 = new Date();
    //var dia = d2.getDay();   
    //var mes = d2.getMonth();
    /// Vars
    const horas = [
        puntero+"Mexico: "+tiempo('-5'),
        puntero+"Colombia: "+tiempo('-5'),
        puntero+"Argentina: "+tiempo('-3'),
        puntero+"Venezuela: "+tiempo('-4'),
        puntero+"España: "+tiempo('+1'),
        ];
        // Temporizador
          if (sector == 4) sector = 0;
          else {sector ++;}
          //
          client.channels.get("658544302846115872").setName(horas[sector]);
        }, 10000);
/////////////////////////////////////// MENSAJE NUEVOS BORRAR
client.on('message', (message) => { // Autorizar
  // 
  if (!message.guild) return;
  if (message.member.bot) return; 
  //
  if (message.channel.id === '659078519703470082') {
      message.delete();
  } else {
    // no estar en introduccion
  }
});
////////////////////////////////////// REACCIONES

/////////////////////
client.on('message', (message) => { // message.author
  if (!message.guild) return;
  if (message.member.bot) return; 
  if (message.content.startsWith("Pale") || message.content.startsWith("pale")){
    message.react("💖");
    //message.channel.sendMessage("");
    
  }
});
client.on('message', (message) => { // message.author
  if (!message.guild) return;
  if (message.member.bot) return;
  //
  if (message.content.startsWith("Vhork") || message.content.startsWith("vhork"))        message.react("🥭");
  if (message.content.startsWith("Galia") || message.content.startsWith("galia"))        message.react("💛");
  if (message.content.startsWith("Shiro") || message.content.startsWith("shiro"))        message.react("🌠");
  if (message.content.startsWith("Johnny") || message.content.startsWith("johnny"))      message.react("🐗");
  if (message.content.startsWith("Juse") || message.content.startsWith("juse"))          message.react("🦐");
  if (message.content.startsWith("Baguvix") || message.content.startsWith("baguvix"))    message.react("🕵️");
  if (message.content.startsWith("Kathy") || message.content.startsWith("kathy"))        message.react("🎨");
  if (message.content.startsWith("Chanel") || message.content.startsWith("chanel"))      message.react("📺");
  if (message.content.startsWith("Samolo") || message.content.startsWith("samolo"))      message.react("🥚");
  if (message.content.startsWith("Diego") || message.content.startsWith("diego"))        message.react("😎");
  if (message.content.startsWith("Cedric") || message.content.startsWith("cedric"))      message.react("🥖");
  if (message.content.startsWith("Demi") || message.content.startsWith("demi"))          message.react("👌");
  if (message.content.startsWith("Yuma") || message.content.startsWith("yuma"))          message.react("🍡");
  if (message.content.startsWith("Vhork") || message.content.startsWith("vhork"))        message.react("🧗");
  if (message.content.startsWith("Carlah") || message.content.startsWith("carlah"))      message.react("🌺");
  if (message.content.startsWith("Anyah") || message.content.startsWith("anyah"))        message.react("");
  if (message.content.startsWith("Bonnie") || message.content.startsWith("bonnie"))      message.react("🐇");
  if (message.content.startsWith("Kokkuri") || message.content.startsWith("kokkuri"))    message.react("💝");
  if (message.content.startsWith("Fire") || message.content.startsWith("fire"))          message.react("🔥");
  if (message.content.startsWith("Fede") || message.content.startsWith("fede"))          message.react("🐺");
  if (message.content.startsWith("Pao") || message.content.startsWith("pao"))            message.react("🐼");
  if (message.content.startsWith("Maduro") || message.content.startsWith("maduro"))     message.react("😡");  message.channel.sendMessage("Coño e tu madre");
  if (message.content.startsWith("nice")  || message.content.startsWith("Nice")){
    var embed = new Discord.RichEmbed()
    .setImage("https://cdn.discordapp.com/attachments/560931034225704975/562768758461038594/cat3.png"); }
});
/////////////////////////////////////
client.login(process.env.BOT_KEY);