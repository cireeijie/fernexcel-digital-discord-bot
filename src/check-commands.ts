import "dotenv/config";

import { REST, Routes } from "discord.js";

const rest = new REST().setToken(process.env.DISCORD_TOKEN!);

async function checkCommands() {
  const commands = await rest.get(
    Routes.applicationGuildCommands(
      process.env.CLIENT_ID!,
      process.env.GUILD_ID!,
    ),
  );

  console.log(JSON.stringify(commands, null, 2));
}

checkCommands();
