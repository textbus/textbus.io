import { Injectable } from '@tanbo/di';
import { Subject } from '@tanbo/stream';

@Injectable()
export class AppService {
  onInHome = new Subject<boolean>()
}
