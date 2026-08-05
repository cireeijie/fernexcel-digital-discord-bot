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
      "High-converting landing pages designed to showcase your product or service.\n\n" +
        "**Includes:**\n" +
        "• Custom responsive design\n" +
        "• Mobile optimization\n" +
        "• Conversion-focused layout\n" +
        "• SEO-friendly structure",
    )
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
