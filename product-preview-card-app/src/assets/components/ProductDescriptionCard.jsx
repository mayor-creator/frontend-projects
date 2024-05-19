import iconCart from "../../images/icon-cart.svg";

export function ProductDescriptionCard() {
	return (
		<>
			<p className="main__product--header">Perfume</p>
			<h1 className="main__product--name">Gabrielle Essence Eau De Parfum</h1>
			<p className="main__product--description">
				A floral, solar and voluptuous interpretation composed by Olivier Polge,
				Perfumer-Creator for the House of CHANEL.
			</p>
			<p className="main__product--price"> $169.99</p>
			<span className="main__product--discount"> $149.99</span>
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
