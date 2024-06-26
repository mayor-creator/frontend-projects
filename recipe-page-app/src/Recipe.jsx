import omeletteImage from "./assets/images/image-omelette.jpeg";

import "../scss/global/_boilerplate.scss";
import "../scss/global/_colors.scss";
import "../scss/global/_fonts.scss";
import "../scss/global/_layout.scss";
import "../scss/global/_typography.scss";
import "../scss/component/_body.scss";
import "../scss/component/_main.scss";

export function Recipe() {
	return (
		<>
			<div className="wrapper">
				<main className="card">
					<article className="image-card">
						<img
							className="omelette"
							src={omeletteImage}
							alt="bowl of omelette"
							height={300}
						/>
					</article>
					<article className="text-content">
						<section className="title">
							<h1 className="title-header">Simple Omelette Recipe</h1>
							<p className="title-description">
								An easy and quick dish, perfect for any meal. This classic
								omelette combines beaten eggs cooked to perfection, optionally
								filled with your choice of cheese, vegetables, or meats.
							</p>
						</section>
						<section className="preparation">
							<h3 className="preparation-header">Preparation time</h3>
							<ul className="preparation-list">
								<li className="preparation-item">
									<span>Total</span>: Approximately 10 minutes
								</li>
								<li className="preparation-item">
									<span>Preparation</span>: 5 minutes
								</li>
								<li className="preparation-item">
									<span>Cooking</span>: 5 minutes
								</li>
							</ul>
						</section>
						<section className="ingredients">
							<h2 className="ingredients-header">Ingredients</h2>
							<ul className="ingredients-list">
								<li className="ingredients-items">2-3 large eggs</li>
								<li className="ingredients-items">Salt, to taste 1</li>
								<li className="ingredients-items">Pepper, to taste</li>
								<li className="ingredients-items">
									tablespoon of butter or oil
								</li>
								<li className="ingredients-items">
									Optional fillings: cheese, diced vegetables, cooked meats,
									herbs
								</li>
							</ul>
						</section>
						<hr />
						<section className="instructions">
							<h2 className="instructions-header">Instructions</h2>
							<ol
								type="1"
								className="instructions-list">
								<li className="instructions-items">
									<span>Beat the eggs</span>: In a bowl, beat the eggs with a
									pinch of salt and pepper until they are well mixed. You can
									add a tablespoon of water or milk for a fluffier texture.
								</li>
								<li className="instructions-items">
									<span>Heat the pan</span>: Place a non-stick frying pan over
									medium heat and add butter or oil.
								</li>
								<li className="instructions-items">
									<span>Cook the omelette</span>: Once the butter is melted and
									bubbling, pour in the eggs. Tilt the pan to ensure the eggs
									evenly coat the surface.
								</li>
								<li className="instructions-items">
									<span>Add fillings (optional)</span>: When the eggs begin to
									set at the edges but are still slightly runny in the middle,
									sprinkle your chosen fillings over one half of the omelette.
								</li>
								<li className="instructions-items">
									<span>Fold and serve</span>: As the omelette continues to
									cook, carefully lift one edge and fold it over the fillings.
									Let it cook for another minute, then slide it onto a plate.
								</li>
								<li className="instructions-items">
									<span>Enjoy</span>: Serve hot, with additional salt and pepper
									if needed.
								</li>
							</ol>
						</section>
						<hr />
						<section className="nutrition">
							<h2 className="nutrition-header">Nutrition</h2>
							<p className="nutrition-description">
								The table below shows nutritional values per serving without the
								additional fillings.
							</p>
							<table className="nutrition-table">
								<tbody className="nutrition-table-body">
									<tr>
										<td className="nutrition-name">Calories</td>
										<td className="nutrition-amount">277kcal</td>
									</tr>

									<tr>
										<td className="nutrition-name">Carbs</td>
										<td className="nutrition-amount">0g</td>
									</tr>

									<tr>
										<td className="nutrition-name">Protein</td>
										<td className="nutrition-amount">20g</td>
									</tr>

									<tr>
										<td className="nutrition-name">Fat</td>
										<td className="nutrition-amount">22g</td>
									</tr>
								</tbody>
							</table>
						</section>
					</article>
				</main>
			</div>
		</>
	);
}
