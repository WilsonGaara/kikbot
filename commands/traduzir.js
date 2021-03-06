const Discord = require("discord.js");
var translate = require('google-translate-api');

// Isso vai detectar quais são as línguas disponíveis. 
var langs = {
    'af': 'Afrikaans',
    'sq': 'Albanian',
    'am': 'Amharic',
    'ar': 'Arabic',
    'hy': 'Armenian',
    'az': 'Azerbaijani',
    'eu': 'Basque',
    'be': 'Belarusian',
    'bn': 'Bengali',
    'bs': 'Bosnian',
    'bg': 'Bulgarian',
    'ca': 'Catalan',
    'ceb': 'Cebuano',
    'ny': 'Chichewa',
    'zh-cn': 'Chinese Simplified',
    'zh-tw': 'Chinese Traditional',
    'co': 'Corsican',
    'hr': 'Croatian',
    'cs': 'Czech',
    'da': 'Danish',
    'nl': 'Dutch',
    'en': 'English',
    'eo': 'Esperanto',
    'et': 'Estonian',
    'tl': 'Filipino',
    'fi': 'Finnish',
    'fr': 'French',
    'fy': 'Frisian',
    'gl': 'Galician',
    'ka': 'Georgian',
    'de': 'German',
    'el': 'Greek',
    'gu': 'Gujarati',
    'ht': 'Haitian Creole',
    'ha': 'Hausa',
    'haw': 'Hawaiian',
    'iw': 'Hebrew',
    'hi': 'Hindi',
    'hmn': 'Hmong',
    'hu': 'Hungarian',
    'is': 'Icelandic',
    'ig': 'Igbo',
    'id': 'Indonesian',
    'ga': 'Irish',
    'it': 'Italian',
    'ja': 'Japanese',
    'jw': 'Javanese',
    'kn': 'Kannada',
    'kk': 'Kazakh',
    'km': 'Khmer',
    'ko': 'Korean',
    'ku': 'Kurdish (Kurmanji)',
    'ky': 'Kyrgyz',
    'lo': 'Lao',
    'la': 'Latin',
    'lv': 'Latvian',
    'lt': 'Lithuanian',
    'lb': 'Luxembourgish',
    'mk': 'Macedonian',
    'mg': 'Malagasy',
    'ms': 'Malay',
    'ml': 'Malayalam',
    'mt': 'Maltese',
    'mi': 'Maori',
    'mr': 'Marathi',
    'mn': 'Mongolian',
    'my': 'Myanmar (Burmese)',
    'ne': 'Nepali',
    'no': 'Norwegian',
    'ps': 'Pashto',
    'fa': 'Persian',
    'pl': 'Polish',
    'pt': 'Portuguese',
    'ma': 'Punjabi',
    'ro': 'Romanian',
    'ru': 'Russian',
    'sm': 'Samoan',
    'gd': 'Scots Gaelic',
    'sr': 'Serbian',
    'st': 'Sesotho',
    'sn': 'Shona',
    'sd': 'Sindhi',
    'si': 'Sinhala',
    'sk': 'Slovak',
    'sl': 'Slovenian',
    'so': 'Somali',
    'es': 'Spanish',
    'su': 'Sundanese',
    'sw': 'Swahili',
    'sv': 'Swedish',
    'tg': 'Tajik',
    'ta': 'Tamil',
    'te': 'Telugu',
    'th': 'Thai',
    'tr': 'Turkish',
    'uk': 'Ukrainian',
    'ur': 'Urdu',
    'uz': 'Uzbek',
    'vi': 'Vietnamese',
    'cy': 'Welsh',
    'xh': 'Xhosa',
    'yi': 'Yiddish',
    'yo': 'Yoruba',
    'zu': 'Zulu'
};

exports.run = (bot, message, args) => {
    const moment = require('moment');
    moment.locale('pt-BR');   
    if(args.length <= 1) {
        if(args[0] === 'lista') {
            message.channel.sendMessage(':mag_right: | Esta é a lista de idiomas disponíveis.\n\n`' + Object.keys(langs).join('` `') + '`')
        } else {
        message.channel.sendMessage(':x: | Você não deu argumentos corretos. Tente usar k!traduzir lista Ex: k!traduzir pt I am the best!') }
    } else {
        if(Object.keys(langs).some(a => args[0] === a)) {
            translate(args.slice(1).join(' '), {to: args[0]}).then(res => {
                const embed = new Discord.RichEmbed()
                
            
                .setColor(`GOLD`)
                .setAuthor(`Google Translator API`, `https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Translate_Icon.png`)
                .setDescription("Tradução de `" + args.slice(1).join(' ') + "` para `" + args[0] + "` é: \n **" + res.text + "**")
                .setFooter(`© KikBot 2018 l ` + `${moment().format('LLLL')}`)
            
                    
                     
                
                    message.channel.send({embed: embed})
            }).catch(err => {
    message.channel.sendMessage(`:x: | Ocorreu um erro na tradução.`)
});
        
        } else {
            message.channel.sendMessage(` :x: | O idioma digitado não existe`)
        }
    }
}