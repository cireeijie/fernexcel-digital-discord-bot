import { ButtonInteraction } from "discord.js";

import { consumableButton } from "../buttons/consumable.js";
import { landingButton } from "../buttons/landing.js";
import { websiteButton } from "../buttons/website.js";
import { assignButton } from "../buttons/assign.js";
import { closeButton } from "../buttons/close.js";
import { closeConfirmButton } from "../buttons/closeConfirm.js";
import { closeCancelButton } from "../buttons/closeCancel.js";

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

    case "close_confirm":
      return closeConfirmButton(interaction);

    case "close_cancel":
      return closeCancelButton(interaction);

    default:
      return interaction.reply({
        content: "❌ Unknown button interaction.",
        ephemeral: true,
      });
  }
}
