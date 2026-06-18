const navBtn = document.querySelector('.burger-btn')
const navList = document.querySelector('.nav-list')
const nav = document.querySelector('.nav')
const allNavItems = document.querySelectorAll('.nav-item')
const footerYear = document.querySelector('.footer__year')
const infoTextSections = document.querySelectorAll('.js-info-text')

if (navList && !navList.id) {
	navList.id = 'primary-navigation'
}
if (navBtn) {
	navBtn.setAttribute('aria-label', 'Opne meny')
	if (navList) {
		navBtn.setAttribute('aria-controls', navList.id)
	}
	navBtn.setAttribute('aria-expanded', 'false')
}

const handleNav = () => {
	if (!nav) return
	nav.classList.toggle('nav-active')
	const isExpanded = nav.classList.contains('nav-active')
	if (navBtn) {
		navBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false')
	}
}

const handleCurrentYear = () => {
	if (!footerYear) return
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

if (navBtn) {
	navBtn.addEventListener('click', handleNav)
}

allNavItems.forEach(item => {
	item.addEventListener('click', () => {
		if (!nav) return
		nav.classList.remove('nav-active')
		if (navBtn) {
			navBtn.setAttribute('aria-expanded', 'false')
		}
	})
})

document.addEventListener('DOMContentLoaded', function () {
	infoTextSections.forEach(section => {
		section.scrollTop = 0
	})

	const serviceBlocks = document.querySelectorAll('.service')

	const scrollServiceIntoView = targetService => {
		if (!targetService) return
		const rect = targetService.getBoundingClientRect()
		const offset = window.pageYOffset + rect.top - 150
		const target = offset < 0 ? 0 : offset
		window.scrollTo({ top: target, behavior: 'smooth' })
	}

	const collapseService = targetService => {
		if (!targetService) return false
		const targetButton = targetService.querySelector('.arrow-toggle')
		if (!targetButton) return false
		const isExpanded = targetButton.getAttribute('aria-expanded') === 'true'
		if (!isExpanded) return false
		const targetContentId = targetButton.getAttribute('aria-controls')
		const targetContent = document.getElementById(targetContentId)
		const targetArrow = targetButton.querySelector('.arrow')
		if (targetContent) targetContent.classList.remove('visible')
		if (targetArrow) targetArrow.classList.remove('rotated')
		targetButton.setAttribute('aria-expanded', 'false')
		return true
	}

	serviceBlocks.forEach(service => {
		const button = service.querySelector('.arrow-toggle')
		const contentId = button.getAttribute('aria-controls')
		const content = document.getElementById(contentId)
		const arrow = button.querySelector('.arrow')

		function toggle() {
			const isExpanded = button.getAttribute('aria-expanded') === 'true'

			if (isExpanded) {
				if (collapseService(service)) {
					requestAnimationFrame(() => scrollServiceIntoView(service))
				}
			} else {
				// Close all others first
				serviceBlocks.forEach(otherService => {
					if (otherService !== service) {
						collapseService(otherService)
					}
				})

				// Open this one
				content && content.classList.add('visible')
				arrow && arrow.classList.add('rotated')
				button.setAttribute('aria-expanded', 'true')
				requestAnimationFrame(() => {
					requestAnimationFrame(() => scrollServiceIntoView(service))
				})
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

	if (aboutBtn) {
		aboutBtn.addEventListener('click', () => {
			card.classList.add('show-about')
			card.classList.remove('show-contact')
		})
	}

	if (contactBtn) {
		contactBtn.addEventListener('click', () => {
			card.classList.add('show-contact')
			card.classList.remove('show-about')
		})
	}

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

infoTextSections.forEach(section => {
	section.addEventListener('scroll', () => {
		const { scrollTop, scrollHeight, clientHeight } = section
		if (scrollTop + clientHeight >= scrollHeight - 5) {
			section.classList.add('at-bottom')
		} else {
			section.classList.remove('at-bottom')
		}
	})
})
