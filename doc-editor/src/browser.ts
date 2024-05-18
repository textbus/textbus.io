import {
  blockquoteComponentLoader,
  highlightBoxComponentLoader,
  imageComponentLoader,
  listComponentLoader,
  paragraphComponentLoader,
  SourceCodeComponent,
  sourceCodeComponentLoader,
  tableComponentLoader,
  todolistComponentLoader,
  videoComponentLoader
} from '@textbus/xnote'
import { ComponentLoader } from '@textbus/platform-browser'
import { ContentType, Slot, Textbus } from '@textbus/core'

interface CodeLine {
  emphasize: boolean
  slot: Slot
}

function createCodeSlot(): CodeLine {
  return {
    slot: new Slot([ContentType.Text]),
    emphasize: false
  }
}

const preLoader: ComponentLoader = {
  match(element: HTMLElement): boolean {
    return element.classList.contains('tb-pre')
  },
  read(el: HTMLElement, textbus: Textbus): SourceCodeComponent {
    const lines = el.querySelectorAll('.tb-code-line')
    let slots: CodeLine[] = []
    if (lines.length) {
      slots = Array.from(lines).map(i => {
        const code = (i as HTMLElement).innerText.replace(/[\s\n]+$/, '')
        const slot = createCodeSlot()
        slot.emphasize = i.classList.contains('tb-code-line-emphasize')
        slot.slot.insert(code)
        return slot
      })
    } else {
      el.querySelectorAll('br').forEach(br => {
        br.parentNode!.replaceChild(document.createTextNode('\n'), br)
      })
      slots = el.innerText.split('\n').map(code => {
        const slot = createCodeSlot()
        slot.slot.insert(code)
        return slot
      })
    }

    return new SourceCodeComponent(textbus, {
      lang: el.dataset.lang || '',
      theme: el.dataset.theme || '',
      lineNumber: !!el.dataset.lineNumber || true,
      autoBreak: !!el.dataset.autoBreak || true,
      slots
    })
  }
}

export const componentLoaders: ComponentLoader[] = [
  preLoader,
  sourceCodeComponentLoader,
  highlightBoxComponentLoader,
  blockquoteComponentLoader,
  paragraphComponentLoader,
  todolistComponentLoader,
  tableComponentLoader,
  listComponentLoader,
  imageComponentLoader,
  videoComponentLoader,
]

