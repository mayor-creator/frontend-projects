import qrcodeImage from "./assets/images/image-qr-code.png";
import "./index.css";
import "./App.css";

function App() {
	return (
		<>
			<main className="rounded-3xl bg-white">
				<div className="image rounded-lg">
					<img
						src={qrcodeImage}
						alt="qr code"
						height={288}
						width={288}
					/>
				</div>
				<div className="message">
					<h1 className="text-center font-bold text-2xl">
						Improve your front-end skills by building projects
					</h1>
					<p className="text-center">
						Scan the QR code to visit Frontend Mentor and take your coding
						skills to the next level
					</p>
				</div>
			</main>
		</>
	);
}

export default App;
