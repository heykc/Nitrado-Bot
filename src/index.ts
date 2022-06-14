import { Client, Intents, MessageEmbed } from 'discord.js';
import { token, nitrado_token, nitrado_id } from '../config.json';
import { Gameserver, Status } from './gameserver';

import colors from 'colors';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const gameServer = new Gameserver(nitrado_id, nitrado_token)

client.once('ready', () => {
    console.log(getTime() + colors.green('Bot is Ready.'));
    if (client.user) {
        console.log(getTime() + colors.green(`Bot is logged in as ${colors.yellow(client.user.tag)}. `));
    }

    (function loop() {
        setTimeout(function () {
            updateStatus();
            loop()
        }, 500);
    }());
});

client.on('messageCreate', async message => {
    if (!message.guildId) return;
    const { content } = message;
    if (content === '!restart' || content === '!start') {
        gameServer.restart().then(async response => {
            console.log(getTime() + colors.green(`Server got started by ${colors.yellow(message.author.tag)}. ${response.status == 'success' ? colors.green(response.status) : colors.red(response.status)}`));
            return await message.reply({ embeds: [sendResponseEmded(response.status, response.message)] });
        });
    }
    else if (content === '!stop') {
        gameServer.stop().then(async response => {
            console.log(getTime() + colors.green(`Server got stopped by ${colors.yellow(message.author.tag)}.  ${response.status ==  'success' ? colors.green(response.status) : colors.red(response.status)}`));
            return await message.reply({ embeds: [sendResponseEmded(response.status, response.message)] });
        });
    }
});



function sendResponseEmded(status: Status, message: string): MessageEmbed {
    const responseEmded = new MessageEmbed()
        .setColor(status == 'success' ? 'GREEN' : 'RED')
        .setTitle(status.toLocaleUpperCase())
        .setDescription(message)
        .setTimestamp()

    return responseEmded;
}

function updateStatus() {
    gameServer.getStatus().then(status => {
        // change bot status
        if (status == 'started') {
            client.user?.setStatus('online');
        }
        else if (status == 'stopped') {
            client.user?.setStatus('dnd');
        }
        else if (status == 'restarting' ||  status == 'stopping') {
            client.user?.setStatus('idle');
        }
        gameServer.getOnlinePlayers().then(async response => {
            client.user?.setActivity({ name: `Server ${status} ${response.length == 0 ? 'no' : response.length } players online`, type: 'WATCHING' })
        });
      
    });
}
function getTime(): string {
    let dateTime = new Date()
    return colors.gray(`[${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}] `);
}

client.login(token);