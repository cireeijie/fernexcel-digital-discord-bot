import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChatInputCommandInteraction,
  EmbedBuilder,
  ChannelType,
  TextChannel,
} from "discord.js";

export async function landingCommand(interaction: ChatInputCommandInteraction) {
  const embed = new EmbedBuilder()
    .setColor(0x2ecc71)
    .setTitle("🟩 Landing Page Development")
    .setDescription(
      "High-converting landing pages designed to showcase your product, service, or campaign and turn visitors into customers.\n\n" +
        "Includes:\n" +
        "• Custom page design and development\n" +
        "• Responsive mobile-friendly layout\n" +
        "• Conversion-focused structure\n" +
        "• Contact forms and integrations\n" +
        "• Basic SEO optimization\n" +
        "• Deployment support\n\n" +
        "💡 Best for businesses that need a professional marketing page built to attract and convert visitors.",
    )
    .addFields({
      name: "💰 Pricing",
      value:
        "Starting at **$499**\n\n" +
        "Final pricing depends on design complexity, features, integrations, and requirements.",
    })
    .setFooter({
      text: "FERNexcel Digital",
    });

  const button = new ButtonBuilder()
    .setCustomId("landing")
    .setLabel("Request Landing Page")
    .setStyle(ButtonStyle.Success);

  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(button);

  await interaction.reply({
    content: "✅ Landing page panel created.",
    ephemeral: true,
  });

  if (
    !interaction.channel ||
    interaction.channel.type !== ChannelType.GuildText
  ) {
    return interaction.editReply({
      content: "❌ This command can only be used in a server text channel.",
    });
  }

  await (interaction.channel as TextChannel).send({
    embeds: [embed],
    components: [row],
  });
}
