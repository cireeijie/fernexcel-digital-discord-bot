import { ChatInputCommandInteraction } from "discord.js";

export async function pingCommand(interaction: ChatInputCommandInteraction) {
  await interaction.reply({
    content: "🏓 Pong!",
    ephemeral: true,
  });
}
