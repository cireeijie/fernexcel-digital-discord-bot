import type { ChatInputCommandInteraction } from "discord.js";

export async function pingCommand(interaction: ChatInputCommandInteraction) {
  await interaction.reply("🏓 Pong!");
}
