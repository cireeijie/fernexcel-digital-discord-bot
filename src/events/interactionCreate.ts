import type { Client } from "discord.js";

import { handleCommand } from "../handlers/commandHandler.js";
import { handleButton } from "../handlers/buttonHandler.js";

export function interactionCreateEvent(client: Client) {
  client.on("interactionCreate", async (interaction) => {
    console.log("🔥 Interaction received");

    try {
      if (interaction.isChatInputCommand()) {
        console.log(`📝 Command: ${interaction.commandName}`);

        await handleCommand(interaction);
        return;
      }

      if (interaction.isButton()) {
        console.log(`🔘 Button: ${interaction.customId}`);

        await handleButton(interaction);
        return;
      }
    } catch (error) {
      console.error("Interaction error:", error);

      if (!interaction.isRepliable()) return;

      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
          content: "❌ Something went wrong.",
          ephemeral: true,
        });
      } else {
        await interaction.reply({
          content: "❌ Something went wrong.",
          ephemeral: true,
        });
      }
    }
  });
}
