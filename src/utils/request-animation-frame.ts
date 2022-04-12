export function useRaf(callback: () => void) {

  let timer: number = 0
  function run() {
    timer = requestAnimationFrame(() => {
      callback()
      run()
    })
  }

  requestAnimationFrame(run)

  function resume() {
    requestAnimationFrame(run)
  }

  function pause() {
    cancelAnimationFrame(timer)
  }

  return {
    resume,
    pause
  }
}

