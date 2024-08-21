const discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (args.length < 1) {
    return message.reply('Ters yazmak istediğin mesajı belirt!')
  }

  await message.channel.send(args.join(' ').split('').reverse().join(''));

};

exports.conf = {
  aliases: [ '' ]
};

exports.help = {
  name: 'ters-yaz'
};
