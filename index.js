require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const youtubeSearch = require('./youtube.js');

const KEYWORD = process.env.KEYWORD;


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.DISCORD_BOT_TOKEN);

client.on('message', async message => {
    if(message.content.startsWith(KEYWORD)){
        const search = message.content.split(KEYWORD);
        if(!search) return;
        youtubeSearch(search).then(url => {
            console.log(url);
          message.reply(url);
        })
    }
})