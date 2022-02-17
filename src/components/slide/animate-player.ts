export abstract class AnimatePlayer {
  // 初始化时调用，可以在此设置一个样式，做一些初始化相关操作
  protected constructor (protected container: HTMLElement, protected slideItems: HTMLElement[], protected progress: number) {
  }

  // 动画进度，如果 setup 方法，传入的是三张，那么 progress 的取值为 0 ~ 3，不包含 3，你可以根据当前动画进度，设置样式
  abstract update(progress: number): void;
}
