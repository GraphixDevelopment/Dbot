const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
  const perms = await client.checkPerms({
    flags: [Discord.Permissions.FLAGS.BAN_MEMBERS],
    perms: ["BAN_MEMBERS"]
  }, interaction)

  if (perms == false) return;

  const member = await interaction.guild.members.fetch(interaction.options.getUser('user').id);

  member.roles.remove(member.roles.highest.id).then(r => {
    client.embed({
      title: `🔨・Demote`,
      desc: `You've been demoted from **${interaction.guild.name}**`,
      fields: [
        {
          name: "👤┆Moderator",
          value: interaction.user.tag,
          inline: true
        },
      ]
    }, member).catch(() => { })

    client.succNormal({
      text: `User successfully demoted`, fields: [
        {
          name: "👤┆User",
          value: `${member}`,
          inline: true
        }
      ],
      type: 'editreply'
    }, interaction);
  }).catch(e => {
    client.errNormal({
      error: "I can't demote the user",
      type: 'editreply'
    }, interaction)
  });
}

// © Dotwood Media | All rights reserved