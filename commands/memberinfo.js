
  function stats() {
    var status = userstatus
    if  (status == "online") {
    return "Disponível"
  } else if (status == "offline") {
    return ("Afk/Indisponível")
    } else if  (status == "dnd") {
    return ("Ocupado")
    } else if (status == "idle") {
    return ("Ausente")
    }
  }
  function playing(){
    var playings = game
    if(playings != undefined){
        return playings.name;
    }else{
        return "Nada";
    }
}

  exports.run = (client, message, args, game)  => {
  if (message.mentions.users.first()) {
	  userapelido = message.guild.member(message.mentions.users.first()).nickname
    user = message.mentions.users.first().username;
    userfoto = message.mentions.users.first().avatarURL;
  userstatus = message.mentions.users.first().presence.status;
  usertag = message.mentions.users.first().tag;
  usercriado = message.mentions.users.first().createdAt;
  userid = message.mentions.users.first().id;
game = message.mentions.users.first().presence.game
userentrou = message.guild.member(message.mentions.users.first().id).joinedAt;
usercargo = message.guild.member(message.mentions.users.first().id).roles.size;
userbot = message.mentions.users.first().bot;

  } else {
    user = message.author.username;
    userfoto = message.author.avatarURL;
	userstatus = message.author.presence.status;
  usertag = message.author.tag;
  usercriado = message.author.createdAt;
  userid = message.author.id;
  game = message.author.presence.game
  userentrou = message.guild.member(message.author.id).joinedAt;
  usercargo = message.guild.member(message.author.id).roles.size;
  userapelido = message.guild.member(message.author.id).nickname
  userbot = message.author.bot;
  }
  let dat2a = new Date
  function botCheck(){
    var botChecking = userbot;
        if (botChecking == true) {
            return "Sim :white_check_mark:";
        } else {
    if (botChecking == false){
            return "Não :x:"
    }
        }
    }
 
function playing(){
    var playings = game
    if(playings != undefined){
        return playings.name;
    }else{
        return "Nada";
    }
}
function nickname(){
    var playings = userapelido
    if(playings != null){
        return  playings;
    }else{
        return "**Não detectado**";
    }
}
  const Discord = require('discord.js');
  const moment = require('moment');
       moment.locale('pt-BR');   
  var embed = new Discord.RichEmbed()
         .setAuthor(`Informações:`, userfoto)
         .setThumbnail(userfoto)
         .setColor(`BLUE`)
		 .addField(`:crown: Apelido`, nickname(), true)
		 .addField(`:notepad_spiral: Cargos no servidor atual`, usercargo, true)
         .addField(`:computer: ID:`, userid, true)
         .setFooter(`© KikBot 2018 l ` + `${moment().format('LLLL')}`)
         .addField(`:desktop: Jogando:`, `**${playing()}**`, true);
 embed.addField(`<:blobdetective:395358275685711873> É um robô?`, botCheck(), true)
         embed.addField(`:notepad_spiral: Tag:`, usertag, true) 
        embed.addField(`:satellite_orbital: Status:`, `${stats()}`, )


        embed.addField(":date: Criou a conta em", moment(usercriado).format('LLLL'), );
                embed.addField(":star2: Entrou aqui em", moment(userentrou).format('LLLL'), );
               

  message.channel.send({embed: embed});
};