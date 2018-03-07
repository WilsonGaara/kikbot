exports.run = (client, message, args)  => {
    let string = ''
    for(var i = 0;i < message.guild.emojis.size;i++){
       string  += `<:${message.guild.emojis.array()[i].name}:${message.guild.emojis.array()[i].id}>`;
    }
    
message.channel.send(`**Aqui estão todos os emojis de: ${message.guild} :white_check_mark:**
${string}`)
}