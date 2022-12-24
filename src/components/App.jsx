import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Services from "./Services";
import Apps from "./Apps";
import Testimonials from "./Testimonials";
import About from "./About";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const App = () => {
	return (
		<div className="container">
			<Navbar />
			<Home />
			<Services />
			<Apps />
			<Testimonials />
			<About />
		</div>
	);
};

export default App;
