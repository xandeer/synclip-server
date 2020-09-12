import { Injectable } from '@nestjs/common';
import { readSync, writeSync } from 'clipboardy';
import { Clipboard } from './interfaces/clipboard.interface';

@Injectable()
export class ClipboardService {
  write(clipboard: Clipboard) {
    writeSync(clipboard.content);
  }

  read(): Clipboard {
    return {
      content: readSync(),
    }
  }
}
