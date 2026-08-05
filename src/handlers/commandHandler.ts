import type { ChatInputCommandInteraction } from "discord.js";
import { commands } from "../commands/index.js";

export async function handleCommand(interaction: ChatInputCommandInteraction) {
  console.log("➡️ Handling command:", interaction.commandName);

  const command = commands[interaction.commandName];

  if (!command) {
    console.log("❌ Command not found");

    return interaction.reply({
      content: "❌ Unknown command.",
      ephemeral: true,
    });
  }

  console.log("✅ Command found");

  await command(interaction);

  console.log("✅ Command finished");
}
