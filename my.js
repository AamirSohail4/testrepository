// Get a reference to the element
const toggleDiv = document.getElementById('element');

// Add a mouseover event listener to the toggleDiv
toggleDiv.addEventListener('mouseover', function () {
	// Hide the div when hovered
	toggleDiv.style.display = 'none';
});

// Add a mouseout event listener to the toggleDiv
toggleDiv.addEventListener('mouseout', function () {
	// Show the div when the mouse leaves
	toggleDiv.style.display = 'block';
});

function toggleDiv() {
	var div = document.getElementById('element');
	console.log(div);
	if (div.style.display === 'none') {
		div.style.display = 'block';
	} else {
		div.style.display = 'none';
	}
}
