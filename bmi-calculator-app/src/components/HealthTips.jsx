import eatingIcon from "../assets/images/icon-eating.svg";
import exerciseIcon from "../assets/images/icon-exercise.svg";
import sleep from "../assets/images/icon-sleep.svg";
export function HealthTips() {
	return (
		<>
			<section className="main__health-tips">
				<div className="main__health-tips-container wrapper-health-tips">
					<div className="main__health-tips-eating">
						<img
							className="main__health-tips-eating-image"
							src={eatingIcon}
							alt="food icon"
						/>
						<h3 className="main__health-tips-eating-header">Healthy eating</h3>
						<p className="main__health-tips-eating-info">
							Healthy eating promotes weight control, disease prevention, better
							digestion, immunity, mental clarity, and mood.
						</p>
					</div>
					<div className="main__health-tips-exercise">
						<img
							className="main__health-tips-exercise-image"
							src={exerciseIcon}
							alt="weight icon"
						/>
						<h3 className="main__health-tips-exercise-header">
							Regular exercise
						</h3>
						<p className="main__health-tips-exercise-info">
							Exercise improves fitness, aids weight control, elevates mood, and
							reduces disease risk, fostering wellness and longevity.
						</p>
					</div>
					<div className="main__health-tips-sleep">
						<img
							className="main__health-tips-sleep-image"
							src={sleep}
							alt="sleep icon"
						/>
						<h3 className="main__health-tips-sleep-header">Adequate sleep</h3>
						<p className="main__health-tips-sleep-info">
							Sleep enhances mental clarity, emotional stability, and physical
							wellness, promoting overall restoration and rejuvenation.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
