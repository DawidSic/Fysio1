const navBtn = document.querySelector('.burger-btn')
const navList = document.querySelector('.nav-list')
const nav = document.querySelector('.nav')
const allNavItems = document.querySelectorAll('.nav-item')
const footerYear = document.querySelector('.footer__year')
const serviceOne = document.querySelector('.service-one')
const serviceText = document.querySelector('.service-text-one')

const handleNav = () => {
	nav.classList.toggle('nav-active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav-active')
		})
	})
}

const handleCard = () => {
	serviceText.classList.toggle('show-text')
	serviceOne.forEach(item => {
		item.addEventListener('click', () => {
			serviceText.classList.remove('show-text')
		})
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

navBtn.addEventListener('click', handleNav)
serviceOne.addEventListener('click', handleCard)
