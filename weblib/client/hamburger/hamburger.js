window.addEventListener('DOMContentLoaded', function() {
  hamburger()
})


// HAMBURGER MENU
function hamburger() {
  const nav = document.querySelector('.syn-hamburger')
  if (!nav) return
  markActive()
  if (!document.querySelector('.syn-hamburger > ul')) { console.error('syn-hamburger must have a UL child'); return }
  const navToggle = document.createElement('button')
  navToggle.textContent = '☰'
  navToggle.addEventListener('click', function() { nav.classList.toggle('syn-hamburger-open') })
  nav.insertBefore(navToggle, nav.children.item(0))
  document.querySelectorAll('li > a').forEach(function(a) { a.addEventListener('click', function() { nav.classList.remove('syn-hamburger-open'); markActive() }) })
  function markActive() {
    setTimeout(() => {
      const pathname = location.hash || location.pathname
      nav.querySelectorAll('a').forEach(o => o.parentNode.classList.remove('active'))
      const selected = nav.querySelector('a[href*="' + pathname + '"]')
      if (selected) selected.parentNode.classList.add('active')
    })
  }
}
