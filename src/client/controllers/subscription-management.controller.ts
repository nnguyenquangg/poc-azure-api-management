import {
  SubscriptionContract,
  SubscriptionCreateOrUpdateResponse,
  SubscriptionCreateParameters,
  SubscriptionGetResponse,
} from '@azure/arm-apimanagement';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { SubscriptionManagementService } from '../services/subscription-management.service';

@Controller('subscriptions-management')
export class SubscriptionsManagementController {
  constructor(
    private subscriptionManagementService: SubscriptionManagementService,
  ) {}

  @Get()
  getAllSubscriptions(): Promise<IteratorResult<SubscriptionContract[], any>> {
    return this.subscriptionManagementService.getAllSubscriptions();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<SubscriptionGetResponse> {
    return this.subscriptionManagementService.findById(id);
  }

  @Post()
  createOrUpdate(
    @Body() body: SubscriptionCreateParameters,
    @Query() query: { sid: string; nameScope: string },
  ): Promise<SubscriptionCreateOrUpdateResponse> {
    return this.subscriptionManagementService.createOrUpdate(body, query);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.subscriptionManagementService.delete(id);
  }
}
