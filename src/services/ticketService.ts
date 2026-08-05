import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonInteraction,
  ButtonStyle,
  ChannelType,
  EmbedBuilder,
  PermissionFlagsBits,
  TextChannel,
} from "discord.js";

import { config } from "../config.js";

interface TicketOptions {
  service: string;
  categoryId: string;
}

export async function createTicket(
  interaction: ButtonInteraction,
  options: TicketOptions,
) {
  const guild = interaction.guild;

  if (!guild) {
    return interaction.reply({
      content: "❌ This command can only be used inside a server.",
      ephemeral: true,
    });
  }

  // Check if the user already has an open ticket
  const existingTicket = guild.channels.cache.find((channel) => {
    return (
      channel.type === ChannelType.GuildText &&
      channel.parentId === options.categoryId &&
      channel.name === `ticket-${interaction.user.id}`
    );
  });

  if (existingTicket) {
    return interaction.reply({
      content: `⚠️ You already have an open ticket: ${existingTicket}`,
      ephemeral: true,
    });
  }

  // Create the ticket channel
  const channel = await guild.channels.create({
    name: `ticket-${interaction.user.id}`,
    type: ChannelType.GuildText,
    parent: options.categoryId,

    permissionOverwrites: [
      // Hide ticket from everyone
      {
        id: guild.roles.everyone.id,
        deny: [PermissionFlagsBits.ViewChannel],
      },

      // Ticket Creator
      {
        id: interaction.user.id,
        allow: [
          PermissionFlagsBits.ViewChannel,
          PermissionFlagsBits.SendMessages,
          PermissionFlagsBits.ReadMessageHistory,
          PermissionFlagsBits.AttachFiles,
          PermissionFlagsBits.EmbedLinks,
        ],
      },

      // Support Role
      {
        id: config.roles.support,
        allow: [
          PermissionFlagsBits.ViewChannel,
          PermissionFlagsBits.SendMessages,
          PermissionFlagsBits.ReadMessageHistory,
          PermissionFlagsBits.ManageMessages,
          PermissionFlagsBits.AttachFiles,
          PermissionFlagsBits.EmbedLinks,
        ],
      },

      // Server Owner
      {
        id: guild.ownerId,
        allow: [
          PermissionFlagsBits.ViewChannel,
          PermissionFlagsBits.SendMessages,
          PermissionFlagsBits.ReadMessageHistory,
          PermissionFlagsBits.ManageMessages,
          PermissionFlagsBits.ManageChannels,
        ],
      },
    ],
  });

  if (!channel || channel.type !== ChannelType.GuildText) {
    return interaction.reply({
      content: "❌ Failed to create ticket.",
      ephemeral: true,
    });
  }

  // Ticket Embed
  const embed = new EmbedBuilder()
    .setColor(0x5865f2)
    .setTitle("🎫 Support Ticket")
    .setDescription(
      `Welcome ${interaction.user}!\n\n` +
        `**Service:** ${options.service}\n\n` +
        "Please describe your issue and a member of our support team will assist you shortly.",
    )
    .setFooter({
      text: "FernExcel Support",
    })
    .setTimestamp();

  // Buttons
  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId("assign")
      .setLabel("Assign")
      .setEmoji("👤")
      .setStyle(ButtonStyle.Primary),

    new ButtonBuilder()
      .setCustomId("close")
      .setLabel("Close")
      .setEmoji("🔒")
      .setStyle(ButtonStyle.Danger),
  );

  // Send first message
  await (channel as TextChannel).send({
    content: `<@&${config.roles.support}> ${interaction.user}`,
    embeds: [embed],
    components: [row],
  });

  // Respond to user
  await interaction.reply({
    content: `✅ Your ticket has been created: ${channel}`,
    ephemeral: true,
  });
}
