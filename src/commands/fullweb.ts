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
      "Complete website solutions for businesses needing a professional online presence.\n\n" +
        "**Includes:**\n" +
        "• Frontend and backend development\n" +
        "• Database integration\n" +
        "• CMS integration\n" +
        "• Performance optimization",
    )
    .setFooter({
      text: "FERNexcel Digital",
    });

  const button = new ButtonBuilder()
    .setCustomId("fullweb")
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
