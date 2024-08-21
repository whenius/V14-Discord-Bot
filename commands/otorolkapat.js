 const Discord = require('discord.js');
const db = require('orio.db')
exports.run = (client, message, args) => { 

if(!message.member.permissions.has("0x0000000000000008")) return message.channel.send(`Bu komutu kullanabilmek için **Yönetici** yetkisi gerekiyor.`);
  
let otorol = message.mentions.roles.first()
  
 


message.channel.send(`**İşlem Başarılı!**
Oto rol başarıyla sıfırlandı! Artık sunucuya gelenlere rol verilmeyecek.`)
db.delete(`otorol_${message.guild.id}`)  
}

exports.conf = {
  aliases: [""]
}

exports.help = {
  name: 'otorol-sıfırla'
}
