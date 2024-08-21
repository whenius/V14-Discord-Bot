const client = require("../index");
const { Collection } = require("discord.js")
const fs = require("fs")

client.on("ready", () => {
console.log(`${client.user.tag} - Bot aktif!`)
client.user.setPresence({ activities: [{ name: 'by whenius' }], status: 'online' });

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./commands/", (err, files) => {
if (err) console.error(err);
console.log(`${files.length} Toplam komut!`);
files.forEach(f => {
let props = require(`../commands/${f}`);
    
console.log(`${props.help.name} adlı komut çalıştırıldı!`);
    
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});

});
