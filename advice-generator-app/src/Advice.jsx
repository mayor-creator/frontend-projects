import icon from "./assets/images/icon-dice.svg";
import mobile from "./assets/images/pattern-divider-mobile.svg";
import desktop from "./assets/images/pattern-divider-desktop.svg";

export function Advice() {
	return (
		<>
			<main className="container">
				<section>
					<h1 className="advice_n0">Advice #</h1>
					<p className="message">
						&quot;It is easy to sit up and take notice, What&apos;s difficult is
						getting up and taking action.&quot;
					</p>
				</section>
				<picture>
					<source
						srcSet={mobile}
						media="(max-width:480px)"
					/>
					<source
						srcSet={desktop}
						media="(min-width:1440px)"
					/>
					<img
						src={desktop}
						className="pattern"
					/>
				</picture>

				<button>
					<img
						src={icon}
						aria-label="hidden"></img>
				</button>
			</main>
		</>
	);
}
