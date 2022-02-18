import { Injectable } from '@tanbo/di';
import { Subject } from '@tanbo/stream';

@Injectable()
export class DocService {
  onUpdate = new Subject<HTMLElement>()
}
