const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {

     if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(`Bu komutu **Yönetici** yetkisine sahip olmadan kullanamazsın!`);
  let log = message.mentions.channels.first()
  
    message.reply("Emoji kanalı başarıyla sıfırlandı!")

  db.delete(`emojikanal_${message.guild.id}`)

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "emojikanal-sıfırla"
};
