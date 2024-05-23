import { HealthTips } from "./HealthTips";
import { BMIFactor } from "./BMIFactor";

export function Results({ children }) {
	return (
		<>
			<main className="main">
				<section className="results">{children}</section>
				<HealthTips />
				<BMIFactor />
			</main>
		</>
	);
}

Results.propTypes;
