import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChatInputCommandInteraction,
  EmbedBuilder,
  ChannelType,
  TextChannel,
} from "discord.js";

export async function consumablesCommand(
  interaction: ChatInputCommandInteraction,
) {
  const embed = new EmbedBuilder()
    .setColor(0x3498db)
    .setTitle("🟦 Consumable Development Hours")
    .setDescription(
      "Flexible development support for businesses that already have an existing website or online store and need ongoing improvements, fixes, and technical assistance.\n\n" +
        "Perfect for:\n" +
        "• Shopify customizations\n" +
        "• Bug fixes and troubleshooting\n" +
        "• Existing website improvements\n" +
        "• Feature enhancements\n" +
        "• Content and layout updates\n" +
        "• Technical consultation\n\n" +
        "⚠️ This service is intended for existing websites and online stores. It does not include building new websites, landing pages, or complete website projects.\n\n" +
        "💡 Best for businesses that need a developer available for continuous improvements without committing to a full project.",
    )
    .addFields({
      name: "💰 Available Packages",
      value:
        "🟦 **10 Hours** — $200\n" +
        "Best for small fixes, updates, and quick improvements.\n\n" +
        "🟩 **30 Hours** — $550 ⭐ Best Value\n" +
        "Ideal for ongoing website maintenance, enhancements, and technical support.\n\n" +
        "🟪 **60 Hours** — $1,000 ⭐ Recommended\n" +
        "Perfect for long-term website improvements, optimization, and continuous support.",
    })
    .setFooter({
      text: "FERNexcel Digital",
    });

  const button = new ButtonBuilder()
    .setCustomId("consumable")
    .setLabel("Request Consumable Hours")
    .setStyle(ButtonStyle.Primary);

  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(button);

  await interaction.reply({
    content: "✅ Consumable panel created.",
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
