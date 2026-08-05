import { ButtonInteraction, ChannelType, EmbedBuilder } from "discord.js";

import { config } from "../config.js";

export async function assignButton(interaction: ButtonInteraction) {
  const channel = interaction.channel;

  if (!channel || channel.type !== ChannelType.GuildText) {
    return interaction.reply({
      content: "❌ This button can only be used inside a ticket.",
      ephemeral: true,
    });
  }

  // Check if this looks like a ticket channel
  if (!channel.name.startsWith("ticket-")) {
    return interaction.reply({
      content: "❌ This is not a ticket channel.",
      ephemeral: true,
    });
  }

  if (!interaction.guild) {
    return interaction.reply({
      content: "❌ Guild not found.",
      ephemeral: true,
    });
  }

  const member = await interaction.guild.members.fetch(interaction.user.id);

  const isSupport = member.roles.cache.has(config.roles.support);

  const isOwner = interaction.user.id === interaction.guild.ownerId;

  // Allow only Support role or Server Owner
  if (!isSupport && !isOwner) {
    return interaction.reply({
      content:
        "❌ Only support members and the server owner can assign tickets.",
      ephemeral: true,
    });
  }

  // Rename the ticket
  await channel.setName(`assigned-${interaction.user.username}`);

  const embed = new EmbedBuilder()
    .setColor("Green")
    .setTitle("✅ Ticket Assigned")
    .setDescription(`This ticket has been assigned to ${interaction.user}.`)
    .setTimestamp();

  return interaction.reply({
    embeds: [embed],
  });
}
