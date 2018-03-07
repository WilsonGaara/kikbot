exports.run = (client, message, args)  => {
        const moment = require('moment');
        moment.locale('pt-BR'); 
	const Discord = require("discord.js");
message.reply(`Opa! Enviei na sua DM (Direct Messages) | Caso não envie para você pode ser que suas config. de privacidade estejam bloqueando minhas mensagens. (https://i.imgur.com/DU9IWQi.png) Deixe-a ativa enquanto usa o comando k!ajuda ou k!help`)

        var embed = new Discord.RichEmbed()
.setColor(`BLUE`)
.setAuthor(`Ajuda do Kik 💁`, client.user.avatarURL)
.setDescription(`Olá ${message.author}, prazer sou o Kikbot (ou para preguiçosos(sas), Kik) eu sou apenas um simples bot para o Discord! \n\n O meu objetivo é ser um bot extremamente útil (Caso queira me adcionar em um servidor clique [aqui](http://bit.ly/2zlpdfF))`)
        message.author.send({embed: embed})
        var embed1 = new Discord.RichEmbed()
.setColor(`GREEN`)
.setAuthor(`Meus comandos`, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setDescription('`avatar`, `ping`, `serverinfo`, `memberinfo`, `emoji`, `emojis`, `falar`, `embed`, `data`, `clima`, `invite`, `id`, `ppt`, `yt`, `wasted`, `primeiraspalavras`, `achiv`, `8ball`, `botinfo`, `limpar`, `lixo`, `reiniciar`, `traduzir`, `upar`, `report` e `warnar`.\nPROPAGANDA - https://discord.me/justiidance')

.setFooter(`© KikBot 2018 l ` + `${moment().format('LLLL')}`)
        message.author.send({embed: embed1})
        var embed2 = new Discord.RichEmbed()
        
        .setAuthor(`Suporte`, message.author.avatarURL)
   
        .setDescription('Oii! Vocês ai querendo uma ajudinha né?! Ha achou o lugar certo, caso dê algum problema ao usar o comando você pode reclamar e tentar resolver no meu e-mail de suporte você só precisa explicar o que está acontecendo e uma print. Isso é demais né, mas em breve iremos adcionar isso estou em fase de testes ok? To com 1 bilhão de problemas para vocês descubrirem\n"Vão lá e mandem sugestões :D lembrando que meus donos não são tops quanto vocês não. Se quiser manda a source ^^"')
        
                message.author.send({embed: embed2})


}
