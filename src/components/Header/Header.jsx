import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineBars3BottomRight } from "react-icons/all";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className="bg-[#f9f9ff]">
			<div className="custom-container text-center md:flex flex-wrap mx-auto justify-between py-4">
				<div>
					<div>
						<Link to="/">
							<h1 className="text-2xl font-semibold"> ProgrammerShipon </h1>
						</Link>
					</div>
					<div>
						<button
							className="text-gray-600 hover:text-gray-500 md:hidden"
							onClick={toggleMenu}
						>
							<HiOutlineBars3BottomRight />
						</button>
						<nav
							className={`md:flex md:flex-wrap ${menuOpen ? "flex" : "hidden"}`}
						>
							<NavLink className="nav-link" to="/">
								{" "}
								Home{" "}
							</NavLink>
							<NavLink className="nav-link" to="/statistics">
								{" "}
								Statistics{" "}
							</NavLink>
							<div className="relative inline-block text-left">
								<NavLink
									className="nav-link"
									to="/appliedjobs"
									onClick={() => setMenuOpen(false)}
								>
									Applied Jobs
								</NavLink>
							</div>
							<div className="relative inline-block text-left">
								<NavLink
									className="nav-link"
									to="/blog"
									onClick={() => setMenuOpen(false)}
								>
									Blog
								</NavLink>
							</div>
						</nav>
					</div>
				</div>
				<div>
					<button className="main-btn">Start Applying</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
