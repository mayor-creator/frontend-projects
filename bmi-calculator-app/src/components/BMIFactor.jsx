import genderIcon from "../assets/images/icon-gender.svg";
import ageIcon from "../assets/images/icon-age.svg";
import muscleIcon from "../assets/images/icon-muscle.svg";
import pregnancyIcon from "../assets/images/icon-pregnancy.svg";
import raceIcon from "../assets/images/icon-race.svg";

export function BMIFactor() {
	return (
		<>
			<section>
				<div>
					<h2>Limitations of BMI</h2>
					<p>
						Although BMI is often a practical indicator of healthy weight, it is
						not suited for every person. Specific groups should carefully
						consider their BMI outcomes, and in certain cases, the measurement
						may not be beneficial to use.
					</p>
				</div>
				<div>
					<div>
						<img
							src={genderIcon}
							alt="gender icon"
							width="32"
							height="32"
						/>
						<h4>Gender</h4>
					</div>
					<p>
						The development and body fat composition of girls and boys vary with
						age. Consequently, a child&apos;s age and gender are considered when
						evaluating their BMI.
					</p>
				</div>
				<div>
					<div>
						<img
							src={ageIcon}
							alt="age icon"
							width="32"
							height="32"
						/>
						<h4>Age</h4>
					</div>
					<p>
						In aging individuals, increased body fat and muscle loss may cause
						BMI to underestimate body fat content.
					</p>
				</div>
				<div>
					<div>
						<img
							src={muscleIcon}
							alt="muscle icon"
							width="32"
							height="32"
						/>
						<h4>Muscle</h4>
					</div>
					<p>
						BMI may misclassify muscular individuals as overweight or obese, as
						it doesn&apos;t differentiate muscle from fat.
					</p>
				</div>
				<div>
					<div>
						<img
							src={pregnancyIcon}
							alt="pregnancy icon"
							width="32"
							height="32"
						/>
						<h4>Pregnancy</h4>
					</div>
					<p>
						Expectant mothers experience weight gain due to their growing baby.
						Maintaining a healthy pre-pregnancy BMI is advisable to minimise
						health risks for both mother and child.
					</p>
				</div>
				<div>
					<div>
						<img
							src={raceIcon}
							alt="race icon"
							width="32"
							height="32"
						/>
						<h4>Race</h4>
					</div>
					<p>
						Certain health concerns may affect individuals of some Black and
						Asian origins at lower BMIs than others. To learn more, it is
						advised to discuss this with your GP or practice nurse.
					</p>
				</div>
			</section>
		</>
	);
}
