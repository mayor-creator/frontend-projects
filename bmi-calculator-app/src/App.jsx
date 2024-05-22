import { Hero } from "./components/Hero";
import { HealthTips } from "./components/HealthTips";
import { BMIFactor } from "./components/BMIFactor";

import "./sass/styles.scss";

function App() {
	return (
		<>
			<Hero />
			<main>
				<HealthTips />
				<BMIFactor />
			</main>
		</>
	);
}

export default App;
