const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) =>{

    const membre = message.mentions.members.first() || message.member;
    // je ne sais pas quoi dire.

    message.channel.send({
        embed: {
             color: 0x7832b6, 
             title: `Statistiques de l'utilisateur **${membre.user.tag}**`,
             thumbnail: {
                url: membre.user.displayAvatarURL()
             },
            fields: [
                {
                 name: "> ID : ",
                 value: membre.id
                },
                {
                    name: "Jeu:",
                    value: `${membre.user.presence.game ? `${membre.user.presence.game.name}` : "L'utilisateur ne joue pas."}`
                },
                {
                    name: "Rejoint le:",
                    value: moment.utc(membre.joinedAT).format("LL")
                },
            ],
            footer: {
                text: `informations de l'utilisateur ${membre.user.username}`
            }
        }
           
    })

}

module.exports.help = {
    name: 'statsinfo',
  };