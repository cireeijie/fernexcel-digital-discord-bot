import "dotenv/config";

import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },

  {
    name: "setup",
    description: "Create a service support panel",
    options: [
      {
        name: "service",
        description: "Select a service",
        type: 3,
        required: true,
        choices: [
          {
            name: "Consumable Hours",
            value: "consumable",
          },
          {
            name: "Landing Page",
            value: "landing",
          },
          {
            name: "Full Website Development",
            value: "fullweb",
          },
        ],
      },
    ],
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
