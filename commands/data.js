exports.run = (client, message, args)  => {

    const moment = require('moment');
    moment.locale('pt-br'); 



const Discord = require('discord.js')
const embed = new Discord.RichEmbed()
.setColor('BLUE')
.setTitle(`Horario :clock:`)
.addField(":clock7: Tudo", `${moment().format('LLLL')}`, false)
.addField(":calendar: Data", `${moment().format('L')}`, true)
.addField(":clock3: Dia", `${moment().format('D')}`, true)
.addField(":clock10: Mês", `${moment().format('MMMM')}`, true)
.addField(":clock5: Ano", `${moment().format('YYYY')}`, true)
.addField(":calendar_spiral: Hora", `${moment().format('LTS')}`, true)
.addField(":clock1: Dia vai acabar", `${moment().endOf('day').fromNow()}`, true)
.addField(":star: Dia da semana", `${moment().format('dddd')}`, true)
.setFooter(`Comando ensinado por Kakashi`)
message.channel.send({embed: embed})
}