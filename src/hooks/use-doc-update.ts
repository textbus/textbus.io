import { useReflectiveInjector } from '@tanbo/vue-di-plugin';
import { DocService } from '@/services/doc.service';
import { onMounted, Ref } from 'vue';

export function useDocUpdate(doc: Ref<HTMLElement | undefined>) {
  const injector = useReflectiveInjector()
  const service = injector.get(DocService)
  onMounted(() => {
    service.onUpdate.next(doc.value!)
  })
}
