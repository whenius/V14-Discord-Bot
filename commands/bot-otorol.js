 const Discord = require('discord.js');
const db = require('orio.db')
exports.run = (client, message, args) => { 

if(!message.member.permissions.has("0x0000000000000008")) return message.channel.send(`Bu komutu kullanabilmek için **Yönetici** yetkisi gerekiyor.`);
  
let rol = message.mentions.roles.first()
  
if(!rol) return message.channel.send(`Sunucuya eklenen botlara vermem için bir rol etiketlemelisin.`)  


message.channel.send(`**İşlem Başarılı!**
Artık bu sunucuya eklenen botlara ${rol} adlı rolü vereceğim.`)
db.set(`csbo_${message.guild.id}`, rol.id)  
}

exports.conf = {
  aliases: [""]
}

exports.help = {
  name: 'bot-rol'
}
