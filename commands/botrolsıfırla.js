 const Discord = require('discord.js');
const db = require('orio.db')
exports.run = (client, message, args) => { 

if(!message.member.permissions.has("0x0000000000000008")) return message.channel.send(`Bu komutu kullanabilmek için **Yönetici** yetkisi gerekiyor.`);

message.channel.send(`**İşlem Başarılı!**
Bot rol başarıyla sıfırlandı. Artık sunucuya gelen botlara rol vermeyeceğim.`)
db.delete(`csbo_${message.guild.id}`)  
}

exports.conf = {
  aliases: [""]
}

exports.help = {
  name: 'botrol-sıfırla'
}
