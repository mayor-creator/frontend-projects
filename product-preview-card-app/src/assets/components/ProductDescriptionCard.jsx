import iconCart from "../../images/icon-cart.svg";

export function ProductDescriptionCard() {
	return (
		<>
			<p className="main__product--header item">Perfume</p>
			<h1 className="main__product--name item">
				Gabrielle Essence Eau De Parfum
			</h1>
			<p className="main__product--description item">
				A floral, solar and voluptuous interpretation composed by Olivier Polge,
				Perfumer-Creator for the House of CHANEL.
			</p>
			<div className="main__product--price-container">
				<p className="main__product--price item"> $149.99</p>
				<p className="main__product--discount item"> $169.99</p>
			</div>
			<button className="main__product--button">
				<img
					className="main__product--button-image"
					src={iconCart}
					alt="cart icon"
				/>
				Add to Cart
			</button>
		</>
	);
}
