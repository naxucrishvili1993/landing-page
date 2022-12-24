import React from "react";

const About = () => {
	return (
		<section id="about">
			<div className="description">
				<h5>
					<span className="logo">T</span>{" "}
					<span className="text">Trafalgar</span>
				</h5>
				<p>
					Trafalgar provides progressive, and affordable healthcare, accessible
					on mobile and online for everyone
				</p>
				<p>&copy;Trafalgar PTY LTD 2020. All rights reserved</p>
			</div>
			<div class="lists">
				<div className="company">
					<p className="list-title">Company</p>
					<ul className="company-list">
						<li className="company-list-item">
							<a href="#!">About</a>
						</li>
						<li className="company-list-item">
							<a href="#!">Testimonials</a>
						</li>
						<li className="company-list-item">
							<a href="#!">Find a doctor</a>
						</li>
						<li className="company-list-item">
							<a href="#!">Apps</a>
						</li>
					</ul>
				</div>
				<div className="region">
					<p className="list-title">Region</p>
					<ul className="region-list">
						<li className="region-list-item">
							<a href="#!">Indonesia</a>
						</li>
						<li className="region-list-item">
							<a href="#!">Singapore</a>
						</li>
						<li className="region-list-item">
							<a href="#!">Hongkong</a>
						</li>
						<li className="region-list-item">
							<a href="#!">Canada</a>
						</li>
					</ul>
				</div>
				<div className="help">
					<p className="list-title">Help</p>
					<ul className="help-list">
						<li className="help-list-item">
							<a href="#!">Help center</a>
						</li>
						<li className="help-list-item">
							<a href="#!">Contact support</a>
						</li>
						<li className="help-list-item">
							<a href="#!">Instructions</a>
						</li>
						<li className="help-list-item">
							<a href="#!">How it works</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default About;
