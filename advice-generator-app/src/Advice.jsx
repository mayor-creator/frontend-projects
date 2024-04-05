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
			<>
				<h1>Advice #{item.id}</h1>
				<p>{item.advice}</p>
			</>
		);
	});

	return (
		<>
			<main className="container">
				<section>{message}</section>
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
						className="pattern"
					/>
				</picture>

				<button onClick={handleClick}>
					<img
						src={icon}
						aria-label="hidden"></img>
				</button>
			</main>
		</>
	);
}
