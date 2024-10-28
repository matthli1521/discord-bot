const { Client } = require('discord.js');
const { token } = require('./token.json');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildsMembers,
    IntentsBitField.Flags.GuildsMessages,
    IntentsBitField.Flags.MessaageContent,
  ],
});

client.on('ready', (c) => {
  console.log('bot ready');
});
client.on('messageCreate', (msg) => {
  console.log(msg.content);
  if (messageLink.content === Ronney) {
    messageLink.reply('');
  }
});
client.login(token);
