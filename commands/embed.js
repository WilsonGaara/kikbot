
 exports.run = (client, message, args, game)  => {
  if (message.mentions.users.first()) {
    user = message.mentions.users.first().username;
    userfoto = message.mentions.users.first().avatarURL;
  userstatus = message.mentions.users.first().presence.status;
  usertag = message.mentions.users.first().tag;
  usercriado = message.mentions.users.first().createdAt;
  userid = message.mentions.users.first().id;
game = message.mentions.users.first().presence.game
userentrou = message.guild.member(message.mentions.users.first().id).joinedAt;


  } else {
    user = message.author.username;
    userfoto = message.author.avatarURL;
	userstatus = message.author.presence.status;
  usertag = message.author.tag;
  usercriado = message.author.createdAt;
  userid = message.author.id;
  game = message.author.presence.game
  userentrou = message.guild.member(message.author.id).joinedAt;
  }
  const Discord = require('discord.js');
message.delete()
const moment = require('moment');
moment.locale('pt-BR'); 
if(args.join(` `).length < 1) return message.reply(`Espero que você não esteja cansado(a) de tanto digitar...`)
         const embed = new Discord.RichEmbed()
		 .setAuthor(`Embed de: ${message.author.username}`, message.author.avatarURL)
         .setDescription(args.join(` `))
        .setColor(`BLUE`)
        .setFooter(`© KikBot 2018 l Embed enviado em: ` + `${moment().format('LLLL')}`, client.user.avatarURL)
         
     message.channel.send({embed: embed})
};
