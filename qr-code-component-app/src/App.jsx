import qrcodeImage from "./assets/images/image-qr-code.png";
import "./index.css";
import "./App.css";

function App() {
	return (
		<>
			<main className="rounded-3xl bg-white max-w-80 max-h-fit p-5">
				<div className="pb-5">
					<img
						className="rounded-lg"
						src={qrcodeImage}
						alt="qr code"
						height={288}
						width={288}
					/>
				</div>
				<div className="message">
					<h1 className="text-center text-dark-navy font-bold text-lg px-5">
						Improve your front-end skills by building projects
					</h1>
					<p className="text-center text-grayish-blue font-normal text-sm p-5">
						Scan the QR code to visit Frontend Mentor and take your coding
						skills to the next level
					</p>
				</div>
			</main>
		</>
	);
}

export default App;
