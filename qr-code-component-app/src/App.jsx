import qrcodeImage from "./assets/images/image-qr-code.png";
import "./index.css";

function App() {
	return (
		<>
			<main className="text-3xl">
				<div className="image">
					<img
						src={qrcodeImage}
						alt="qr code"
					/>
				</div>
				<div className="message">
					<h1>Improve your front-end skills by building projects</h1>
					<p>
						Scan the QR code to visit Frontend Mentor and take your coding
						skills to the next level
					</p>
				</div>
			</main>
		</>
	);
}

export default App;
