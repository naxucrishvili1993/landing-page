import React from "react";
import Providers from "../illustrations/trafalgar-2.svg";
import AppsIllustration from "../illustrations/trafalgar-3.svg";

const Apps = () => {
	return (
		<section id="apps">
			<div className="providers">
				<div className="providers-left-section">
					<img src={Providers} alt="Illustration" />
				</div>
				<div className="providers-right-section">
					<h2 className="providers-right-section-heading">
						Leading healthcare providers
					</h2>
					<span className="line"></span>
					<p className="providers-right-section-paragraph">
						Trafalgar provides progressive, and affordable healthcare,
						accessible on mobile and online for everyone. To us, it’s not just
						work. We take pride in the solutions we deliver
					</p>
					<button className="providers-right-section-btn">Learn more</button>
				</div>
			</div>
			<div className="apps">
				<div className="apps-left-section">
					<h2 className="apps-left-section-heading">
						Download our mobile apps
					</h2>
					<span className="line"></span>
					<p className="apps-left-section-paragraph">
						Our dedicated patient engagement app and web portal allow you to
						access information instantaneously (no tedeous form, long calls, or
						administrative hassle) and securely
					</p>
					<button className="apps-left-section-btn">Download</button>
				</div>
				<div className="apps-right-section">
					<img src={AppsIllustration} alt="Illustration" />
				</div>
			</div>
		</section>
	);
};

export default Apps;
