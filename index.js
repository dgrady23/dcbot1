// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(NjU4ODIzOTU5OTczODU1MjYz.GckwT8.X_a7-ZqudYbjQZ3u4RwbC0M-AeL0vTtPtCx5F0);