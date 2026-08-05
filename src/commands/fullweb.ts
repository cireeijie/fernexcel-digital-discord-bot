import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChatInputCommandInteraction,
  EmbedBuilder,
  ChannelType,
  TextChannel,
} from "discord.js";

export async function fullwebCommand(interaction: ChatInputCommandInteraction) {
  const embed = new EmbedBuilder()
    .setColor(0x9b59b6)
    .setTitle("🟪 Full Website Development")
    .setDescription(
      "Complete website solutions built for businesses that need a professional and scalable online presence.\n\n" +
        "Includes:\n" +
        "• Custom website design and development\n" +
        "• Multiple pages and sections\n" +
        "• Frontend development\n" +
        "• Backend and database integration\n" +
        "• CMS integration\n" +
        "• Performance optimization\n" +
        "• Deployment support\n\n" +
        "💡 Best for businesses that need a complete website solution beyond a single landing page.",
    )
    .addFields({
      name: "💰 Pricing",
      value:
        "Starting at **$1,499**\n\n" +
        "Custom quotes are provided based on project scope, features, and integrations.",
    })
    .setFooter({
      text: "FERNexcel Digital",
    });

  const button = new ButtonBuilder()
    .setCustomId("website")
    .setLabel("Request Website Development")
    .setStyle(ButtonStyle.Secondary);

  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(button);

  await interaction.reply({
    content: "✅ Website development panel created.",
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
