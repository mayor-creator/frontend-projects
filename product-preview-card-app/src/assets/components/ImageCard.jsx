import mobileImage from "../../images/image-product-mobile.jpg";
import desktopImage from "../../images/image-product-desktop.jpg";

export function ImageCard() {
	return (
		<>
			<picture>
				<source
					media="(min-width:1200px)"
					srcSet={desktopImage}
					sizes="100vw"
				/>
				<img
					src={mobileImage}
					alt="a bottle of perfume"
					className="main__image"
				/>
			</picture>
		</>
	);
}
