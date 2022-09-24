/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


declare module '*.json' {
  declare const json: any;
  export default json
}
declare module '*.jpg' {
  declare const img: any;
  export default img
}
declare module '*.png' {
  declare const img: any;
  export default img
}
