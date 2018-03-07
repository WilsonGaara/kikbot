exports.run = async(client, message, args) => {
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
      
.setAuthor(`Votação de: ${message.author.username}`, message.author.avatarURL)

.setColor(`BLUE`)
.setDescription(`${args.join(` `)}`)

.setFooter(`Use as reações para votar`)
           
message.channel.send({embed: embed}).then(message => {
    message.react(`👍`)
    message.react(`👎`)
})

}


















