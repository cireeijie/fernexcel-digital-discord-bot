import { ButtonInteraction } from "discord.js";
import { createTicket } from "../services/ticketService.js";

export async function landingButton(interaction: ButtonInteraction) {
  await createTicket(interaction, {
    service: "Landing Page",
    categoryId: process.env.CATEGORY_LANDING!,
  });
}
