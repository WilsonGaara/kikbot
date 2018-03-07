exports.run = async(client, message, args) => {
    
    if(message.author.id != 315307066376060959) return message.reply(`Permissão, cadê?!`)
           // if  (!message.member.hasPermissions(["KICK_MEMBERS"])) return message.reply("Você não tem direito para chutar!");
            let reason = args.slice(1).join(' ');
            let user = message.mentions.users.first();
    
            if (!message.mentions.users.lenght < 0) return message.reply('Coloque alguém para eu chutar ou uma razão!').catch(console.error);
            if (reason.length < 1) return message.reply('Coloque uma razão especifica ou alguém para eu chutar!');
    
    
            if (!message.guild.member(user).kickable) return message.reply("Eu não posso chutar este usuario!");
           let member = await message.guild.member(user).kick()
    
    message.reply('Ignorando permissão, detectando permissão, erros podem acontecer! `FAKE`')
            const Discord = require("discord.js");
            var embed = new Discord.RichEmbed()
            .setAuthor(`Chute!`, client.user.avatarURL)
            .setColor(`BLUE`)
            .setDescription(`Um membro desse servidor foi chutado para fora (${user})`)
        .setThumbnail(message.mentions.users.first().avatarURL)
            .addField(`Motivo:`, reason)
            .addField(`Staff:`, message.author.username)
                      .setFooter(`Um bot feito por Gaara`, `https://cdn.discordapp.com/avatars/315307066376060959/813020b3c7dd54503501c85aab6a99d2.png?size=2048`)
            message.channel.send({embed: embed})
    
    
        };
    