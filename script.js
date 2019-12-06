const evilButton = document.getElementById('evil-button');
const OFFSET = 100;

evilButton.addEventListener('click', () => {
  alert('Nice Try')
  window.close()
})

document.addEventListener('mouseover', (e) => {
  const x = e.pageX
  const y = e.pageY
  const buttonBox = evilButton.getBoundingClientRect()
  const horizontalDistanceForm = distanceFromCenter(buttonBox.x, x, buttonBox.width);
  const verticalDistanceForm = distanceFromCenter(buttonBox.y, y, buttonBox.height);
  const horizontalOffset = buttonBox.width / 2 + OFFSET;
  const verticalOffset = buttonBox.height / 2 + OFFSET;
  if(Math.abs(horizontalDistanceForm) <= horizontalOffset && Math.abs(verticalDistanceForm) <= verticalOffset) {
    setButtonPosition(
      buttonBox.x + horizontalOffset / horizontalDistanceForm * 10,
      buttonBox.y + verticalOffset / verticalDistanceForm * 10,
    )
  }
})

function setButtonPosition(left,top) {
  evilButton.style.left = `${left}px`
  evilButton.style.top = `${top}px`
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2
}