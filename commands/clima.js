exports.run = (client, message, args)  => {
      
  
    if(!(message.guild.member(client.user).hasPermission("EMBED_LINKS"))) {
        message.channel.send(":no_entry_sign: **l** Oops! \n Pelo jeito não tenho a permissão (`EMBED_LINKS`) \n \n Como arrumar \n \n :cop: Fale com um administrador para me dar esta permissão!")
    
      
      } else {
      
    var weather = require('weather-js');
weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { 
if (result === undefined || result.length === 0) return message.channel.send(':x: **l** Local inválido ou erro em pesquisa, tente outra vez. Ou veja se você não digitou o local de maneira errada.');

// Essa é uma função nomeada de "clima" traduz o skytext para por exemplo Predominantemente núblado
 function clima() {
        var status = current.skytext
        if  (status == "Mostly Cloudy") {
        return "☁ | Predominantemente nublado"
      } else if (status == "Partly Cloudy") {
        return ("☁ | Parcialmente nublado")
      } else if (status == `Cloudy`) {
          return (`☁ | Nublado`)
        } else if (status == `Sunny`) {
            return (`🌞 | Ensolarado`)
        } else if (status == `Partly Sunny`) {
            return (`🌞 | Parcialmente ensolarado`)
        } else if (status == `Mostly Sunny`) {
            return (`🌞 | Predominantemente ensolarado`)
        } else if (status == `Clear`) {
            return (`🌄 | Céu limpo`)
        } else if (status == `Mostly Clear`) {
            return (`🌄 | Céu extremamente limpo`)
        } else if (status == `Partly Rain`) {
            return (`🌧 | Parcialmente chuvoso`)
                    } else if (status == `T-Storms`) {
            return (`🌩 | Trovões`)
        } else if (status == `Rain`) {
            return (`🌧 | Chuvoso`)
        } else if (status == `Rain Showers`) {
            return (`🌧 | Pé d'água`)
        } else if (status == `Light Rain`) {
            return (`🌧 | Chuva leve`)
        } else if (status == `Light Snow`) {
            return (`🌨 | Nevando`)
        } else if (status == `Fog`) {
            return (`🌁 | Neblina`)
        } else if (status == `Snow`) {
            return (`🌨 | Nevasca`)
      }     
    }
    const moment = require('moment');
    moment.locale('pt-BR'); 
    // Variáveis
    var current = result[0].current; 
    var location = result[0].location; 
    // Abaixo ele vai enviar uma msg.channel falando o resumo da previsão do tempo para derteminado local! (inclui args)
    message.channel.send(`:white_check_mark: **l** Aqui está a minha previsão para **${location.name}**.  \n Resumo: Em ${location.name} faz ${current.temperature}°C `)
// Vai constar a váriavel Discord que requer discord.js
    const Discord = require('discord.js');
    // Vai constar a variável "embed" que vai dizer a API do discord que o robô irá fazer um embed rico.
    const embed = new Discord.RichEmbed()
    .setDescription(`**${clima()}** - © KikBot 2018 l ` + `${moment().format('LLLL')}`)
    .setAuthor(`Clima para: ${location.name}`, `https://i.imgur.com/uiW0eUg.png`) 
    .setThumbnail(current.imageUrl) 
  //  .setColor(`BLUE`)
    .addField(':clock4: Fuso Horário',`UTC${location.timezone}`, true) 
    .addField(':thermometer: Tipo de Grau',`°${location.degreetype}`, true)
        .addField(':cloud_rain: Temperatura',`${current.temperature} °C`, true)
    .addField(':cold_sweat:  Sensação Térmica', `${current.feelslike} °C`, true)
    .addField(':wind_blowing_face: Vento',current.windspeed, true)
    .addField(`:date: Data`, current.date, true)
    .addField(':sweat_drops: Humidade', `${current.humidity}%`, true)
    
    .setFooter(`Fonte: MSN Weather`, `http://www.pvhc.net/img97/ulhyqqrrvzzuzhbakszu.png`)
    
    message.channel.send({embed});
    if(current.temperature > 30) return message.reply(`:warning: Que calor! Se for sair cuidado porque se não o sol vai te torrar!`)
        if(current.temperature < 12) return message.reply(`:warning: Que frio! Brrr... Se for sair leve um casaco, ok?! E um winter hat (referência a o jogo Don't Starve) :snowflake: `)
// Aqui vai enviar a msg pra o canal onde o comando foi executado!
});


      }}

   