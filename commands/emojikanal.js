const { EmbedBuilder } = require("discord.js");
const Discord = require("discord.js");
const db = require("croxydb");
exports.run = async (client, message, args) => {
  if (
    !message.member.permissions.has(
      Discord.PermissionsBitField.Flags.Administrator,
    )
  )
    return message.reply(
      `Bu komutu **Yönetici** yetkisine sahip olmadan kullanamazsın!`,
    );
  let log = message.mentions.channels.first();
  if (!log)
    return message.reply({ content: "Emoji kanalını belirtmen gerekiyor." });

  message.reply("Emoji kanalı başarıyla ayarlandı. Artık kanala atılan tüm mesajlara bot otomatik emoji ekleyecek.");

  db.set(`emojikanal_${message.guild.id}`, log.id);
};
exports.conf = {
  aliases: [],
};

exports.help = {
  name: "emoji-kanal",
};
