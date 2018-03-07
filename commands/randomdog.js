exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const randomPuppy = require('random-puppy');
    
   randomPuppy()
       .then(url => {
           const embed = new Discord.RichEmbed()
           .setDescription(':dog: Olha! Um cachorrinho fofo para você!')
           .setImage(url);
       message.channel.send({embed: embed})
});
}