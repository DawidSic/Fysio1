const navBtn = document.querySelector('.burger-btn')
const navList = document.querySelector('.nav-list')
const nav = document.querySelector('.nav')
const allNavItems = document.querySelectorAll('.nav-item')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	nav.classList.toggle('nav-active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav-active')
		})
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

navBtn.addEventListener('click', handleNav)

document.addEventListener('DOMContentLoaded', function () {
	const serviceBlocks = document.querySelectorAll('.service')

	serviceBlocks.forEach(service => {
		const button = service.querySelector('.arrow-toggle')
		const contentId = button.getAttribute('aria-controls')
		const content = document.getElementById(contentId)
		const arrow = button.querySelector('.arrow')

		function toggle() {
			const isExpanded = button.getAttribute('aria-expanded') === 'true'

			if (isExpanded) {
				// Close this one
				content.classList.remove('visible')
				arrow.classList.remove('rotated')
				button.setAttribute('aria-expanded', 'false')
			} else {
				// Close all others first
				serviceBlocks.forEach(otherService => {
					if (otherService !== service) {
						const otherButton = otherService.querySelector('.arrow-toggle')
						const otherContentId = otherButton.getAttribute('aria-controls')
						const otherContent = document.getElementById(otherContentId)
						const otherArrow = otherButton.querySelector('.arrow')

						otherContent.classList.remove('visible')
						otherArrow.classList.remove('rotated')
						otherButton.setAttribute('aria-expanded', 'false')
					}
				})

				// Open this one
				content.classList.add('visible')
				arrow.classList.add('rotated')
				button.setAttribute('aria-expanded', 'true')
			}
		}

		// Click anywhere on the service toggles it
		service.addEventListener('click', () => toggle())

		// Keyboard toggle on button: Enter or Space
		button.addEventListener('keydown', e => {
			if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
				e.preventDefault()
				toggle()
			}
		})
	})
})

const cards = document.querySelectorAll('.therapists-card')

const observer = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible')
				observer.unobserve(entry.target) // animate only once
			}
		})
	},
	{ threshold: 0.1 }
)

cards.forEach(card => observer.observe(card))

document.querySelectorAll('.therapists-card').forEach(card => {
	const aboutBtn = card.querySelector('.button-about')
	const contactBtn = card.querySelector('.button-contact')
	const backBtns = card.querySelectorAll('.button-back')

	aboutBtn.addEventListener('click', () => {
		card.classList.add('show-about')
		card.classList.remove('show-contact')
	})

	contactBtn.addEventListener('click', () => {
		card.classList.add('show-contact')
		card.classList.remove('show-about')
	})

	backBtns.forEach(btn =>
		btn.addEventListener('click', () => {
			card.classList.remove('show-about', 'show-contact')
		})
	)
})

document.addEventListener('click', function (e) {
	document.querySelectorAll('.therapists-card.show-about').forEach(card => {
		if (!card.contains(e.target)) {
			card.classList.remove('show-about')
		}
	})
})
document.addEventListener('click', function (e) {
	document.querySelectorAll('.therapists-card.show-contact').forEach(card => {
		if (!card.contains(e.target)) {
			card.classList.remove('show-contact')
		}
	})
})
