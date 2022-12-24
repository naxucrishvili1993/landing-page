import React from "react";
import Search from "../illustrations/search.svg";
import Pharmacy from "../illustrations/pharmacy.svg";
import Consultation from "../illustrations/consultation.svg";
import Details from "../illustrations/details.svg";
import Emergency from "../illustrations/emergency.svg";
import Tracking from "../illustrations/tracking.svg";

const Services = () => {
	return (
		<section id="services">
			<div className="services-top-section">
				<h2 className="services-top-section-heading">Our services</h2>
				<span className="services-line"></span>
				<p className="services-top-section-paragraph">
					We provide to you the best choiches for you. Adjust it to your health
					needs and make sure your undergo treatment with our highly qualified
					doctors you can consult with us which type of service is suitable for
					your health
				</p>
			</div>
			<div className="services-middle-section">
				<div className="service">
					<img src={Search} alt="Service" />
					<h3>Search doctor</h3>
					<p>
						Choose your doctor from thousands of specialist, general, and
						trusted hospitals
					</p>
				</div>
				<div className="service">
					<img src={Pharmacy} alt="Service" />
					<h3>Online pharmacy</h3>
					<p>
						Buy your medicines with our mobile application with a simple
						delivery system
					</p>
				</div>
				<div className="service">
					<img src={Consultation} alt="Service" />
					<h3>Consultation</h3>
					<p>
						Free consultation with our trusted doctors and get the best
						recomendations
					</p>
				</div>
				<div className="service">
					<img src={Details} alt="Service" />
					<h3>Details info</h3>
					<p>
						Free consultation with our trusted doctors and get the best
						recomendations
					</p>
				</div>
				<div className="service">
					<img src={Emergency} alt="Service" />
					<h3>Emergency care</h3>
					<p>
						You can get 24/7 urgent care for yourself or your children and your
						lovely family
					</p>
				</div>
				<div className="service">
					<img src={Tracking} alt="Service" />
					<h3>Tracking</h3>
					<p>Track and save your medical history and health data</p>
				</div>
			</div>
			<div className="services-bottom-section">
				<button className="services-bottom-section-btn">Learn more</button>
			</div>
		</section>
	);
};

export default Services;
