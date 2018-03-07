exports.run = (client, message, args)  => { 
    message.react(`✌`);
    const Discord = require('discord.js');
    const moment = require('moment');
           moment.locale('pt-BR');  
           var timeout = `${message.guild.afkTimeout}`;
      function verificationLevel() {
        var guildVerification = message.guild.verificationLevel
        if  (guildVerification == "0") {
        return "Nenhum"
      } else if (guildVerification == "1") {
        return ("Baixo")
            } else if  (guildVerification == "2") {
        return ("Médio")
        } else if (guildVerification == "3") {
        return ("Alto")
            } else if (guildVerification == "4") {
        return ("Extremo")
        }
      }
      function tipo() {
        var guildVerification = message.channel.type
      if (guildVerification == "text") {
        return (":notepad_spiral: l Texto")
            } else if  (guildVerification == "voice") {
        return (":microphone: l Voz")
    
        }
      }
      function regiao() {
        var guildVerification = message.guild.region
        if  (guildVerification == "en-us") {
        return ":flag_us: Estados Unidos"
      } else if (guildVerification == `brazil`) {
        return (":flag_br: Brasil")
            } else if  (guildVerification == "russia") {
        return (":flag_ru: Rússia")
        } else if (guildVerification == "singapore") {
        return (":flag_sg: Singapura")
            } else if (guildVerification == "hongkong") {
        return (":flag_hk: Hong Kong")
      } else if (guildVerification == "unnamed") {
        return ("<:blobfacepalm:369904810784325635> l Eu não fiz mais functions, desculpe, volte mais tarde")
      } else if (guildVerification == "eu-west") {
        return (":flag_eu: Europa Oeste")
      } else if (guildVerification == "us-east") {
        return (":flag_us: Costa Leste dos Estados Unidos")
      } else if (guildVerification == "sydney") {
        return (":flag_au: Sydney (Dentro da austrália)")
      } else if (guildVerification == "us-central") {
        return (":flag_us: Estados Unidos Central")
      } else if (guildVerification == "us-south") {
        return (":flag_us: Região Sul dos Estados Unidos")
      } else if (guildVerification == "us-west") {
        return (":flag_us: Região Oeste dos Estados Unidos")
      } else if (guildVerification == "us-west") {
        return (":flag_gb: Londres ")
        
        }
      }
    
    var min = Math.floor(timeout/(1*60))%60;
    var horas = Math.floor(timeout/(1*60*60))%24;
    var timeoutconv = horas + ' hrs e ' + min + ' mins';  
    function afkchannel(){
        var afk = message.guild.afkChannel
        if(afk != undefined){
            return afk;
        }else{
            return "Não detectado";
        }
    }
    function nsfw() {
      var bot = message.channel.nsfw
      if  (bot == true) {
      return "Sim"
    } else if (bot == false) {
      return ("Não")
      }
    }
    function topico(){
        var nad = message.channel.topic
        if(nad != undefined){
            return nad;
        }else{
            return ":x: Não detectado";
        }
    }

    
    var embed = new Discord.RichEmbed()
           
           .setAuthor(`Informações de: ${message.channel.name}`, `https://cdn.discordapp.com/emojis/314003252830011395.png`)
           .setThumbnail(message.guild.iconURL)
           .setColor(`BLUE`)
           .addField(`:computer: ID`, message.channel.id, true)
        
    embed.addField(`:underage: N S F W?`, nsfw())
           embed.addField(":date: Criado em:", moment(message.channel.createdAt).format('LLL'), true);
embed.addField(`:popcorn: Tópico do canal:`, `:popcorn: l ${topico()}`, true)
.addField(`<:blobbandage:395358271180898319> Tipo de Canal`, tipo(), true)
    
         embed.addField(`:regional_indicator_p: Posição:`, `${message.channel.position}º`, true)
    .setFooter(`Bugs podem acontecer no tópico ;)`)
                  
    message.channel.send({embed: embed});
    
    };