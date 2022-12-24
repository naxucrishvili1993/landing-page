import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ProfilePhoto from "../images/profile.jpg";
import Article1 from "../images/article-1.jpg";
import Article2 from "../images/article-2.jpg";
import Article3 from "../images/article-3.jpg";

const Testimonials = () => {
	return (
		<div className="testimonial-article">
			<div id="testimonials">
				<h2>What our customers are saying</h2>
				<span className="line"></span>
				<Carousel
					showArrows={false}
					showThumbs={false}
					showStatus={false}
					swipeable={true}>
					<div className="testimonial">
						<div className="testimonial-left-section">
							<div>
								<img src={ProfilePhoto} alt="Profile" />
							</div>
							<div>
								<h4>Edward Newgate</h4>
								<p>Founder Circle</p>
							</div>
						</div>
						<div className="testimonial-right-section">
							<p>
								“Our dedicated patient engagement app and web portal allow you
								to access information instantaneously (no tedeous form, long
								calls, or administrative hassle) and securely”
							</p>
						</div>
					</div>
					<div className="testimonial">
						<div className="testimonial-left-section">
							<div>
								<img src={ProfilePhoto} alt="Profile" />
							</div>
							<div>
								<h4>Edward Newgate</h4>
								<p>Founder Circle</p>
							</div>
						</div>
						<div className="testimonial-right-section">
							<p>
								“Our dedicated patient engagement app and web portal allow you
								to access information instantaneously (no tedeous form, long
								calls, or administrative hassle) and securely”
							</p>
						</div>
					</div>
					<div className="testimonial">
						<div className="testimonial-left-section">
							<div>
								<img src={ProfilePhoto} alt="Profile" />
							</div>
							<div>
								<h4>Edward Newgate</h4>
								<p>Founder Circle</p>
							</div>
						</div>
						<div className="testimonial-right-section">
							<p>
								“Our dedicated patient engagement app and web portal allow you
								to access information instantaneously (no tedeous form, long
								calls, or administrative hassle) and securely”
							</p>
						</div>
					</div>
				</Carousel>
			</div>
			<div className="articles-wrapper">
				<div className="articles">
					<div className="article">
						<img src={Article1} alt="Article" />
						<h4>Disease detection, check up in the laboratory</h4>
						<p>
							In this case, the role of the health laboratory is very important
							to do a disease detection...
						</p>
						<a href="#!">Read more...</a>
					</div>
					<div className="article">
						<img src={Article2} alt="Article" />
						<h4>Herbal medicines that are safe for consumption</h4>
						<p>
							Herbal medicine is very widely used at this time because of its
							very good for your health...
						</p>
						<a href="#!">Read more...</a>
					</div>
					<div className="article">
						<img src={Article3} alt="Article" />
						<h4>Natural care for healthy facial skin</h4>
						<p>
							A healthy lifestyle should start from now and also for your skin
							health. There are some...
						</p>
						<a href="#!">Read more...</a>
					</div>
				</div>
				<button className="view-all-btn">View All</button>
			</div>
		</div>
	);
};

export default Testimonials;
