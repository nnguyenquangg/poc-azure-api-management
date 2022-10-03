import { AZURE_MANAGEMENT_CLIENT } from './constants/api-management-client.constant';
import { Provider } from '@nestjs/common';
import { ApiManagementClient } from '@azure/arm-apimanagement';
import { AzureAuthorityHosts, ClientSecretCredential } from '@azure/identity';
import { envConfig } from 'src/config/env.config';

export const AZURE_MANAGEMENT_CLIENT_PROVIDER: Provider = {
  provide: AZURE_MANAGEMENT_CLIENT,
  useFactory: async () => {
    const credential = new ClientSecretCredential(
      envConfig.TENANT_ID,
      envConfig.CLIENT_ID,
      envConfig.CLIENT_SECRET_KEY,
      {
        authorityHost: AzureAuthorityHosts.AzurePublicCloud,
      },
    );

    console.log(envConfig);

    const client = new ApiManagementClient(
      credential,
      envConfig.SUBSCRIPTION_ID,
    );
    return client;
  },
};
