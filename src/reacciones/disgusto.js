const Discord = require("discord.js") // Libreria | conjunto de funciones previamente hechas
exports.run = (client, message, args) => {
  
    let gifs = [
       "https://media.giphy.com/media/gGeyr3WepujbGn7khx/giphy.gif",
       "https://media.giphy.com/media/eLWJeULcoOYbS/giphy.gif",
       "https://media.giphy.com/media/qmfpjpAT2fJRK/giphy.gif",
       "https://media.giphy.com/media/8PmTor9XVnD3sxXHRe/giphy.gif",
       "https://media.giphy.com/media/10FHR5A4cXqVrO/giphy.gif",
       "https://media.giphy.com/media/9QeSVgwB6i5Ik/giphy.gif",
       "https://media.giphy.com/media/T8c3M3yWJcsKY/giphy.gif",
       "https://images-ext-2.discordapp.net/external/nUaWTFoiWiU1d-WdQc_QT5H0SlpUJ8BlZO3gDLA1hjY/%3Fwidth%3D400%26height%3D225/https/media.discordapp.net/attachments/399448944889036801/518918190625980469/96d.gif",
       "https://images-ext-1.discordapp.net/external/g1Jjhy8YehtQsfZ3D1bJquNlghKQ7ggXgUi_Oei9JYw/%3Fwidth%3D400%26height%3D225/https/media.discordapp.net/attachments/399448944889036801/518917943229284379/tumblr_opwtvpnspz1ra8smno1_1280.gif",
       "https://media.discordapp.net/attachments/399448944889036801/656905133593985054/ed8be487-ae2d-441a-b916-f61207824b93.gif?width=400&height=225",
       "https://images-ext-2.discordapp.net/external/HF5SyZj01_Fss0y0qk3XpM8MIv2HRkxAwdhBtPUb4N0/%3Fwidth%3D400%26height%3D225/https/media.discordapp.net/attachments/399448944889036801/518917391078391818/1WiSjDgEV_PvOo8fvPZcB5LZh9rYDWZ1yfKCQjqZxLU4NK_DJ4FA6qof2iwFVMNN08e3fx2l4-hxzkWAci1EJw.gif",
       "https://images-ext-2.discordapp.net/external/R5tMDTitgiqn9TKmK0WAES-Z3u_lTEo-7baEbagtABM/%3Fwidth%3D400%26height%3D225/https/media.discordapp.net/attachments/399448944889036801/518918045545136155/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif",
       "https://media.discordapp.net/attachments/399448944889036801/564149866763386920/unnamed.gif?width=400&height=225",
       "https://images-ext-2.discordapp.net/external/WVEU_yXwMiK6Q7luzFl__AGPQr_Lzp4TRCQk8sKXEPA/%3Fwidth%3D400%26height%3D225/https/media.discordapp.net/attachments/399448944889036801/518917912493293568/tenor.gif",
       "https://images-ext-2.discordapp.net/external/s5ru9BrLXiQ4IE8vfGodLWH3VC2wzIO96FS_io3lIVQ/%3Fwidth%3D400%26height%3D225/https/media.discordapp.net/attachments/399448944889036801/518917817664536588/amgigEm.png",
       "https://images-ext-1.discordapp.net/external/5gq7cLkjapm7xx8a2e_iaoaH8Pm9EgEWHz0ps2SMnUk/%3Fwidth%3D400%26height%3D214/https/media.discordapp.net/attachments/399448944889036801/518917343024250883/7b7.png",
       "https://media.discordapp.net/attachments/399448944889036801/569951627264524305/unnamed_2.gif?width=330&height=301",
       "https://images-ext-1.discordapp.net/external/5mKzlHk8N49imu7fK4X1ftSwaSpB0G-3puY4vNBfZIY/%3Fwidth%3D400%26height%3D279/https/media.discordapp.net/attachments/399448944889036801/518917640018853890/anime-disgusted-face-gif-1.gif",
       "https://images-ext-1.discordapp.net/external/0AAfrPw8G3EE6bmp0nkx2Cbm9g24ZGHVy59uv12lt6g/%3Fwidth%3D400%26height%3D225/https/media.discordapp.net/attachments/399448944889036801/518918046665015296/5LYzTBVoS196gvYvw3zjwJDB61MEgOTvrYRz5atHWcc.gif",
       "https://images-ext-1.discordapp.net/external/rODM5FUBiCofkffXv30hgHfsQbe3Rbj5nvM-JA_ilL0/%3Fwidth%3D400%26height%3D225/https/media.discordapp.net/attachments/399448944889036801/518917364885225493/Di_SXDoXgAAC2r-.jpg",
      ] 
    
  var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**Esta Disgustado..**")
  .setColor(3447003)
  .setTimestamp()
  .setImage(gifs[Math.floor(Math.random() * gifs.length)]) // Sacar un mensaje al azar
  message.channel.send({embed});
} 