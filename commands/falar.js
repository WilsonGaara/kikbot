exports.run = (client, message, args)  => {
 
    let everyone = args.slice(0).join(' ');
    if(everyone == "@everyone") return message.reply(`**Everyone não!**`)
message.delete()
    if(everyone == "@here") return message.reply(`**Here não!**`)
     message.delete()

    if(!everyone.length > 0) return message.reply(`:x: Você não colocou algo pra eu falar!`)
        message.delete()
    
    message.channel.sendMessage(everyone);
        }   
