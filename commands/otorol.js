 const Discord = require('discord.js');
const db = require('orio.db')
exports.run = (client, message, args) => { 

if(!message.member.permissions.has("0x0000000000000008")) return message.channel.send(`Bu komutu kullanabilmek için **Yönetici** yetkisi gerekiyor.`);
  
let otorol = message.mentions.roles.first()
  
if(!otorol) return message.channel.send(`Sunucuya gelen üyelere vermem için bir rol etiketlemelisin.`)  


message.channel.send(`**İşlem Başarılı!**
Artık bu sunucuya gelen üyelere ${otorol} adlı rolü vereceğim.`)
db.set(`otorol_${message.guild.id}`, otorol.id)  
}

exports.conf = {
  aliases: [""]
}

exports.help = {
  name: 'oto-rol'
}
