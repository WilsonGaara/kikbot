exports.run = (client, message, args)  => {

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
	  } else if (guildVerification == undefined) {
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
		message.react(`🏓`);
		
		message.channel.send(`Pingando...`).then(message => {
		const Discord = require('discord.js');
				
			 const embeda = new Discord.RichEmbed()
			.setDescription(`:ping_pong:**${Math.round(client.ping)}ms**`, true) 
					.setColor(`LIME`)
					 .setFooter(`Shard (1/1)`)
					 if(Math.round(client.ping) < 75) return message.edit({embed: embeda})

					
	
				const embedb = new Discord.RichEmbed()
	 .setDescription(`:ping_pong:**${Math.round(client.ping)}ms**`, true) 
			 .setColor(`RED`)
				.setFooter(`Shard (1/1)`)
				if(Math.round(client.ping) > 200) return message.edit({embed: embedb})
		

	
		
						 const embed = new Discord.RichEmbed()
				.setDescription(`:ping_pong:**${Math.round(client.ping)}ms**`, true) 
						.setColor(`LIME`)
						 .setFooter(`Shard (1/1)`)
				 message.edit({embed: embed})




		})}
	