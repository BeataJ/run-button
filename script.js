const evilButton = document.getElementById('evil-button');

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
})

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2
}