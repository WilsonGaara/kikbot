exports.run = (client, message, args)  => {
  if (message.mentions.users.first()) {
    user = message.mentions.users.first().username;
    userfoto = message.mentions.users.first().avatarURL;
  userstatus = message.mentions.users.first().presence.status;
  usertag = message.mentions.users.first().tag;
  usercriado = message.mentions.users.first().createdAt;
  userid = message.mentions.users.first().id;
  usergame = message.mentions.users.first().playing;


  } else {
    user = message.author.username;
    userfoto = message.author.avatarURL;
	userstatus = message.author.presence.status;
  usertag = message.author.tag;
  usercriado = message.author.createdAt;
  userid = message.author.id;
  usergame = message.author.playing;

  }
	const Discord = require("discord.js");

        const embed = new Discord.RichEmbed()
             .setColor('BLUE')
			 .setAuthor(`ID de: ${user}`, userfoto)
             .setDescription(`**${userid}**`)
             .setThumbnail(userfoto);
  
        message.channel.send({embed: embed})
}
