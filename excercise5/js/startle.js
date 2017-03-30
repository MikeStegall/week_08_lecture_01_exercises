// startle.js
function boo () {
  var bodyEl = document.querySelector('body')
  bodyEl.classList.add('scary')
}

function startle () {
  // todo: write code that produces a delayed reaction.
  var delay = setTimeout(boo, 3000)
}
