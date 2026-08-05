import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChatInputCommandInteraction,
  EmbedBuilder,
  ChannelType,
  TextChannel,
} from "discord.js";

export async function setupCommand(interaction: ChatInputCommandInteraction) {
  const embed = new EmbedBuilder()
    .setColor(0x5865f2)
    .setTitle("🎫 FernExcel Support")
    .setDescription(
      "Welcome to FernExcel Support!\n\n" +
        "Please choose the service you need by clicking one of the buttons below.",
    );

  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId("consumable")
      .setLabel("Consumable Hours")
      .setEmoji("🟦")
      .setStyle(ButtonStyle.Primary),

    new ButtonBuilder()
      .setCustomId("landing")
      .setLabel("Landing Page")
      .setEmoji("🟩")
      .setStyle(ButtonStyle.Success),

    new ButtonBuilder()
      .setCustomId("website")
      .setLabel("Website Development")
      .setEmoji("🟪")
      .setStyle(ButtonStyle.Secondary),
  );

  if (
    !interaction.channel ||
    interaction.channel.type !== ChannelType.GuildText
  ) {
    return interaction.reply({
      content: "❌ This command can only be used in a server text channel.",
      ephemeral: true,
    });
  }

  await (interaction.channel as TextChannel).send({
    embeds: [embed],
    components: [row],
  });

  await interaction.reply({
    content: "✅ Ticket panel created.",
    ephemeral: true,
  });
}
