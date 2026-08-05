import { pingCommand } from "./ping.js";
import { setupCommand } from "./setup.js";

import type { ChatInputCommandInteraction } from "discord.js";

export type CommandHandler = (
  interaction: ChatInputCommandInteraction,
) => Promise<unknown>;

export const commands: Record<string, CommandHandler> = {
  ping: pingCommand,
  setup: setupCommand,
};
