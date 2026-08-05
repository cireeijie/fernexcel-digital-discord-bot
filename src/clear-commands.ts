import "dotenv/config";
import { REST, Routes } from "discord.js";

const rest = new REST().setToken(process.env.DISCORD_TOKEN!);

async function clearCommands() {
  try {
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID!,
        process.env.GUILD_ID!,
      ),
      {
        body: [],
      },
    );

    console.log("✅ All guild commands cleared");
  } catch (error) {
    console.error(error);
  }
}

clearCommands();
