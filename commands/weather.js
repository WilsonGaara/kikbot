exports.run = (client, message, args)  => {
    

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





  const Discord = require("discord.js");
  if (message.mentions.users.first()) {
user = message.mentions.users.first().username;
userfoto = message.mentions.users.first().avatarURL;
} else {
user = message.author.username
userfoto = message.author.avatarURL;
}
var Jimp = require("jimp")
let img    = Jimp.read('./clima.png'),
avatar = Jimp.read(userfoto)
Promise.all([img, avatar]).then(imgs => {
let avatar = imgs[1],
img    = imgs[0];
avatar.resize(90, 90); 
Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function (font) {  
img.print(font, 250, 100, `${location.name}`);
Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(function (font2) {  
    img.print(font2, 250, 150, `${clima()}`);
    Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function (font2) {  
        img.print(font2, 250, 180, `${current.temperature}°c l `);
          Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function (font2) {  
        img.print(font2, 345 , 180, `${current.feelslike}°c`);
       
       

img.composite(avatar, 300000, 100000).getBuffer(Jimp.MIME_PNG, (err, buffer) => {

   
        message.channel.sendFile(buffer)
        message.channel.send(`Outras informações:\n:sweat_drops: Umidade: ${current.humidity}%\n:cold_sweat: Sensação Térmica: ${current.feelslike}°c\n:date: Data: ${current.date}\n:wind_blowing_face: Vento: ${current.windspeed}\n:thermometer: Temperatura: ${current.temperature}°c, e :clock4: Fuso Horário: UTC${location.timezone}\n**Com RealFeel©**`)   
           
        const config = {
            apikey: "kTC0LP5MCeSkcYUBogj7UeeApGcDbK7d",
            language: "pt-br"
          };
          
          const accuweatherSimple = require('accuweather-simple')(config);
          
          accuweatherSimple.getWeather(`${args.join(` `)}`).then(result => message.reply(`**PREVISÃO / OLHAR PARA O FUTURO**\nPrevisão > AccuWeather:  ` + result));
    
})
})})})})})})}