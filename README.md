# DiscordExample
A simple and complete Discord.js bot example

* Requirements
  * [Node.js](https://nodejs.org/)
  * (optionnal) I recommand using a command bash different than cmd, like [gitforwindows](https://gitforwindows.org/)

# Setup
* First we need to install discord.js
  * Open a new bash (cmd/git) into the bot directory
  * Now, type
    >npm install discord.js --save
* When done, create a new app on the [Discord developers Portal](https://discordapp.com/developers/applications/me/). 
  * Click on *New App* and choose a Name for your bot.
  * When done, click *Create a Bot User* . **Be carefull!** Your bot will have the same @username as your App Name.
  * To get the bot into your server, click on *Generate OAuth2 URL* and check "Admin" in permissions. Copy the link, paste it on your web browser and add the Bot to your server.
* Now, we need to setup the bot itself!
  * Open the *config.json* file and set the prefix to whatever you want.
  * In that same file, copy the bot token (*it can be found on you bot's App page*)
* Starting the bot
  * Starting the bot is easy: simply open a new bash on your bot's folder and type `node .` (*Tip: to exit node on your terminal, type Ctrl+C*)
* That's it! The bot should be Running.


# Editing the bot
You wanna make your bot customized af? Let's do it! First, check the requirement here:
* Bot editing requirements.
  * A text Editor. I recommend using Visual Studio Code when editing Discord Bots because you can have a console on the editor, wich is cool when you wanna restart your bot everytime you change wanna test something. If you don't, Atom will become your new friend!
  * [Discord.js Documentation](https://discord.js.org/#/docs/main/stable/general/welcome). I mean, of course you'll need it! All the discord.js functions can be found there.
  * Google. Google is your friend! Use it whenever you need it: research your console bug report, check for some cool functions to add on your code,...

You have all you need? Well... I don't have much more to say.
Simply open the index.js file with your text editor: you'll find tons of informations! I added a description for every of the commands showed. With those you will be able to make a cool discord bot for you and all of your friends :O.
If my example didn't show you enough, be sure to check [Discord.js Documentation](https://discord.js.org/#/docs/main/stable/general/welcome) or create a Pull Request.