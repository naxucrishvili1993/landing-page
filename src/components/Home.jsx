import React from "react";
import Illustration from "../illustrations/trafalgar-1.svg";

const Home = () => {
	return (
		<section id="home">
			<div className="home-left-section">
				<h1 className="home-left-section-heading">
					Virtual hearthcare for you
				</h1>
				<p className="home-left-section-paragraph">
					Trafalgar provides progressive, and affordable healthcare, accessible
					on mobile and online for everyone
				</p>
				<button className="home-left-section-btn">Consult today</button>
			</div>
			<div className="home-right-section">
				<img src={Illustration} alt="Home Illustration" />
			</div>
		</section>
	);
};

export default Home;
