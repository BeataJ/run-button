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
})

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2
}