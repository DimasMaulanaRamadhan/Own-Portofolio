export function smoothScrollTo(targetId, duration = DEFAULT_DURATION) {
  const target = document.getElementById(targetId)
  if (!target) return

  document.documentElement.classList.add('custom-scrolling')

  const startY = window.scrollY
  const targetY = target.getBoundingClientRect().top + startY
  const distance = targetY - startY
  const startTime = performance.now()

  function step(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    window.scrollTo(0, startY + distance * progress)
    
    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      document.documentElement.classList.remove('custom-scrolling')
    }
  }

  requestAnimationFrame(step)
}