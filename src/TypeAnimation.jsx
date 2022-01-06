import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./CSS/App.css";
import Typewriter from "react-typical";

function TypeAnimation() {
	return (
		<section className=" d-flex flex-column align-items-center text-center">
			<img
				src="https://developer.okta.com/assets-jekyll/blog/featured/okta-react-headphones-7eb452b2d9437d217af818caf8efdf8e509eb802d059510b54a6635494ad1cbd.jpg"
				alt=""
			/>
			<h1 className="mt-5">Hi I'm Ahmed Damanhoury</h1>
			<p>
				I'm a{" "}
				<Typewriter
					loop={Infinity}
					wrapper="b"
					steps={[
						"Programmer 🧑‍💻",
						2000,
						"Gamer",
						2000,
						"Web Developer",
						2000,
					]}
				/>
			</p>
		</section>
	);
}

export default TypeAnimation;
