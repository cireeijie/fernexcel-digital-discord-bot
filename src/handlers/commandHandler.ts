import type { ChatInputCommandInteraction } from "discord.js";

import { commands } from "../commands/index.js";

export async function handleCommand(interaction: ChatInputCommandInteraction) {
  const command = commands[interaction.commandName];

  if (!command) {
    return interaction.reply({
      content: "❌ Unknown command.",
      ephemeral: true,
    });
  }

  try {
    await command(interaction);
  } catch (error) {
    console.error(`Error executing command ${interaction.commandName}:`, error);

    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: "❌ Failed to execute command.",
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: "❌ Failed to execute command.",
        ephemeral: true,
      });
    }
  }
}
