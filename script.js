const icons = document.querySelectorAll('.icon');
const skillNames = document.querySelectorAll('.skill-name');
const skillResults = document.querySelectorAll('.skill-result');

fetch('data.json')
	.then(response => response.json())
	.then(data => {
		for (const key in data) {
			skillNames[key].textContent =  Object.values(data[key])[0];
			skillResults[key].textContent = `${Object.values(data[key])[1]} / 100`;
			icons[key].setAttribute('src', Object.values(data[key])[2]);
		}
	});
