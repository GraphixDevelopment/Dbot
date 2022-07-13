const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageSelectMenu()
                .setCustomId('dbot-linkspanel')
                .setPlaceholder('❌┆Nothing selected')
                .addOptions([
                    {
                        label: `Support server`,
                        description: `Join the suppport server`,
                        emoji: "❓",
                        value: "support-linkspanel",
                    },
                    {
                        label: `Invite Dbot`,
                        description: `Invite Dbot to your server`,
                        emoji: "📨",
                        value: "invite-linkspanel",
                    },
                    {
                        label: `Invite Dbot 2`,
                        description: `Invite Dbot 2 to your server`,
                        emoji: "📕",
                        value: "invite2-linkspanel",
                    },
                    {
                        label: `Community Server`,
                        description: `Join the community server!`,
                        emoji: "🌍",
                        value: "community-linkspanel",
                    },
                    {
                        label: `Top.gg`,
                        description: `Show the top.gg link`,
                        emoji: "📃",
                        value: "top.gg-linkspanel",
                    },
                ]),
        );

    client.embed({
        title: `🔗・Links`,
        desc: `Get access to all Dbot links! Choose the link you need in the menu below`,
        image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/dbot_banner_invite.jpg",
        components: [row],
        type: 'editreply'
    }, interaction)
}

// © Dotwood Media | All rights reserved