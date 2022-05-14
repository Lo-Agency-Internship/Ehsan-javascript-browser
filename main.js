// Select the elements and place them in the variable

const button = document.querySelector('.btn')
const body = document.querySelector('body')
const item = document.querySelector('.hexItem')
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
// eventListener
button.addEventListener('click', doHex)
// this function changes hex color
function doHex() {
    let hex = '#';
    for( let i = 0; i < 6; i++) {
      const randomItem = Math.floor(Math.random() * hexValues.length)
      hex += hexValues[randomItem]
    }
   item.innerHTML = hex
  body.style.backgroundColor = hex
}
