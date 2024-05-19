import { ImageCard } from "./ImageCard";
import { ProductDescriptionCard } from "./ProductDescriptionCard";

export function ProductCard() {
	return (
		<>
			<div className="wrapper">
				<main className="main">
					<div className="main__image--container">
						<ImageCard />
					</div>
					<div className="main__product--container">
						<ProductDescriptionCard />
					</div>
				</main>
			</div>
		</>
	);
}
