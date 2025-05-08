const navBtn = document.querySelector('.burger-btn')
const navList = document.querySelector('.nav-list')
const nav = document.querySelector('.nav')
const allNavItems = document.querySelectorAll('.nav-item')
const footerYear = document.querySelector('.footer__year')

const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')
const arrow1 = document.querySelector('.arrow1')
const arrow2 = document.querySelector('.arrow2')
const arrow3 = document.querySelector('.arrow3')
const list1 = document.querySelector('.list1')
const list2 = document.querySelector('.list2')
const list3 = document.querySelector('.list3')
const heading1 = document.querySelector('.heading1')
const heading2 = document.querySelector('.heading2')
const heading3 = document.querySelector('.heading3')

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

const handleCard1 = () => {
	card1.classList.toggle('active1')

	checkIfActive1()
}
const handleCard2 = () => {
	card2.classList.toggle('active2')

	checkIfActive2()
}
const handleCard3 = () => {
	card3.classList.toggle('active3')

	checkIfActive3()
}

function checkIfActive1() {
	if (card1.classList.contains('active1')) {
		arrow1.classList.add('fa-chevron-up')
		arrow1.classList.remove('fa-chevron-down')
		list1.style.display = 'inline'
		heading1.style.paddingBottom = '20px'
	} else {
		arrow1.classList.remove('fa-chevron-up')
		arrow1.classList.add('fa-chevron-down')
		list1.style.display = 'none'
		heading1.style.paddingBottom = '0px'
	}
}
function checkIfActive2() {
	if (card2.classList.contains('active2')) {
		arrow2.classList.add('fa-chevron-up')
		arrow2.classList.remove('fa-chevron-down')
		list2.style.display = 'inline'
		heading2.style.paddingBottom = '20px'
	} else {
		arrow2.classList.remove('fa-chevron-up')
		arrow2.classList.add('fa-chevron-down')
		list2.style.display = 'none'
		heading2.style.paddingBottom = '0px'
	}
}
function checkIfActive3() {
	if (card3.classList.contains('active3')) {
		arrow3.classList.add('fa-chevron-up')
		arrow3.classList.remove('fa-chevron-down')
		list3.style.display = 'inline'
		heading3.style.paddingBottom = '20px'
	} else {
		arrow3.classList.remove('fa-chevron-up')
		arrow3.classList.add('fa-chevron-down')
		list3.style.display = 'none'
		heading3.style.paddingBottom = '0px'
	}
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

navBtn.addEventListener('click', handleNav)
card1.addEventListener('click', handleCard1)
card2.addEventListener('click', handleCard2)
card3.addEventListener('click', handleCard3)
