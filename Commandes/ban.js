const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(`Vous n'avez pas la permission !`);

    if(message.mentions.users.size === 0) {
        return message.channel.send(`Vous devez mentionner un utilisateur !`);
    }

    let ban = message.guild.member(message.mentions.users.first());

    if(!ban) {
        return message.channel.send(`Utilisateur introuvable !`);
    }

    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(`Je n'ai pas la permission pour faire cette tache !`);

    // Pour que la personne sanctionné ait une sanction:
    await ban.send(`Vous êtes banni du serveur **${message.guild.name}** par ${message.author.username}`);        

    // Message dans le discord
    ban.ban().then(member => {
        message.channel.send(`${member.user.username} est banni par ${message.author.username}`); 
    });

};

module.exports.help = {
    name: "ban"
}; 