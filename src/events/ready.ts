import type { Client } from "discord.js";

export function readyEvent(client: Client) {
  client.once("ready", () => {
    console.log("=================================");
    console.log(`✅ Logged in as ${client.user?.tag}`);
    console.log(`🆔 ${client.user?.id}`);
    console.log("🚀 FernExcel Discord Bot is online.");
    console.log("=================================");
  });
}
