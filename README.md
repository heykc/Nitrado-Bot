<div id="logo" align="center">
  <a href="https://github.com/emilkrebs/Nitrado-Bot" target="_blank" rel="noopener noreferrer">
	  <img width="256" alt="Nitrado-Bot Logo" src="https://user-images.githubusercontent.com/68400102/171499841-642a53a2-e00d-4688-9637-c993a86a8161.png">
	</a>
  <h3>
    Controll your Nitrado Gameserver
  </h3>
</div>


<div id="badges" align="center">
  
   [![Build](https://github.com/emilkrebs/Nitrado-Bot/actions/workflows/build.yml/badge.svg)](https://github.com/emilkrebs/Nitrado-Bot/actions/workflows/build.yml)
   [![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/emilkrebs/Nitrado-Bot)

</div>

<hr>

<a href="https://www.buymeacoffee.com/emilkrebs" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

This Bot lets you and others start your Nitrado Gameserver from Discord. 

I am using this Discord Bot to start a ARK Server.

# Getting started
- Install [node.js](https://nodejs.org/en/)
- If you don't already have a Discord Bot, create one [here](https://discord.com/developers/applications/)
- Get a nitrApi access token [here](https://server.nitrado.net/deu/developer/tokens)
- Clone the repository using `git clone https://github.com/emilkrebs/nitrado-bot.git`
- Create a `config.json` file that looks like this:
```json
{
    "token":"your-bot-token",
    "nitrado_token":"your-nitrApi-access-token",
    "nitrado_id":"your-nitrado-serviceid"
}
```
- `npm i` to install all required dependencies
- `npm run start` to start the bot

![Showcase](https://user-images.githubusercontent.com/68400102/171502599-4e5b7572-e83a-4144-a17b-f25d1cc6b6cb.png)


# Commands
- `!start or !restart`: Restart or Start your Gameserver
- `!stop`: Stop your Gameserver

![Showcase 2](https://user-images.githubusercontent.com/68400102/171891996-ad32af6b-b7db-428d-a0ae-11fcea4cacbc.png)

## Known Issues

- Bot crashes when updating the status https://github.com/emilkrebs/Nitrado-Bot/issues/3

[Add Issue](https://github.com/emilkrebs/Nitrado-Bot/issues/new)
