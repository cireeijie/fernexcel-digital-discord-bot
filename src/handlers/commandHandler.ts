import type { ChatInputCommandInteraction } from "discord.js";

import { commands } from "../commands/index.js";

export async function handleCommand(interaction: ChatInputCommandInteraction) {
  console.log(`➡️ Executing: ${interaction.commandName}`);

  const command = commands[interaction.commandName];

  if (!command) {
    console.log("❌ Command missing");

    return interaction.reply({
      content: "Unknown command",
      ephemeral: true,
    });
  }

  console.log("✅ Command found");

  // Commands restricted to server owner only
  const ownerOnlyCommands = ["consumables", "landing", "fullweb"];

  if (
    ownerOnlyCommands.includes(interaction.commandName) &&
    interaction.user.id !== interaction.guild?.ownerId
  ) {
    console.log("❌ Unauthorized command usage");

    return interaction.reply({
      content: "❌ Only the server owner can use this command.",
      ephemeral: true,
    });
  }

  await command(interaction);

  console.log("✅ Command completed");
}
