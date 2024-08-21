const {EmbedBuilder} = require("discord.js");
const db = require("croxydb")
const Discord = require("discord.js")
exports.run = async (client, message, args) => {
if(!message.member.permissions.has("0x0000000000000008")) return message.channel.send(`Bu komutu kullanabilmek için **Yönetici** yetkisi gerekiyor.`);
  let mod = db.fetch(`ticketmod_${message.guild.id}`)
if (!mod) return message.reply("Ticket sistemi için yetkili rolü ayarlanmamış. !ticket-yetkilisi @rol")
let buton = args[0]
if (!buton) return message.reply("Bir emoji belirt.")
const embed = new EmbedBuilder()
.setTitle(client.user.username + " Destek Sistemi")
.setDescription("Aşağıdaki butondan destek talebi açabilirsin.")

const row = new Discord.ActionRowBuilder()
.addComponents(
new Discord.ButtonBuilder()
.setEmoji(buton)
.setStyle(Discord.ButtonStyle.Success)
.setCustomId("ticket")
)
message.channel.send({embeds: [embed], components: [row]})

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "ticket-sistemi"
};
