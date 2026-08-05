import type { Client } from "discord.js";

import { readyEvent } from "./ready";
import { interactionCreateEvent } from "./interactionCreate";

export function registerEvents(client: Client) {
  readyEvent(client);
  interactionCreateEvent(client);
}
