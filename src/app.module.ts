import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClipboardService } from './clipboard/clipboard.service';
import { ClipboardController } from './clipboard/clipboard.controller';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [],
  controllers: [AppController,  ClipboardController],
  providers: [AppService,  ClipboardService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(ClipboardController);
  }
}
