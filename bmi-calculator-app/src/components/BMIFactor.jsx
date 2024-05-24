import genderIcon from "../assets/images/icon-gender.svg";
import ageIcon from "../assets/images/icon-age.svg";
import muscleIcon from "../assets/images/icon-muscle.svg";
import pregnancyIcon from "../assets/images/icon-pregnancy.svg";
import raceIcon from "../assets/images/icon-race.svg";

export function BMIFactor() {
	return (
		<>
			<section className="main__bmi-facts wrapper-bmi-facts">
				<div className="main__bmi-facts-limitations">
					<h2 className="main__bmi-facts-limitations-header">
						Limitations of BMI
					</h2>
					<p className="main__bmi-facts-limitations-info">
						Although BMI is often a practical indicator of healthy weight, it is
						not suited for every person. Specific groups should carefully
						consider their BMI outcomes, and in certain cases, the measurement
						may not be beneficial to use.
					</p>
				</div>
				<div className="main__bmi-facts-gender">
					<div className="main__item">
						<img
							className="main__bmi-facts-gender-image"
							src={genderIcon}
							alt="gender icon"
							width="32"
							height="32"
						/>
						<h4 className="main__bmi-facts-gender-header">Gender</h4>
					</div>
					<p className="main__bmi-facts-gender-info">
						The development and body fat composition of girls and boys vary with
						age. Consequently, a child&apos;s age and gender are considered when
						evaluating their BMI.
					</p>
				</div>
				<div className="main__bmi-facts-age">
					<div className="main__item">
						<img
							className="main__bmi-facts-age-image"
							src={ageIcon}
							alt="age icon"
							width="32"
							height="32"
						/>
						<h4 className="main__bmi-facts-age-header">Age</h4>
					</div>
					<p className="main__bmi-facts-age-info">
						In aging individuals, increased body fat and muscle loss may cause
						BMI to underestimate body fat content.
					</p>
				</div>
				<div className="main__bmi-facts-muscle">
					<div className="main__item">
						<img
							className="main__bmi-facts-muscle-image"
							src={muscleIcon}
							alt="muscle icon"
							width="32"
							height="32"
						/>
						<h4 className="main__bmi-facts-muscle-header">Muscle</h4>
					</div>
					<p className="main__bmi-facts-muscle-info">
						BMI may misclassify muscular individuals as overweight or obese, as
						it doesn&apos;t differentiate muscle from fat.
					</p>
				</div>
				<div className="main__bmi-facts-pregnancy">
					<div className="main__item">
						<img
							className="main__bmi-facts-pregnancy-image"
							src={pregnancyIcon}
							alt="pregnancy icon"
							width="32"
							height="32"
						/>
						<h4 className="main__bmi-facts-pregnancy-header">Pregnancy</h4>
					</div>
					<p className="main__bmi-facts-pregnancy-info">
						Expectant mothers experience weight gain due to their growing baby.
						Maintaining a healthy pre-pregnancy BMI is advisable to minimise
						health risks for both mother and child.
					</p>
				</div>
				<div className="main__bmi-facts-race">
					<div className="main__item">
						<img
							className="main__bmi-facts-race-image"
							src={raceIcon}
							alt="race icon"
							width="32"
							height="32"
						/>
						<h4 className="main__bmi-facts-race-header">Race</h4>
					</div>
					<p className="main__bmi-facts-race-info">
						Certain health concerns may affect individuals of some Black and
						Asian origins at lower BMIs than others. To learn more, it is
						advised to discuss this with your GP or practice nurse.
					</p>
				</div>
			</section>
		</>
	);
}
