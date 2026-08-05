import { pingCommand } from "./ping.js";
import { consumablesCommand } from "./consumables.js";
import { landingCommand } from "./landing.js";
import { fullwebCommand } from "./fullweb.js";

import type { ChatInputCommandInteraction } from "discord.js";

type CommandHandler = (
  interaction: ChatInputCommandInteraction,
) => Promise<unknown>;

export const commands: Record<string, CommandHandler> = {
  ping: pingCommand,
  consumables: consumablesCommand,
  landing: landingCommand,
  fullweb: fullwebCommand,
};
