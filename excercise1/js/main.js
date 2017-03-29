// Given the following HTML, write JavaScript that selects the span elements in
// the HTML below and logs them to the console.
var spanEl = document.querySelectorAll('span')
for (var i = 0; i < spanEl.length; i++) {
  console.log(spanEl[i].innerHTML)
}
