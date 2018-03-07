exports.run = (client, message, args)  => {
var uptime = `${client.uptime}`;
var seg = Math.floor(uptime/1000)%60;
var min = Math.floor(uptime/(1000*60))%60;
var horas = Math.floor(uptime/(1000*60*60))%24;
var uptimeconv = horas + ' horas, ' + min + ' minutos e ' + seg + ' segundos.';  

const Discord = require('discord.js');
const embed = new Discord.RichEmbed()
.setAuthor(`Olá! Eu sou o Kik 💁`, `https://cdn.discordapp.com/avatars/315307066376060959/7b5c012bbcdc0405c7da6de742a4cb40.png?size=2048`)
.setThumbnail(`https://cdn.discordapp.com/avatars/315307066376060959/7b5c012bbcdc0405c7da6de742a4cb40.png?size=2048`)
.setColor(`GOLD`)
.setDescription(`Olá, eu sou o Kikbot, preguiçosos me chamam de Kik eu apenas sou um bot para Discord com várias funções legais! \n\n Fazem **${uptimeconv}** desde que eu fui acordado. \n\n Eu estou em **${client.guilds.size}** guilds/servidores, vi **${client.users.size}** humanos e robôs. Fui criado em uma progamação nomeada de Node.js irei ter versões em **JDA, Java etc..** \nWebsite? Não, eu sou um simples bot simples mesmo não sou um bot sério e eu tive uma perca de memória recente desculpe não estou igual ao "antigo kikbot-" ;-(,  ok voltando -> Mas... Se vocês quiserem né, depende de vocês ai eu peço pros meus criadores tentarem fazer,  se conseguirem. Duvido! Verdade ou Mentira?! \n\nGosto muito muito e MUITO do jogo Don't Starve, sério. Se um dia eu pudesse evoluir a ponto de ter uma forma corporal e inteligente pra poder jogar esse JOGO! E o Together?! ^^`)
.addField(`:medal: Pessoas que eu respeito`, '`' + 'BugaduGC | Depressivo#8333' + `\n` + '`' + ':medal: **Vencedor do Sabe a Música (11-12-2017)**' + `\n` + '`' + 'FeliperiN#2175 ' + `\n` + '`' + `:trophy: Ganhador do sorteio do cargo Moderador \n` + '`' + 'AGENŦEҞRIS#2133' + `\n` + '`' + 'Por ter criado meu lindo avatar! :frame_photo:' + `\n` + '`' + 'BannerGames#1300' + '`' + 'Por ajudar meu dono muito!' + ':star2:' + `\n` + '`' + 'Ａｐｍｕｎｕｔｅ#8802 ' + `\n` + '`' + 'Por ser um dos melhores administradores de servidores do mundo! :cop:' + `\n` + '`' + 'Wilson l Gaara#0986' + `\n` + '`' + 'Por ter me criado! :grin:' + `\n` + '`' + message.author.username + `#` + message.author.discriminator + '`' + 'Por estar aqui comigo, por me apoiar e me ajudar, sem você e todos os outros eu não seria ninguém <3') 
.setFooter(`Kikbot foi criado por Gaara`, `https://cdn.discordapp.com/avatars/315307066376060959/7b5c012bbcdc0405c7da6de742a4cb40.png?size=2048`)
    message.channel.send({embed});
    message.channel.sendFile("./kikbotwall.png")
}