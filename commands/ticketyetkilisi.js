const {EmbedBuilder} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
let channel = message.mentions.roles.first()
if (!channel) return message.reply("Lütfen bir rol etiketle")
message.reply("Başarıyla destek ekibi rolü <@&"+channel+"> Olarak Ayarlandı!")
db.set(`ticketmod_${message.guild.id}`, channel.id)
   
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "ticket-yetkilisi"
};
