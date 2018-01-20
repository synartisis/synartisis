window.addEventListener('DOMContentLoaded', function() {
  flipcard()
})


function flipcard() {
  var flipCards = [...document.querySelectorAll('.syn-flip')]
  flipCards.forEach(function(card) { 
    card.addEventListener('click', function(ev) {
      card.classList.toggle('flipped')
    })
  })
}
