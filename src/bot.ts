import "dotenv/config";

import { Client, Collection, GatewayIntentBits, Partials } from "discord.js";
import { config } from "./config.js";

import { registerEvents } from "./events/indext.js";

declare module "discord.js" {
  interface Client {
    commands: Collection<string, any>;
  }
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
  partials: [Partials.Channel],
});

client.commands = new Collection();

registerEvents(client);

client.login(config.discord.token);
