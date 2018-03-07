exports.run = (client, message, args)  => {
message.channel.send(`:link: **Gerando...**`).then(message => {

6000
        
    const Discord = require('discord.js');
    
    
    
             const embed = new Discord.RichEmbed()
             
          .setDescription(`:link: **Link de Convite [oauth2]** \n Para adcionar-me ao seu servidor, [clique aqui](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=0) \n **Você precisa estar logado no Discord** \n\n **:heavy_plus_sign: I Meu e-mail de suporte**: \n Em breve`)
          
            .setColor(`BLUE`)
   .setFooter(`${message.author.username}`, message.author.avatarURL)
             
         message.edit({embed: embed})})

}