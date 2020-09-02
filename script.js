let x = 0;

document.getElementById('bmi-form').addEventListener('submit', e => {
	e.preventDefault();

	let height =
		parseInt(document.getElementById('bmi-height-feet').value) * 0.3048 + parseInt(document.getElementById('bmi-height-inches').value) * 0.0254;
	height *= height;

	let bmi = document.getElementById('bmi-weight').value / height;
	let final = bmi.toFixed(2);

	document.getElementById('bmi-output').value = final;
});
