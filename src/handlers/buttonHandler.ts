import { ButtonInteraction } from "discord.js";

import { consumableButton } from "../buttons/consumable.js";
import { landingButton } from "../buttons/landing.js";
import { websiteButton } from "../buttons/website.js";
import { assignButton } from "../buttons/assign.js";
import { closeButton } from "../buttons/close.js";

export async function handleButton(interaction: ButtonInteraction) {
  switch (interaction.customId) {
    case "consumable":
      return consumableButton(interaction);

    case "landing":
      return landingButton(interaction);

    case "website":
      return websiteButton(interaction);

    case "assign":
      return assignButton(interaction);

    case "close":
      return closeButton(interaction);

    default:
      return interaction.reply({
        content: "❌ Unknown button interaction.",
        ephemeral: true,
      });
  }
}
