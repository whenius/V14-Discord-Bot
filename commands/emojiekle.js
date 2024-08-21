const Discord = require('discord.js');

 module.exports.run = async (client, message, args, bot) => {
 if(!message.member.permissions.has("ManageEmojis")) return message.reply("Bu komutu kullanmak için **Emojileri Yönet** yetkisine sahip olmalısın!");

   
  let guild = message.guild
  let link = args[0]
  let ad = args[1]
  if (!link) return message.channel.send(`Bir link yazmalısın.`).then(msg => { setTimeout(() => { msg.delete() }, 10000); });
  if (!ad) return message.channel.send(`Bir isim yazmalısın.`).then(msg => { setTimeout(() => { msg.delete() }, 10000); });
  if(ad.includes("ç")) return message.reply('Emoji adı gereksiz karakterler içeriyor: **ç**').then(msg => { setTimeout(() => { msg.delete() }, 10000); });
  if(ad.includes("ğ")) return message.reply('Emoji adı gereksiz karakterler içeriyor: **ğ**').then(msg => { setTimeout(() => { msg.delete() }, 10000); });
  if(ad.includes("ı")) return message.reply('Emoji adı gereksiz karakterler içeriyor: **ı**').then(msg => { setTimeout(() => { msg.delete() }, 10000); });
 if(ad.includes("ö")) return message.reply('Emoji adı gereksiz karakterler içeriyor: **ö**').then(msg => { setTimeout(() => { msg.delete() }, 10000); });
  if(ad.includes("ş")) return message.reply('Emoji adı gereksiz karakterler içeriyor: **ş**').then(msg => { setTimeout(() => { msg.delete() }, 10000); });
  if(ad.includes("ü")) return message.reply('Emoji adı gereksiz karakterler içeriyor: **ü**').then(msg => { setTimeout(() => { msg.delete() }, 10000); });
   
let embed1 = new Discord.EmbedBuilder()
.setDescription('Emoji ekleyemiyorum çünkü yetkim yok.')
.setColor('White')
if(!message.guild.members.me.permissions.has('ManageEmojisAndStickers')) return message.reply({embeds : [embed1]})

const me2 = new Discord.EmbedBuilder().setDescription(`**Link** veya **emoji adı** hatalı.`).setColor('White')
guild.emojis.create({ attachment: `${link}`, name: `${ad}` }).then(q => {
  const mes = new Discord.EmbedBuilder().setDescription(`Emoji başarıyla oluşturuldu: ${q}`).setColor('White')
  message.channel.send({embeds : [mes]})
}).catch(error => { 
  console.log(error)
  return message.channel.send({embeds : [me2]})})
  
    
};
exports.conf = {
    aliases: [''],
  };
  
  exports.help = {
    name: 'emoji-ekle',
  
  };
