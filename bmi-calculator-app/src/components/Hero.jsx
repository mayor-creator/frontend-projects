import { useState } from "react";

import logo from "../assets/images/logo.svg";
import manEating from "../assets/images/image-man-eating.webp";

import { MetricForm } from "./MetricForm";
import { ImperialForm } from "./ImperialForm";
import { Results } from "./Results";

export function Hero() {
	const [metric, setMetric] = useState(true);
	const [imperial, setImperial] = useState(false);

	function handleMetricChange(event) {
		setMetric(event.target.checked);
		setImperial(false);
	}

	function handleImperialChange(event) {
		setImperial(event.target.checked);
		setMetric(false);
	}

	return (
		<>
			<header className="header">
				<div className="header__container">
					<img
						src={logo}
						alt="company logo"
						className="header__logo"
						width="64"
						height="64"
					/>
					<div className="header__mass-container wrapper">
						<div className="header__mass-item">
							<h1 className="header__mass-header">
								Body Mass Index Calculator
							</h1>
							<p className="header__mass-info">
								Better understand your weight in relation to your height using
								our body mass index (BM) calculator. While BMI is not the sole
								determinant of a healthy weight, it offers a valuable starting
								point to evaluate your overall health and well-being.
							</p>
						</div>
						<div className="header__form">
							<h3 className="header__form-header">Enter your details below</h3>
							<div className="header__form-radio-container">
								<div className="header__form-radio-metric">
									<label
										htmlFor="metric"
										className="header__form-radio-label metric-label">
										<input
											type="radio"
											name="mass"
											id="metric"
											checked={metric}
											onChange={handleMetricChange}
										/>
										Metric
									</label>
								</div>
								<div className="header__form-radio-imperial">
									<label
										htmlFor="imperial"
										className="header__form-radio-label">
										<input
											type="radio"
											name="mass"
											id="imperial"
											checked={imperial}
											onChange={handleImperialChange}
										/>
										Imperial
									</label>
								</div>
							</div>
							{/* TO DO ADD COMPONENT FOR METRIC AND IMPERIAL BASED ON RADIO BUTTON SELECTION */}
							{metric && <MetricForm />}
							{imperial && <ImperialForm />}
						</div>
					</div>
				</div>
			</header>
			{(metric || imperial) && (
				<Results>
					<img
						className="main__image"
						src={manEating}
						alt="image of a man eating food"
					/>
					<div className="main__result-container result_wrapper">
						<h2 className="main__result-header">What your BMI result means</h2>
						<p className="main__result-meaning">
							A BMI range of 18.5 to 24.9 is considered a &apos;healthy
							weight.&apos; Maintaining a healthy weight may lower your chances
							of experiencing health issues later on, such as obesity and type 2
							diabetes. Aim for a nutritious diet with reduced fat and sugar
							content, incorporating ample fruits and vegetables. Additionally,
							strive for regular physical activity, ideally about 30 minutes
							daily for five days a week.
						</p>
					</div>
				</Results>
			)}
		</>
	);
}
