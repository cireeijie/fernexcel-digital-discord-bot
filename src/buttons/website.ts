import { ButtonInteraction } from "discord.js";
import { createTicket } from "../services/ticketService.js";

export async function websiteButton(interaction: ButtonInteraction) {
  await createTicket(interaction, {
    service: "Website Development",
    categoryId: process.env.CATEGORY_WEBSITE!,
  });
}
