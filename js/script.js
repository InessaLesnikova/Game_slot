let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '6.jpg']

let results = document.querySelectorAll('.result')
let userName = prompt('Please, enter your name:')

if (userName === null || userName === '') {
	userName = 'User'
}

let startGameButton = document.querySelector('#spinner')
let countOfSpins = 0

startGameButton.addEventListener('click', () => {
	countOfSpins++

	results.forEach(result => {
		let randomImage = images[Math.floor(Math.random() * images.length)]
		result.style.backgroundImage = `url(${randomImage})`
	})

	let i = 0
	let backgroundImage1
	let backgroundImage2
	let backgroundImage3

	results.forEach(result => {
		if(i == 1){
			backgroundImage1 = result.style.backgroundImage
		}
		else if(i==4){
			backgroundImage2 = result.style.backgroundImage
		}
		else if(i==7){
			backgroundImage3 = result.style.backgroundImage
		}
		i++

	})


	document.getElementById('score').innerHTML = countOfSpins

	if (
		backgroundImage1 === backgroundImage2 &&
		backgroundImage1 === backgroundImage3
	) {
		alert('You won!')
		countOfSpins = 0
		document.getElementById('score').innerHTML = countOfSpins
	} else if (countOfSpins >= 3) {
		alert('You lost!')
		countOfSpins = 0
		document.getElementById('score').innerHTML = countOfSpins
	}
})
