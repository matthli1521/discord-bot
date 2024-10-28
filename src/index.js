const { Client } = require("discord.js");
const { token } = require("./token.json");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildsMembers,
    IntentsBitField.Flags.GuildsMessages,
    IntentsBitField.Flags.MessaageContent,
  ],
});

client.login(token);
