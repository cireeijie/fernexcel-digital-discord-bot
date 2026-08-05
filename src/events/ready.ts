import { Events } from "discord.js";
import type { Client } from "discord.js";

export function readyEvent(client: Client) {
  client.once(Events.ClientReady, (readyClient) => {
    console.log("=================================");
    console.log(`✅ Bot is online as ${readyClient.user.tag}`);
    console.log(`📡 Connected to ${readyClient.guilds.cache.size} server(s)`);
    console.log("=================================");
  });
}
