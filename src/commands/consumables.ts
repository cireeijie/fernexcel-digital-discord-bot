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
      "Flexible development hours for ongoing improvements, fixes, and custom features.\n\n" +
        "**Includes:**\n" +
        "• Shopify customization\n" +
        "• Bug fixes and improvements\n" +
        "• Feature enhancements\n" +
        "• Technical consultation",
    )
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
