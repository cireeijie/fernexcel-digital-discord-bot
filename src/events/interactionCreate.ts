import type { Client } from "discord.js";

export function interactionCreateEvent(client: Client) {
  client.on("interactionCreate", async (interaction) => {
    console.log(
      `[Interaction] ${interaction.type} from ${interaction.user.username}`,
    );
  });
}
