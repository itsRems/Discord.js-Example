const Discord = require('discord.js'); //Setting up a Discord variable
const bot = new Discord.Client(); //Setting up the bot variable. In the discord.js doc you will see they use "client". It's similar but I prefer to use bot.
const CONFIG = require('./config.json'); //Including our config.json file will give us the possibility to use the informations it contains.

//Setting up a prefix variable
const prefix = CONFIG.prefix; //In this example, I'm setting up the prefix in the config.json. I could have simply used "const prefix = '!';"

//Wanna add a role and say welcome when someone joins one of your bot's server? Use this!
bot.on('guildMemberAdd', member => { //The bot will do somethign when (bot.on) someone is seem as "added" on the discord server

    var channel = member.guild.channels.find('name', 'general'); //We are setting up a channel variable to send the message at a precise location, using channel's name
    channel.send(`Hello and welcome to our greate server ${member} \nIf you need something, simply ask!`); //Sending a welcome message. The "${member}" will mention our new member. the \n is used to skip line
    member.addRole("429047724910968834"); //Now, we add the role we want by role id. If you wanna know how to get the role id check the README.md
});
//Commands examples
bot.on('message', message => {

    //Setting up vars
    let msg = message.content.toUpperCase(); //Defines 'msg'
    let sender = message.author; //Creates a 'sender' variable: can be used to mention whoever send the message

    //Command example.
    if (msg === prefix + 'YOUR COMMAND TEXT') { //We are now telling the bot to react to every message that's equal to the prfix "!" that we set and the command we want

        message.channel.send('What do you want the bot to say?'); //We're using "message.channel.send", wich means that the bot will send the message into the same channel as you send the command
    };

    //Command example with mention
    if (msg === prefix + 'ANOTHER COMMAND TEXT') { //Note that I wrote the command in caps: it's needed! If you don't the bot won't recognize "!your command text"

        message.reply('Pong! :ping_pong:'); //When using "message.reply", the bot will firt mention the user and the send the text you set after
    };

    //"Ping" command example
    if (msg === prefix + 'PING') { //Telling the bot to react to "!ping"

        message.reply('Pong! :ping_pong:'); //The bot is now going to reply with the message we set: I used :ping_pong: to get the ping pong emote on discord: don't use :) if you wanna make the bot smile, user :smile:
    };

});
//Console log & Status Update
bot.on('ready', () => { //When the bot is ready, we do. the following things:
    bot.user.setStatus('online'); //Telling discord we are online.
    bot.user.setActivity("Just some 'playing' status"); //Setting our dicord "playing" status to a defined text
    console.log(`Logged in as ${bot.user.tag}`); //Sending a message into the console saying that we are logging in as (usertag). Can be usefull when you have multiple bots running on the same machine
});

//Bot Logins
bot.login(CONFIG.token); //Logging in: will use the token contained into the config.json to connect to the discord api