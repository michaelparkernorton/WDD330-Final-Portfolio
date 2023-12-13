



const mainImage = document.querySelector('.image-final-project')
const h2 = document.querySelector('.h2-final-project')
mainImage.addEventListener("mouseover", changeBackground);
mainImage.addEventListener("mouseout", returnBackground)

function changeBackground() {
	console.log("hi")
	h2.style.backgroundColor = "#333";
}

function returnBackground() {
	h2.style.backgroundColor = "black";
}