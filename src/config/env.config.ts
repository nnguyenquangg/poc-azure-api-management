// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export const envConfig = {
  PORT: Number(process.env.PORT),
  SUBSCRIPTION_ID: process.env.SUBSCRIPTION_ID,
  TENANT_ID: process.env.TENANT_ID,
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET_KEY: process.env.CLIENT_SECRET_KEY,
  RESOURCE_GROUP_NAME: process.env.RESOURCE_GROUP_NAME,
  SERVICE_NAME: process.env.SERVICE_NAME,
};
