import icon from "./assets/images/icon-dice.svg";
import mobile from "./assets/images/pattern-divider-mobile.svg";
import desktop from "./assets/images/pattern-divider-desktop.svg";

import { useState, useEffect } from "react";

export function Advice() {
	const [data, setData] = useState({});
	const [counter, setCounter] = useState(0);
	const url = "https://api.adviceslip.com/advice";

	useEffect(() => {
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`${response.status}`);
				}
				return response.json();
			})
			.then((fetchData) => {
				setData((previousData) => {
					if (previousData != fetchData) {
						return fetchData;
					}
					return previousData;
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}, [counter]);

	const handleClick = () => {
		setCounter((previous) => previous + 1);
	};

	let objectItems = data;
	const message = Object.values(objectItems).map((item) => {
		return (
			<li key={item.id}>
				<h1 className="font-extrabold text-neon-green text-center sm:py-5">
					Advice #{item.id}
				</h1>
				<p className="font-extrabold text-[28px] text-center">{item.advice}</p>
			</li>
		);
	});

	return (
		<>
			<main className="bg-dark-grayish-blue rounded-2xl sm:p-5 sm:max-[343px]:">
				<section>
					<ul>{message}</ul>
				</section>

				<section className="sm:p-5">
					<picture>
						<source
							srcSet={mobile}
							media="(max-width:480px)"
						/>
						<source
							srcSet={desktop}
							media="(min-width:1440px)"
						/>
						<img
							src={desktop}
							className="sm:pb-5"
						/>
					</picture>

					<button
						className="bg-neon-green rounded-full absolute sm:mx-[120px]"
						onClick={handleClick}>
						<img
							className="mx-auto"
							src={icon}
							aria-label="hidden"></img>
					</button>
				</section>
			</main>
		</>
	);
}
