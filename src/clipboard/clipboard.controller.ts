import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClipboardService } from './clipboard.service';
import { WriteDto } from './dto/write.dto';
import { Clipboard } from './interfaces/clipboard.interface';

@Controller('clipboard')
export class ClipboardController {
  constructor(private clipboardService: ClipboardService) {}

  @Get()
  async read(): Promise<Clipboard> {
    return this.clipboardService.read();
  }

  @Post()
  async writeText(@Body() writeDto: WriteDto) {
    if (writeDto.content) {
      this.clipboardService.write(writeDto);
      return writeDto;
    } else {
      return {
        err: 'content not contained.'
      };
    }
  }
}
