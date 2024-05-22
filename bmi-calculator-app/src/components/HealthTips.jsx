import eatingIcon from "../assets/images/icon-eating.svg";
import exerciseIcon from "../assets/images/icon-exercise.svg";
import sleep from "../assets/images/icon-sleep.svg";
export function HealthTips() {
	return (
		<>
			<section>
				<div>
					<div>
						<div>
							<img
								src={eatingIcon}
								alt="food icon"
							/>
							<h3>Healthy eating</h3>
							<p>
								Healthy eating promotes weight control, disease prevention,
								better digestion, immunity, mental clarity, and mood.
							</p>
						</div>
						<div>
							<img
								src={exerciseIcon}
								alt="weight icon"
							/>
							<h3>Regular exercise</h3>
							<p>
								Exercise improves fitness, aids weight control, elevates mood,
								and reduces disease risk, fostering wellness and longevity.
							</p>
						</div>
						<div>
							<img
								src={sleep}
								alt="sleep icon"
							/>
							<h3>Adequate sleep</h3>
							<p>
								Sleep enhances mental clarity, emotional stability, and physical
								wellness, promoting overall restoration and rejuvenation.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
