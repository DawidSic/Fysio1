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
