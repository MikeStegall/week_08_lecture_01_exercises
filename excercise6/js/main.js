function clock (element) {
  var clockEl = document.querySelector('div.time')
  var time = new Date()
  clockEl.innerHTML = time.toLocaleTimeString()
}

var digitalClock = setInterval(clock, 1000)
