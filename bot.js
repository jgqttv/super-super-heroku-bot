const Discord = require('discord.js');
const client = new Discord.Client(799219433661923360);

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(Nzk5MjE5NDMzNjYxOTIzMzYw.YAAZGQ._ELhdbdApkwIv3iumVXJtTutGA8
);
