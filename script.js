const evilButton = document.getElementById('evil-button');

evilButton.addEventListener('click', () => {
  alert('Nice Try')
  window.close()
})

document.addEventListener('mouseover', (e) => {
  const x = e.pageX
  const y = e.pageY
  console.log(x, y)
})