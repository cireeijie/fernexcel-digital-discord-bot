import { ButtonInteraction } from "discord.js";

export async function closeCancelButton(interaction: ButtonInteraction) {
  return interaction.update({
    content: "✅ Ticket deletion cancelled.",
    components: [],
  });
}
