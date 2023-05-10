/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration, OpenAIApi } from 'openai';


@Injectable()
export class AIService {
  private openai: OpenAIApi;

  constructor(private configService: ConfigService) {
    const configuration = new Configuration({
        apiKey : this.configService.get('OPENAI_API_KEY')
    })
    this.openai = new OpenAIApi(configuration);
  }

  async generateText(prompt: string) {
    const response = await this.openai.createChatCompletion({
      model : "gpt-3.5-turbo",
      messages : [
        {"role": "system", "content": "You are a helpful assistant in teaching kindergarden."},
        {"role": "user", "content": "Please give a example definition of c#"},
        {"role": "assistant", "content": "C# is programming language"},
        {"role": "user", "content": "How let it understandable by 6 years old kid?"}
      ],
      temperature: 1,
      max_tokens: 100,
    });
    console.log(response.data.choices[0].message)
    return response;
  }
}
