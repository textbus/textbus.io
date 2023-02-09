import { ContentType, defineComponent, jsx, Registry } from '@textbus/core';
import { Injectable } from '@tanbo/di';

const unknownComponent = defineComponent({
  type: ContentType.InlineComponent,
  name: 'UnknownComponent',
  setup() {
    return {
      render() {
        return jsx('div', {
          style: {
            color: 'red'
          },
          children: ['UnknownComponent']
        })
      }
    }
  }
})

@Injectable()
export class RegistryFallback extends Registry {
  getComponent(name: string) {
    const c = super.getComponent(name)
    if (!c) {
      return unknownComponent
    }
    return c
  }
}
