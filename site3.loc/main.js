function to() {
	var x = document.documentElement.clientHeight
	console.log(x)
	window.scrollTo({
		top: x,
		behavior: 'smooth',
	})
}
