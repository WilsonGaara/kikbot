const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');



            




// The token of your bot - https://discordapp.com/developers/applications/me


// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
console.log(`Liguei! `)
});
/*
    The following code goes into it's own file, and you run this file
    instead of your main bot file.
*/

client.on('guildMemberAdd', member => {


    let channel = member.guild.channels.find('name', 'testar-bot-javascript💻 ')
   
    if (!channel) return;
  var Discord200 = require('discord.js')
  var embed = new Discord200.RichEmbed()
  .setAuthor(member.tag, member.user.displayAvatarURL)
.setDescription(`🙋 **|** Bem-vindo(a) ao servidor!`)
  .setColor('GREEN')
  .setTimestamp()
  .setFooter(`ID do usuário: ${member.id}`, member.guild.iconURL)
    channel.send({embed : embed})
  })

client.on('guildMemberDelete', member => {


    let channel = member.guild.channels.find('name', 'testar-bot-javascript💻 ')
   
    if (!channel) return;
  var Discord2020 = require('discord.js')
  var embed2 = new Discord2020.RichEmbed()
  .setAuthor(member.tag, member.user.displayAvatarURL)
.setDescription(`😕 **|** Tchau, espero que nada de mal lhe-aconteça...`)
  .setColor('RED')
  .setTimestamp()
  .setFooter(`ID do usuário: ${member.id}`, member.guild.iconURL)
    channel.send({embed : embed2})
  })



fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", message => {

  if(!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
 //Anti-Comando errado

 let command = message.content.split(" ")[0];
 command = command.slice(config.prefix.length);


  let args = message.content.split(" ").slice(1);
  // The list of if/else is replaced with those simple 2 lines:



      // Create an event listener for new guild members





  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
})
client.login(config.token)
