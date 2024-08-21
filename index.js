const { Client, GatewayIntentBits, Partials, Discord } = require("discord.js");
const config = require("./config.js");

const client = new Client({
  partials: [
    Partials.Message,
    Partials.Channel, 
    Partials.GuildMember, 
    Partials.Reaction, 
    Partials.GuildScheduledEvent, 
    Partials.User, 
    Partials.ThreadMember, 
  ],
  intents: [
    GatewayIntentBits.Guilds, // for guild related things
    GatewayIntentBits.GuildMembers, // for guild members related things
    GatewayIntentBits.GuildBans, // for manage guild bans
    GatewayIntentBits.GuildEmojisAndStickers, // for manage emojis and stickers
    GatewayIntentBits.GuildIntegrations, // for discord Integrations
    GatewayIntentBits.GuildWebhooks, // for discord webhooks
    GatewayIntentBits.GuildInvites, // for guild invite managing
    GatewayIntentBits.GuildVoiceStates, // for voice related things
    GatewayIntentBits.GuildPresences, // for user presence things
    GatewayIntentBits.GuildMessages, // for guild messages things
    GatewayIntentBits.GuildMessageReactions, // for message reactions things
    GatewayIntentBits.GuildMessageTyping, // for message typing things
    GatewayIntentBits.DirectMessages, // for dm messages
    GatewayIntentBits.DirectMessageReactions, // for dm message reaction
    GatewayIntentBits.DirectMessageTyping, // for dm message typinh
    GatewayIntentBits.MessageContent, // enable if you need message content things
  ],
});

module.exports = client;

require("./events/message.js")
require("./events/ready.js")

client.login(process.env.token).catch(e => {
console.log("The Bot Token You Entered Into Your Project Is Incorrect Or Your Bot's INTENTS Are OFF!")
})


const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Bot'));

app.listen(port, () =>
    console.log(`Çalışma adresi: https://new-tab.cf:${port} | DB'e bağlanıldı... by whenius`)
);

client.on("messageCreate", async message => {
    let csl = "983787538592436344"
const csdc = require("discord.js")

    if(message.author.id === client.user.id) return;
    if(!message.guild) { 
  client.channels.cache.get(csl).send({embeds: [new csdc.EmbedBuilder()
    .setAuthor({name: 'Bot yeni bir mesaj algıladı'})
    .setFooter({text: 'Saat'})
    .setDescription(`Gönderen:   ${message.author.tag}`)
    .setTimestamp()
.setThumbnail(client.user.displayAvatarURL())
    .addFields({ name:"Mesaj:", value: message.content })
]
})
    }
    })


 client.on("guildMemberAdd", async member => {
let cdb = require("orio.db")
let veri = cdb.fetch(`csbo_${member.guild.id}`)  
if (veri){
if (member.user.bot) {
let csr = member.guild.roles.cache.get(veri)
if(csr){
member.roles.add(csr)
}}}
})


 client.on("guildMemberAdd", async member => {
let cdb = require("orio.db")
let veri = cdb.fetch(`otorol_${member.guild.id}`)  
if (veri){
if (member.user) {
let csr = member.guild.roles.cache.get(veri)
if(csr){
member.roles.add(csr)
}}}
})


client.on("messageDelete", async message => {
  const db = require("croxydb");
const csdc = require("discord.js")
 
  const kullanıcı = message.mentions.users.first();
  if (!kullanıcı) return;
  let sistem = await db.get(`etiketbilgi_${kullanıcı.id}`);
                     
  if (sistem) {
      const kullanıcı = message.mentions.users.first();

    const row = new csdc.ActionRowBuilder()
    .addComponents(
    new csdc.ButtonBuilder()
    .setLabel("Destek Sunucusu")
   .setStyle(csdc.ButtonStyle.Link)
    .setURL("https://discord.gg/ddk3uyFeUy")
    )
    const embed = new csdc.EmbedBuilder()
    .setColor("White")
    .setDescription(`[${message.author.tag}](https://discord.com/users/${message.author.id}) tarafından etiketlendin ama mesaj silindi.\n\nMesaj İçeriği: ${message.content}\n\nMesajı Silen: <@${message.author.id}> **|** [${message.author.tag}](https://discord.com/users/${message.author.id})\n\nSilinen Kanal: <#${message.channel.id}>\n\nMesaj Yazılış Tarihi: <t:${Math.floor(Date.now() /1000)}:R>`)
.setAuthor({
      name: 'Etiket Bilgi',
      iconURL: client.user.avatarURL(),
    })
             
  kullanıcı.send({embeds: [embed], components: [row]})
   }
});
               
               
//

client.on('interactionCreate', async interaction => {
          if (!interaction.isButton()) return;
          if(interaction.customId === "ticket") {
           const db = require("croxydb")
            const Discord = require("discord.js")
            let mod = db.fetch(`ticketmod_${interaction.guild.id}`)
            db.add(`sayi_${interaction.guild.id}`, 1)
            let sayi = db.fetch(`sayi_${interaction.guild.id}`) || "1"
            const row = new Discord.ActionRowBuilder()
            .addComponents(
            new Discord.ButtonBuilder()
            .setEmoji("🔒")
            .setStyle(Discord.ButtonStyle.Success)
            .setCustomId("kapat")
            )
             interaction.guild.channels.create({
              name: `ticket-${sayi}`,
                type: Discord.ChannelType.GuildText,
        
                permissionOverwrites: [
                  {   
                      id: interaction.guild.id,
                      deny: [Discord.PermissionsBitField.Flags.ViewChannel]
                  },
                  {
                      id: interaction.user.id,
                      allow: [Discord.PermissionsBitField.Flags.ViewChannel]
                  },
                  {
                      id: mod,
                      allow: [Discord.PermissionsBitField.Flags.ViewChannel]
                  }
              ]
            })
            
                  
                  .then((c)=>{
                 
                      const i1 = new Discord.EmbedBuilder()
                      .setTitle(client.user.username + " - Destek Sistemi!")
                      .setDescription(`${interaction.user}, Destek talebin oluşturuldu.`)
                      .setColor("Green")
                      c.send({embeds: [i1], components: [row]})
                      interaction.reply({content: `Biletiniz başarıyla açıldı. Kapatmak için aşağıdaki emojiye tıklayabilirsiniz. <#${c.id}>`, ephemeral: true})
                  })
          
          
            
          }
 })
client.on('interactionCreate', async interaction => {
          if (!interaction.isButton()) return;
          if(interaction.customId === "kapat") {
            let channel = interaction.channel
            channel.delete()
            
          }
})


//

client.on('messageCreate', async message => { 
  const db = require("croxydb") 
  let emj = db.fetch(`emojikanal_${message.guild.id}`)
  let guild = `${message.guild.id}`  
     let channel = `${emj}` 
     let emoji1 = '✅' 
     let emoji2 = '❌' 
     if(message.channel.id === channel) {
     if(message.author.bot) return;
     await message.react(emoji1)
     await message.react(emoji2)
    }
     else {
      return;
    }})



client.on("messageCreate", async msg => { 
const yasak = "1019325518211981462"

const dcskelime = [yasak,"<@"+yasak+">"]; 
if (dcskelime.some(dcss => msg.content.includes(dcss))) {
msg.reply("Biri bana mı seslendi? Komutlarımı görmek için **+yardım**")
}}) 

//
