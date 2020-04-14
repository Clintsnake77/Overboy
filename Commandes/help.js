const Discord = require('discord.js');

exports.run = (client, message, args) => {

    var help = new Discord.MessageEmbed()
        .setDescription("<:logo:699249825304281159> :keyboard:  **__Listes des commandes disponibles sur le serveur__** :keyboard:  <:logo:699249825304281159>")
        .addField("📞 __Administration__ 📞 <:offline:699290549890580481> :", "Prochainement disponible...")
        .addField("<:Ts_hammer:699225795570434048> __Modération:__ <:Ts_hammer:699225795570434048> <:online:699290549810757772> :", "``o!ban`` ; ``o!kick``")
        .addField("⚒ __Utilitaire:__ ⚒ <:online:699290549810757772> :", " ``o!statsinfo`` ; ``o!ping`` ; ``o!avatar`` ; et d'autres sont à venir :wink:")
        .setColor("#7832b6")
        .setThumbnail('https://media.discordapp.net/attachments/622482392128553020/699591349703278602/logo2.png?width=677&height=677')
    message.channel.send(help)
        
}

module.exports.help = {
    name: "help"
}; 