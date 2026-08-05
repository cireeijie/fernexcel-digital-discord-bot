import type { Client } from "discord.js";

import { handleCommand } from "../handlers/commandHandler.js";
import { handleButton } from "../handlers/buttonHandler.js";

export function interactionCreateEvent(client: Client) {
  client.on("interactionCreate", async (interaction) => {
    console.log("🔥 Interaction received");

    if (interaction.isChatInputCommand()) {
      console.log(`📝 Slash command: ${interaction.commandName}`);

      await handleCommand(interaction);
      return;
    }

    if (interaction.isButton()) {
      console.log(`🔘 Button: ${interaction.customId}`);

      await handleButton(interaction);
      return;
    }
  });
}
