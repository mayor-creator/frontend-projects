import { useState } from "react";

export function MetricForm() {
	const [height, setHeight] = useState(185);
	const [weight, setWeight] = useState(80);

	function handleHeightChange(event) {
		setHeight(event.target.value);
	}

	function handleWeightChange(event) {
		setWeight(event.target.value);
	}

	function bMICalculation(weightValue, heightValue) {
		const metric = 10000;
		let result = (weightValue / heightValue / heightValue) * metric;
		return result;
	}

	let metricResult = bMICalculation(weight, height).toFixed(1);
	let message = "";

	if (metricResult < 18.5) {
		message = "underweight";
	} else if (metricResult <= 24.9) {
		message = "healthy weight";
	} else if (metricResult <= 29.9) {
		message = "overweight";
	} else {
		message = "obese";
	}

	return (
		<>
			<form>
				<label htmlFor="height">Height</label>
				<div>
					<input
						type="number"
						name="height"
						id="height"
						required
						value={height}
						onChange={handleHeightChange}
					/>
					<span>cm</span>
				</div>

				<label htmlFor="weight">Weight</label>
				<div>
					<input
						type="number"
						name="weight"
						id="weight"
						value={weight}
						onChange={handleWeightChange}
						required
					/>
					<span>kg</span>
				</div>
			</form>
			<div>
				<div>
					<p> Your BMI is...</p>
					<p>{metricResult}</p>
					<p>
						Your BMI suggests you&apos;re {message}. Your ideal weight is
						between
					</p>
				</div>
			</div>
		</>
	);
}
