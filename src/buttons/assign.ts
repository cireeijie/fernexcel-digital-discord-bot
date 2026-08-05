import { ButtonInteraction, ChannelType, EmbedBuilder } from "discord.js";

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
