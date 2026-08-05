import type { ChatInputCommandInteraction } from "discord.js";

export async function pingCommand(interaction: ChatInputCommandInteraction) {
  console.log("🏓 Ping command executed");

  await interaction.reply("🏓 Pong!");
}
