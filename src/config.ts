import "dotenv/config";

function required(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`❌ Missing required environment variable: ${name}`);
  }

  return value;
}

export const config = {
  discord: {
    token: required("DISCORD_TOKEN"),
    clientId: required("CLIENT_ID"),
    guildId: required("GUILD_ID"),
  },

  categories: {
    consumable: required("CATEGORY_CONSUMABLE"),
    landing: required("CATEGORY_LANDING"),
    website: required("CATEGORY_WEBSITE"),
  },

  roles: {
    support: required("SUPPORT_ROLE_ID"),
  },
};
