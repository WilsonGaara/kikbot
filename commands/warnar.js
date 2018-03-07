exports.run = async(client, message, args) => {
    if(!(message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES"))) {
        message.channel.sendMessage('Não tenho a permissão ``Gerenciar apelidos``.')
    } else {
        let reason = args.slice(1).join(' ');
    if (reason.length < 1) return message.reply('**:x: Faltou um motivo**');
        if  (!message.member.hasPermissions(["MANAGE_GUILD"])) return message.reply("Você não tem direito de gerenciar o servidor!");
        let user = message.mentions.users.first();
        if (message.mentions.users.size < 1) return message.reply(':x: Faltou uma menção!');

     message.channel.send(`:white_check_mark: ${user} **Foi avisado com sucesso**`)
	 user.send({embed: {
  color: 3447003,
  description: (`**Você foi avisado em ${message.guild} Staff ${message.author} Motivo: ${reason}**`)
 

  
}});
} 
 