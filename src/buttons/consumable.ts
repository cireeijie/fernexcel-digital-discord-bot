import { ButtonInteraction } from "discord.js";
import { createTicket } from "../services/ticketService.js";

export async function consumableButton(interaction: ButtonInteraction) {
  await createTicket(interaction, {
    service: "Consumable Hours",
    categoryId: process.env.CATEGORY_CONSUMABLE!,
  });
}
