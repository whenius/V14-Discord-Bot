const Discord = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
if (!message.member.permissions.has("0x0000000000000004"))
return message.reply({ content: "Bu komutu kullanabilmek için ban yetkisine ihtiyacın var!" }).catch((err) => {});

let me = message.guild.members.cache.get(client.user.id);
if (!me.permissions.has("0x0000000000000004"))
return message.reply({ content: "Birini banlamam için bana gerekli yetkiyi vermedin." }).catch((err) => {});

let sebep = args.slice(1).join(" ") || "Sebep Belirtilmedi";
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

if (!member) return message.reply({content: "Banlayacağın kişiyi etiketle." }).catch((err) => {});

if (message.guild.ownerId === member.id) return message.reply({ content: "Sunucu sahibini banlayamazsın." }).catch((err) => {});
if (message.author.id === member.id)return message.reply({ content: "Kendini banlayamazsın ama bir psikolog randevusu alabilirsin." }).catch((err) => {});
if (client.user.id === member.id) return message.reply({ content: "Kendimi banlayamam ama beni üzdün!" }).catch((err) => {});
let log = db.fetch(`ban_${message.guild.id}`)
 if (!log) return message.channel.send("Lütfen ban komutunu kullanmadan önce bir log kanalı ayarla! +ban-log")
if (message.guild.ownerId !== message.author.id) {
if (member.roles.highest.position >= message.member.roles.highest.position) return message.reply({ content: "Banlamak istediğin kullanıcının rolü, senin rolünden yüksek." }).catch((err) => {});
}

if (member.roles.highest.position >= me.roles.highest.position)return message.reply({ content: "Banlanacak kullanıcının rolü, benim rolümden yüksek." }).catch((err) => {});


message.guild.members.ban(member, { reason: `By: ${message.author.tag} Reason: ` + sebep || "Belirtilmemiş" }).then(() => {
const embed = new Discord.EmbedBuilder()
.setAuthor({
      name: "Ban Log",
      iconURL: client.user.avatarURL(),
    })
.setDescription(`**${user.user.tag}** sunucudan banlandı.`)
 .setFooter({
      text: `Yetkili: ${message.author.tag}`,
      iconURL: message.member.displayAvatarURL({ dynamic: true }),
    })
.setColor("#0099ff")
client.channels.cache.get(log).send({ embeds: [embed] })
}).catch((e) => {
message.reply({ content: `Kullanıcıyı sunucudan banlayamıyorum! \n\`\`\`${e.name + ": " + e.message}\`\`\`` }).catch((err) => {});
});

}
exports.conf = {
aliases: []
};

exports.help = {
name: "ban"
}; 
