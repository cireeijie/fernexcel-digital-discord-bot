import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChatInputCommandInteraction,
  EmbedBuilder,
  ChannelType,
  TextChannel,
} from "discord.js";

const services = {
  consumable: {
    title: "🟦 Consumable Development Hours",
    description:
      "Flexible development hours for ongoing improvements, fixes, and custom features.\n\n" +
      "Perfect for businesses that need occasional development support without a fixed project scope.\n\n" +
      "**Includes:**\n" +
      "• Shopify customization\n" +
      "• Bug fixes and improvements\n" +
      "• Feature enhancements\n" +
      "• Technical consultation",
    buttonLabel: "Request Consumable Hours",
    buttonId: "consumable",
    color: 0x3498db,
  },

  landing: {
    title: "🟩 Landing Page Development",
    description:
      "High-converting landing pages designed to showcase your product or service and turn visitors into customers.\n\n" +
      "**Includes:**\n" +
      "• Custom responsive design\n" +
      "• Mobile optimization\n" +
      "• Conversion-focused layout\n" +
      "• Shopify / Website integration\n" +
      "• SEO-friendly structure",
    buttonLabel: "Request Landing Page",
    buttonId: "landing",
    color: 0x2ecc71,
  },

  fullweb: {
    title: "🟪 Full Website Development",
    description:
      "Complete website solutions built for businesses that need a professional online presence.\n\n" +
      "**Includes:**\n" +
      "• Custom website development\n" +
      "• Frontend and backend solutions\n" +
      "• Database integration\n" +
      "• CMS integration\n" +
      "• Performance optimization",
    buttonLabel: "Request Website Development",
    buttonId: "fullweb",
    color: 0x9b59b6,
  },
};

export async function setupCommand(interaction: ChatInputCommandInteraction) {
  console.log("🚀 Setup command started");

  await interaction.deferReply({
    ephemeral: true,
  });

  const serviceName = interaction.options.getString("service");

  console.log("Selected service:", serviceName);

  if (!serviceName || !services[serviceName as keyof typeof services]) {
    return interaction.editReply("❌ Please select a valid service.");
  }

  const service = services[serviceName as keyof typeof services];

  if (
    !interaction.channel ||
    interaction.channel.type !== ChannelType.GuildText
  ) {
    return interaction.editReply(
      "❌ This command can only be used in a server text channel.",
    );
  }

  const embed = new EmbedBuilder()
    .setColor(service.color)
    .setTitle(service.title)
    .setDescription(service.description)
    .setFooter({
      text: "FERNexcel Digital",
    });

  const button = new ButtonBuilder()
    .setCustomId(service.buttonId)
    .setLabel(service.buttonLabel)
    .setStyle(ButtonStyle.Primary);

  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(button);

  await (interaction.channel as TextChannel).send({
    embeds: [embed],
    components: [row],
  });

  await interaction.editReply("✅ Service panel created.");

  console.log("✅ Setup completed");
}
