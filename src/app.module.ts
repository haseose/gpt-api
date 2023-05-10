import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GptWrapperController } from './gpt-wrapper/gpt-wrapper.controller';
import { AIService } from './gpt-wrapper/gpt-wrapper.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, GptWrapperController],
  providers: [AppService, AIService],
})
export class AppModule {}
