import { Module } from '@nestjs/common';
import { AZURE_MANAGEMENT_CLIENT_PROVIDER } from './api-management-client.provider';
import { SubscriptionsManagementController } from './controllers/subscription-management.controller';
import { SubscriptionManagementService } from './services/subscription-management.service';

@Module({
  providers: [AZURE_MANAGEMENT_CLIENT_PROVIDER, SubscriptionManagementService],
  controllers: [SubscriptionsManagementController],
})
export class AzureManagementClientModule {}
