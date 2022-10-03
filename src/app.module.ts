import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AzureManagementClientModule } from './client/api-management-client.module';

@Module({
  imports: [AzureManagementClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
