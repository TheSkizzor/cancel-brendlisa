const cancelBtn = document.querySelector('#cancel')
const bg = document.querySelector('#bg')
const main = document.querySelector('#main')
const nav = document.querySelector('#nav')

// STICKY NAV
window.onscroll = stickyNav;
const stickPos = nav.offsetTop;
function stickyNav() {
  if (window.pageYOffset >= stickPos) {
		nav.classList.add("sticky")
  } else {
		nav.classList.remove("sticky")
  }
}

// BUTTON ANIMATION
animateOut()
cancelBtn.addEventListener('mouseover', animateIn)
cancelBtn.addEventListener('mouseout', animateOut)
function animateIn() {
	bg.style.filter = 'brightness(0.4)'
	main.style.backdropFilter = 'blur(4px)'
}
function animateOut() {
	bg.style.filter = 'brightness(0.7)'
	main.style.backdropFilter = 'blur(1px)'
}

// BUTTON ONCLICK
cancelBtn.addEventListener('click', () => {
	window.location.href = '#test'
})