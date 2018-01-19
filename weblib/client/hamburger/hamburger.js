window.addEventListener('DOMContentLoaded', function() {
  hamburger()
})


// HAMBURGER MENU
function hamburger() {
  const nav = document.querySelector('.syn-hamburger')
  if (!nav) return
  if (!document.querySelector('.syn-hamburger > ul')) { console.error('syn-hamburger must have a UL child'); return }
  const navToggle = document.createElement('button')
  navToggle.textContent = '☰'
  navToggle.addEventListener('click', function() { nav.classList.toggle('syn-hamburger-open') })
  nav.insertBefore(navToggle, nav.children.item(0))
  document.querySelectorAll('li > a').forEach(function(a) { a.addEventListener('click', function() { nav.classList.remove('syn-hamburger-open') }) })
}
