import "dotenv/config";

import { REST, Routes, SlashCommandBuilder } from "discord.js";
import { config } from "./config.js";

const commands = [
  new SlashCommandBuilder()
    .setName("setup")
    .setDescription("Create the support ticket panel"),

  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Check if the bot is online"),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(config.discord.token);

async function deployCommands() {
  try {
    console.log("🚀 Registering slash commands...");

    await rest.put(
      Routes.applicationGuildCommands(
        config.discord.clientId,
        config.discord.guildId,
      ),
      {
        body: commands,
      },
    );

    console.log("✅ Slash commands registered successfully!");
  } catch (error) {
    console.error("❌ Failed to register commands:");
    console.error(error);
  }
}

deployCommands();
