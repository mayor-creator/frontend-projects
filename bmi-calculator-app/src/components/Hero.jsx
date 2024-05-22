import { useState } from "react";
import logo from "../assets/images/logo.svg";
import { MetricForm } from "./MetricForm";

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
					<div className="header__mass-container">
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
						<div className="header__mass_item">
							<h3 className="header__mass-detail-header">
								Enter your details below
							</h3>
							<div className="header__mass-radio">
								<p className="header__mass-metric">
									<input
										type="radio"
										name="mass"
										id="metric"
										checked={metric}
										onChange={handleMetricChange}
										className="header__mass-metric-radio"
									/>
									<label
										htmlFor="metric"
										className="header__mass-metric-label">
										Metric
									</label>
								</p>

								<p className="header__mass-imperial">
									<input
										type="radio"
										name="mass"
										id="imperial"
										checked={imperial}
										onChange={handleImperialChange}
										className="header__mass-imperial-radio"
									/>
									<label htmlFor="imperial">Imperial</label>
								</p>
							</div>
							{/* TO DO ADD COMPONENT FOR METRIC AND IMPERIAL BASED ON RADIO BUTTON SELECTION */}
							{metric && <MetricForm />}
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
