module.exports = async(client) => {
    client.user.setPresence({ activity: { name: "Regarder La Flotte D'Overlord, o!help " }, status: 'online' });
};