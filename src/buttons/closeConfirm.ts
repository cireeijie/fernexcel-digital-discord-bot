import { ButtonInteraction, ChannelType } from "discord.js";

export async function closeConfirmButton(interaction: ButtonInteraction) {
  const channel = interaction.channel;

  if (!channel || channel.type !== ChannelType.GuildText) {
    return interaction.reply({
      content: "❌ Invalid ticket channel.",
      ephemeral: true,
    });
  }

  await interaction.reply({
    content: "🗑️ Ticket will be deleted in 3 seconds...",
  });

  setTimeout(async () => {
    await channel.delete();
  }, 3000);
}
