import type { Client } from "discord.js";

import { handleCommand } from "../handlers/commandHandler.js";
import { handleButton } from "../handlers/buttonHandler.js";

export function interactionCreateEvent(client: Client) {
  client.on("interactionCreate", async (interaction) => {
    try {
      if (interaction.isChatInputCommand()) {
        await handleCommand(interaction);
        return;
      }

      if (interaction.isButton()) {
        await handleButton(interaction);
        return;
      }
    } catch (error) {
      console.error(error);

      const reply = {
        content: "❌ Something went wrong.",
        ephemeral: true,
      };

      if (interaction.isRepliable()) {
        if (interaction.replied || interaction.deferred) {
          await interaction.followUp(reply);
        } else {
          await interaction.reply(reply);
        }
      }
    }
  });
}
