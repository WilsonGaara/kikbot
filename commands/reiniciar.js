exports.run = (client, message, args) => {
  let cmd = args.join(` `)
    if (args.length < 1) return message.reply(':x: Coloque o nome de um comando! Ex: k!reiniciar ajuda');
    delete require.cache[require.resolve(`./${cmd}.js`)];
           
	const Discord = require("discord.js");
	  if (message.mentions.users.first()) {
    user = message.mentions.users.first().username;
    userfoto = message.mentions.users.first().avatarURL;
  } else {
    user = message.author.username
    userfoto = message.author.avatarURL;
  }
message.channel.send(':white_check_mark: **l** :clap: O comando ' + '`' + cmd + '`' + 'foi reiniciado.')
}
