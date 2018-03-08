exports.run = (client, message, args, game)  => {
  
  const Discord = require('discord.js');

const moment = require('moment');
moment.locale('pt-BR'); 
if(args.join(` `).length < 1) return message.reply(`Espero que você não esteja cansado(a) de tanto digitar...`)
         const embed = new Discord.RichEmbed()
		 .setAuthor(`Meus status`, message.author.avatarURL)
         .setDescription('Uso de memória RAM: ' + `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB` + '\nUso de Processador(CPU): ' + process.cpuUsage() + '%')
        .setColor(`GOLD`)
        .setFooter(`© KikBot 2018 l Informação - ` + `${moment().format('LLLL')}`, client.user.avatarURL)
         
     message.channel.send({embed: embed})
};
