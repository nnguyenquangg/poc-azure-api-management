import {
  ApiManagementClient,
  SubscriptionContract,
  SubscriptionCreateOrUpdateResponse,
  SubscriptionCreateParameters,
  SubscriptionGetResponse,
} from '@azure/arm-apimanagement';
import { Inject, Injectable } from '@nestjs/common';
import { envConfig } from 'src/config/env.config';
import { AZURE_MANAGEMENT_CLIENT } from '../constants/api-management-client.constant';

@Injectable()
export class SubscriptionManagementService {
  private resourceGroupName = envConfig.RESOURCE_GROUP_NAME;
  private serviceName = envConfig.SERVICE_NAME;

  constructor(
    @Inject(AZURE_MANAGEMENT_CLIENT) private client: ApiManagementClient,
  ) {}

  getAllSubscriptions(): Promise<IteratorResult<SubscriptionContract[], any>> {
    return this.client.subscription
      .list(this.resourceGroupName, this.serviceName)
      .byPage()
      .next();
  }

  findById(id: string): Promise<SubscriptionGetResponse> {
    return this.client.subscription.get(
      this.resourceGroupName,
      this.serviceName,
      id,
    );
  }

  async createOrUpdate(
    dto: SubscriptionCreateParameters,
    query: { sid: string; nameScope: string },
  ): Promise<SubscriptionCreateOrUpdateResponse> {
    const api = await this.client.api.get(
      this.resourceGroupName,
      this.serviceName,
      query.nameScope,
    );

    return this.client.subscription.createOrUpdate(
      this.resourceGroupName,
      this.serviceName,
      query.sid,
      {
        ...dto,
        scope: api.id,
      },
    );
  }

  delete(id: string): Promise<void> {
    return this.client.subscription.delete(
      this.resourceGroupName,
      this.serviceName,
      id,
      '*',
    );
  }
}
