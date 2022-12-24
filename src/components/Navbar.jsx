import React, { useState } from "react";

const Navbar = (props) => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<nav>
			<div className="nav-left-section">
				<span className="logo">T</span> <span class="text">Trafalgar</span>
			</div>
			<div className="nav-right-section">
				<div className="burger-menu-wrapper">
					<div className="burger-menu">
						<div
							className="burger-icon"
							onClick={() => setShowMenu((prev) => !prev)}>
							<span className={showMenu ? "burger active" : "burger"}></span>
						</div>
					</div>
					<div className={showMenu ? "burger-list open" : "burger-list"}>
						<h1 className="burger-list-item">
							<a href="#home" onClick={() => setShowMenu((prev) => !prev)}>
								Home
							</a>
						</h1>
						<h1 className="burger-list-item">
							<a href="#services" onClick={() => setShowMenu((prev) => !prev)}>
								Find a doctor
							</a>
						</h1>
						<h1 className="burger-list-item">
							<a href="#apps" onClick={() => setShowMenu((prev) => !prev)}>
								Apps
							</a>
						</h1>
						<h1 className="burger-list-item">
							<a
								href="#testimonials"
								onClick={() => setShowMenu((prev) => !prev)}>
								Testimonials
							</a>
						</h1>
						<h1 className="burger-list-item">
							<a href="#about" onClick={() => setShowMenu((prev) => !prev)}>
								About us
							</a>
						</h1>
					</div>
				</div>
				<div className="expand-menu">
					<ul className="expand-menu-list">
						<li className="expand-menu-list-item">
							<a href="#home" onClick={() => setShowMenu((prev) => !prev)}>
								Home
							</a>
						</li>
						<li className="expand-menu-list-item">
							<a href="#services" onClick={() => setShowMenu((prev) => !prev)}>
								Find a doctor
							</a>
						</li>
						<li className="expand-menu-list-item">
							<a href="#apps" onClick={() => setShowMenu((prev) => !prev)}>
								Apps
							</a>
						</li>
						<li className="expand-menu-list-item">
							<a
								href="#testimonials"
								onClick={() => setShowMenu((prev) => !prev)}>
								Testimonials
							</a>
						</li>
						<li className="expand-menu-list-item">
							<a href="#about" onClick={() => setShowMenu((prev) => !prev)}>
								About us
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
