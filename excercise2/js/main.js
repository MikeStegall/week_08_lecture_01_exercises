// Write JavaScript that will select all of the div tags with a class of foo
// and log them to the console.
var fooEl = document.querySelectorAll('div.foo')
for (var i = 0; i < fooEl.length; i++) {
  console.log(fooEl[i].innerHTML)
}
