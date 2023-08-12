
function cycleFrames (_nyanCat, _currentFrame) {
	_nyanCat.classList = []
	_nyanCat.classList.add(`frame${_currentFrame}`)
}

function replicateSparks (_sparksRow) {
	const numberOfRowsToCoverEntireScreen = Math.ceil(document.body.offsetHeight / _sparksRow.offsetHeight)
	const newSparksRows = document.createElement('div')

	for (let a = 0; a < numberOfRowsToCoverEntireScreen-1; a++) {
		newSparksRows.append(_sparksRow.cloneNode(true))
	}

	document.body.prepend(newSparksRows)
}

(function () {
	let nyanCat = document.getElementById('nyan-cat')
	let currentFrame = 1

	replicateSparks(document.getElementsByClassName('sparks-combo')[0])

	setInterval(function () {
		currentFrame = (currentFrame % 3) + 1
		cycleFrames(nyanCat, currentFrame)
	}, 70)
})()
d = document.getElementsByTagName("h1")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function movt() {
for (i=0;i<1000;i++)
{	
    d["0"].style.marginLeft=1000-i+"px"
}}


//movt()