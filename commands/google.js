var google = require("google")
const config = require("../config.json")

exports.run = (client, message, args) => {
    google.lang = 'pt'
        let argsJunto = message.content.split(" ").slice(1).join(' ')
            if (message.content.includes('shafou')) {
                message.channel.sendMessage('🤢 Shafou não!');
            } else {
                if (message.content.includes('+18')) {
                message.channel.sendMessage('🤢 :underage: não!');
                } else {
                    if (message.content.includes(`porn`)) {
                        message.channel.sendMessage('🤢 :underage: não!');
                    } else {
    if(argsJunto.length < 1) {
        message.channel.sendMessage('Você não deu argumentos da pesquisa!')
    } else {
        var mensagem = message.content
        message.channel.sendMessage('<:blobdetective:395358275685711873> | Pesquisando...').then(message => {

    google(mensagem.slice(mensagem.length - argsJunto.length - 1), function(err, res){
        var i = 0

         
        const Discord = require('discord.js');
        
        
        
                 const embed = new Discord.RichEmbed()
               .setTitle(`Opa! Parece que achamos alguma pista...`)
               .addField(`Descrição`, res.links[i].description)
               
                 .setDescription('**<:blobdetective:395358275685711873> l Resultado(s) para: **' + mensagem.slice(mensagem.length - argsJunto.length - 1) + '\n\n' + `[${res.links[i].title}](${res.links[i].href})` + '\n' + `**${res.links[i].href}**`)
       
                .setColor(`BLUE`)
                 
             message.edit({embed: embed})
    });
    
});
    };
        };
};

            };
        };
    