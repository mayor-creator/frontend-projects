import { useState } from "react";

export function ImperialForm() {
	const [feet, setFeet] = useState(5);
	const [inches, setInches] = useState(11);

	const [stones, setStones] = useState(11);
	const [pounds, setPounds] = useState(4);

	function handleFeetChange(event) {
		setFeet(event.target.value);
	}

	function handleInchesChange(event) {
		setInches(event.target.value);
	}

	function handleStonesChange(event) {
		setStones(event.target.value);
	}

	function handlePoundsChange(event) {
		setPounds(event.target.value);
	}

	function bMICalculation(feet, inches, stones, pounds) {
		const imperial = 703;
		const inchesValue = 12;
		const poundsValue = 14;
		//converting feet to inches;
		let height = feet * inchesValue + inches;
		//converting stones to pounds
		let weight = stones * poundsValue + pounds;
		//calculating bmi result
		let result = (weight / (height * height)) * imperial;
		return result;
	}

	let imperialResult = bMICalculation(feet, inches, stones, pounds).toFixed(1);

	let message = "";
	if (imperialResult < 18.5) {
		message = "underweight";
	} else if (imperialResult <= 24.9) {
		message = "healthy weight";
	} else if (imperialResult <= 29.9) {
		message = "overweight";
	} else {
		message = "obese";
	}

	return (
		<>
			<form className="header__hero-form">
				<label
					htmlFor="height"
					className="header__imperial-label">
					Height
				</label>
				<div className="header__imperial-container">
					<input
						className="header__imperial-feet"
						type="number"
						name="feet"
						id="feet"
						required
						value={feet}
						onChange={handleFeetChange}
					/>
					<span className="header__imperial-span">ft</span>
					<input
						className="header__imperial-inches"
						type="number"
						name="inches"
						id="inches"
						required
						value={inches}
						onChange={handleInchesChange}
					/>
					<span className="header__imperial-span">in</span>
				</div>

				<label
					htmlFor="weight"
					className="header__imperial-label">
					Weight
				</label>
				<div className="header__imperial-container">
					<input
						className="header__imperial-stones"
						type="number"
						name="stones"
						id="stones"
						value={stones}
						onChange={handleStonesChange}
						required
					/>
					<span className="header__imperial-span">st</span>
					<input
						className="header__imperial-pounds"
						type="number"
						name="pounds"
						id="pounds"
						value={pounds}
						onChange={handlePoundsChange}
						required
					/>
					<span className="header__imperial-pounds-span">lbs</span>
				</div>
			</form>
			<div className="header__form-result">
				<div className="header__form-result-item">
					<p className="header__form-result-message"> Your BMI is...</p>
					<p className="header__form-result-explanation">{imperialResult}</p>
				</div>
				<p className="header__form-result-detail">
					Your BMI suggests you&apos;re a {message}. Your ideal weight is
					between
				</p>
			</div>
		</>
	);
}
