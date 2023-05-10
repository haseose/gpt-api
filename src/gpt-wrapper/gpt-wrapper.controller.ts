/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AIService } from './gpt-wrapper.service';
import { Observable } from 'rxjs';

@Controller('gpt-wrapper')
export class GptWrapperController {
    constructor(private readonly aiService: AIService) { }

    @Get()
    async getHello() 
    {
        await this.aiService.generateText("Please name a good shopp name that sell toy");
        //return await this.aiService.generateText("Please name a good shopp name that sell toy");
        return "test";
    }
}
