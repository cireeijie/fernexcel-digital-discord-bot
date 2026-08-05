import "dotenv/config";

import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "ping",
    description: "Check if the bot is online",
  },
  {
    name: "consumables",
    description: "Create consumable hours support panel",
  },
  {
    name: "landing",
    description: "Create landing page support panel",
  },
  {
    name: "fullweb",
    description: "Create website development support panel",
  },
];

const rest = new REST().setToken(process.env.DISCORD_TOKEN!);

async function deployCommands() {
  try {
    console.log("🔄 Registering slash commands...");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID!,
        process.env.GUILD_ID!,
      ),
      {
        body: commands,
      },
    );

    console.log("✅ Slash commands registered");
  } catch (error) {
    console.error(error);
  }
}

deployCommands();
