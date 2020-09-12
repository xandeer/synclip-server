import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClipboardService } from './clipboard/clipboard.service';
import { ClipboardController } from './clipboard/clipboard.controller';

@Module({
  imports: [],
  controllers: [AppController,  ClipboardController],
  providers: [AppService,  ClipboardService],
})
export class AppModule {}
