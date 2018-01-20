window.addEventListener('DOMContentLoaded', function() {
  carousel()
})


function carousel() {
  const carousels = document.querySelectorAll('syn-carousel')
  if (!carousels.length) return

  carousels.forEach(function(carousel) {
    const interval = parseInt(carousel.getAttribute('interval'), 10) || 3000
    const hasButtons = carousel.hasAttribute('buttons')

    if (hasButtons) {
      carousel.innerHTML += `<div class="controls"><button class="left-button">&lt;</button><button class="right-button">&gt;</button></div>`
      carousel.querySelectorAll('button').forEach(function(button) { 
        button.addEventListener('click', function(ev) {
          ev.stopPropagation()
          ev.target.classList.contains('left-button') ? current > 0 ? current-- : current = slides.length - 1 : current < slides.length - 1 ? current++ : current = 0 
          init()
        })
      })
    }

    const slides = Array.prototype.slice.call(carousel.children).filter(el => !el.classList.contains('controls'))
    let current = 0
    let intervalId
    function init() {
      if (intervalId) clearInterval(intervalId)
      intervalId = setInterval(function () {
        current < slides.length - 1 ? current++ : current = 0
        frame(current)
      }, interval)
      frame(current)
    }

    init()

    function frame(currentSlide) {
      requestAnimationFrame(function() {
        for (let i = 0; i <= slides.length - 1; i++) {
          i === currentSlide ? slides[i].classList.add('active') : slides[i].classList.remove('active')
        }
      })
    }
  })
}