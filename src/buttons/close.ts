import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonInteraction,
  ButtonStyle,
  ChannelType,
} from "discord.js";

export async function closeButton(interaction: ButtonInteraction) {
  const channel = interaction.channel;

  if (!channel || channel.type !== ChannelType.GuildText) {
    return interaction.reply({
      content: "❌ This button can only be used inside a ticket.",
      ephemeral: true,
    });
  }

  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId("close_confirm")
      .setLabel("Confirm Delete")
      .setEmoji("✅")
      .setStyle(ButtonStyle.Danger),

    new ButtonBuilder()
      .setCustomId("close_cancel")
      .setLabel("Cancel")
      .setEmoji("❌")
      .setStyle(ButtonStyle.Secondary),
  );

  return interaction.reply({
    content:
      "⚠️ Are you sure you want to delete this ticket?\n\nThis action cannot be undone.",
    components: [row],
  });
}
