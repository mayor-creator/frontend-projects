import { HealthTips } from "./HealthTips";
import { BMIFactor } from "./BMIFactor";

export function Results({ children }) {
	return (
		<>
			<main className="main">
				<div className="results">{children}</div>
				<HealthTips />
				<BMIFactor />
			</main>
		</>
	);
}

Results.propTypes;
