import type { Client } from "discord.js";

import { interactionCreateEvent } from "./interactionCreate.js";
import { readyEvent } from "./ready.js";

export function registerEvents(client: Client) {
  readyEvent(client);
  interactionCreateEvent(client);
}
