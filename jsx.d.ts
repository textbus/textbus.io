import { HTMLAttributes } from '@viewfly/platform-browser'

declare module '@viewfly/core/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'tb-alert': HTMLAttributes<HTMLElement>
      'tb-todolist': HTMLAttributes<HTMLElement>
    }
  }
}
