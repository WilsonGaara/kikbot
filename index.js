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

  // Send the message to a designated channel on a server:
  let channel = member.guild.channels.find('name', 'kik-logs')
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(` <:blobangel:395358333441146890> **l** Bem-vindo(a) ao nosso servidor, ${member}.`);
})


client.on('guildMemberRemove', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'kik-logs');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(` <:blobfrowning:395358353196449812> **l** ${member} Saiu do servidor.`);

});



client.on('guildCreate', guild => {
 

  guild.owner.send(`${guild.owner} Licença mas alguém me adcionou em um servidor seu, se foi você eu estou me auto-explicando ou seja se você nunca me usou vai saber agora :grin: **l** <:blobangel:395358333441146890> **l** Prazer em conhece-lo(a). **Meu nome é kikbot-, meus amigos me nomeiam de Kik. Mas como você preferir eu sou um pequeno bot feito em d.js, mas não se preocupe eu vou sair em versões de Javacord .kt e etc... Mas se quiser uma mãozinha dê k!ajuda. Outra coisa! Se criar um canal chamado de #kik-logs eu farei um member-log dentro dele :grin:** . `);

});

client.on('guildDelete', guild => {





  guild.owner.send(`${guild.owner} <:blobfrowning:395358353196449812> **l** Eu estou confuso :confused: Mas se foi você que me baniu ou chutou do seu servidor :frowning: **l** **Eu pensei que eu era um robô melhor, eu irei melhorar até o sr me usar outra vez :cloud: ** `);

});
// Log our bot in





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
