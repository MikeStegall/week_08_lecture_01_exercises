// Given the following HTML document, write JavaScript code that will remove any
// list elements containing the letter "a". For all remaining list items, set
// the element's title to the text of the item. EG: If the item's text is
// "sandwich" it would be removed. If the item's text is "egg" the item's title
// would be set to "egg".
console.log('hi')

var liEl = document.querySelectorAll('li')
for (var i = 0; i < liEl.length; i++) {
  if (liEl[i].textContent.indexOf('a') !== -1) {
    liEl[i].remove()
  } else {
    liEl[i].title = liEl[i].textContent
  }
}
