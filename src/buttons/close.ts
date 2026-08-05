import { ButtonInteraction, ChannelType, EmbedBuilder } from "discord.js";

export async function closeButton(interaction: ButtonInteraction) {
  const channel = interaction.channel;

  if (!channel || channel.type !== ChannelType.GuildText) {
    return interaction.reply({
      content: "❌ This button can only be used inside a ticket.",
      ephemeral: true,
    });
  }

  // Ensure it's a ticket channel
  if (
    !channel.name.startsWith("ticket-") &&
    !channel.name.startsWith("assigned-")
  ) {
    return interaction.reply({
      content: "❌ This is not a ticket channel.",
      ephemeral: true,
    });
  }

  const embed = new EmbedBuilder()
    .setColor("Red")
    .setTitle("🔒 Ticket Closed")
    .setDescription(
      `This ticket was closed by ${interaction.user}.\n\nThis channel will be deleted in **5 seconds**.`,
    )
    .setTimestamp();

  await interaction.reply({
    embeds: [embed],
  });

  // Wait 5 seconds
  await new Promise((resolve) => setTimeout(resolve, 5000));

  await channel.delete("Ticket closed");
}
