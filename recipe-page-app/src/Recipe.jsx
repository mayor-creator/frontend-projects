import omeletteImage from "./assets/images/image-omelette.jpeg";

export function Recipe() {
	return (
		<>
			<main className="card">
				<article className="image-card">
					<img
						className="omelette"
						src={omeletteImage}
						alt="bowl of omelette"
						height={300}
					/>
				</article>
				<article>
					<section className="title">
						<h1 className="title-header">Simple Omelette Recipe</h1>
						<p className="title-description">
							An easy and quick dish, perfect for any meal. This classic
							omelette combines beaten eggs cooked to perfection, optionally
							filled with your choice of cheese, vegetables, or meats.
						</p>
					</section>
					<section className="preparation">
						<h2 className="preparation-header">Preparation time</h2>
						<ul className="preparation-list">
							<li>Total: Approximately 10 minutes</li>
							<li> Preparation: 5 minutes</li>
							<li> Cooking: 5 minutes</li>
						</ul>
					</section>
					<section className="ingredients">
						<h2 className="ingredients-header">Ingredients</h2>
						<ul className="ingredients-list">
							<li>2-3 large eggs</li>
							<li>Salt, to taste 1</li>
							<li>Pepper, to taste</li>
							<li>tablespoon of butter or oil</li>
							<li>
								Optional fillings: cheese, diced vegetables, cooked meats, herbs
							</li>
						</ul>
					</section>
					<hr />
					<section className="instructions">
						<h2 className="instructions-header">Instructions</h2>
						<ol
							type="1"
							className="instructions-list">
							<li>
								Beat the eggs: In a bowl, beat the eggs with a pinch of salt and
								pepper until they are well mixed. You can add a tablespoon of
								water or milk for a fluffier texture.
							</li>
							<li>
								Heat the pan: Place a non-stick frying pan over medium heat and
								add butter or oil.
							</li>
							<li>
								Cook the omelette: Once the butter is melted and bubbling, pour
								in the eggs. Tilt the pan to ensure the eggs evenly coat the
								surface.
							</li>
							<li>
								Add fillings (optional): When the eggs begin to set at the edges
								but are still slightly runny in the middle, sprinkle your chosen
								fillings over one half of the omelette.
							</li>
							<li>
								Fold and serve: As the omelette continues to cook, carefully
								lift one edge and fold it over the fillings. Let it cook for
								another minute, then slide it onto a plate.
							</li>
							<li>
								Enjoy: Serve hot, with additional salt and pepper if needed.
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
						<table>
							<tr>
								<td>Calories</td>
								<td>277kcal</td>
							</tr>
							<hr />
							<tr>
								<td>Carbs</td>
								<td>0g</td>
							</tr>
							<hr />
							<tr>
								<td>Protein</td>
								<td>20g</td>
							</tr>
							<hr />
							<tr>
								<td>Fat</td>
								<td>22g</td>
							</tr>
						</table>
					</section>
				</article>
			</main>
		</>
	);
}