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
			<form className="header__hero-form">
				<label
					htmlFor="height"
					className="header__metric-label">
					Height
				</label>
				<div className="header__height-container">
					<input
						className="header__metric_height"
						type="number"
						name="height"
						id="height"
						required
						value={height}
						onChange={handleHeightChange}
					/>
					<span className="header__height-span">cm</span>
				</div>

				<label
					htmlFor="weight"
					className="header__metric-label">
					Weight
				</label>
				<div className="header__weight-container">
					<input
						className="header__metric_weight"
						type="number"
						name="weight"
						id="weight"
						value={weight}
						onChange={handleWeightChange}
						required
					/>
					<span className="header__weight-span">kg</span>
				</div>
			</form>
			<div>
				<div className="header__form-result">
					<div className="header__form-result-item">
						<p className="header__form-result-message"> Your BMI is...</p>
						<p className="header__form-result-explanation">{metricResult}</p>
					</div>
					<p className="header__form-result-detail">
						Your BMI suggests you&apos;re a {message}. Your ideal weight is
						between
					</p>
				</div>
			</div>
		</>
	);
}
