const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    
    const membre = message.mentions.members.first() || message.member;

    let waiting = await message.channel.send("Chargement de l'image... Et la voici !").catch(console.error);
 
    let mentionedUser = message.mentions.users.first() || message.author;
 
    let avatarembed = new Discord.MessageEmbed()
 
        .setImage(mentionedUser.displayAvatarURL())
        .setColor("#7832b6")
        .setTitle(`Avatar de **${membre.user.tag}**`)
        .setFooter("Demendé par " + message.author.tag)
        .setDescription("[Lien de l'avatar](" + mentionedUser.displayAvatarURL() + ")");
 
    waiting.edit(avatarembed).catch(console.error)
}
 
module.exports.help = {
    name: "avatar"
}
