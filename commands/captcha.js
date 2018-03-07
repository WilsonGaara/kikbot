exports.run = (client, message, args)  => {
	message.delete()
	let CaptchaRole = message.guild.roles.find("name", `✅ I Captcha Confirmado`);
	if(!CaptchaRole) return message.reply(":x: Não vi nenhum cargo com o nome de `✅ I Captcha Confirmado`");
	if(message.member.roles.has(CaptchaRole.id)) {
        message.guild.member(message.author.id).removeRole(CaptchaRole.id)
		message.author.send(`Cargo removido :frowning:`)
	
	  } else {
		 message.guild.member(message.author.id).addRole(CaptchaRole.id).catch(console.error);
		 message.author.send(`Cargo adcionado em: ${message.guild}`)
	  }
	}