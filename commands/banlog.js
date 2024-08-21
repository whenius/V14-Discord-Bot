const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {

     if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(`Bu komutu **Yönetici** yetkisine sahip olmadan kullanamazsın!`);
  let log = message.mentions.channels.first()
  if(!log) return message.reply({content: "Log kanalını belirtmen gerekiyor."})
  
  
  

    message.reply("Ban Log başarıyla ayarlandı")

  db.set(`ban_${message.guild.id}`, log.id)

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "ban-log"
};
