import React from "react";
import "./CSS/Footer.css";

const Footer = () => {
	return (
		<footer className="d-flex justify-content-center align-items-center w-100  ">
			<a
				id="resume_link"
				href="https://www.linkedin.com/in/ahmed-damanhoury-b9423a123"
				target="_blank"
			>
				<img
					className="sideImages"
					// style="width:40px; height:40px;"
					src="/LinkedIn(1).png"
					title="My LinkedIn"
				/>
			</a>
			<a id="resume_link" href="https://github.com/MidoraSolos" target="_blank">
				<img
					className="middleImages"
					// style="width:60px; height:40px;"
					src="/GitHub.png"
					title="My GitHub"
				/>
			</a>
			<a id="resume_link" href="DamanhouryResume.pdf" target="_blank">
				<img
					className="sideImages"
					// style="width:40px; height:40px;"
					src="/Resume1.png"
					title="My Resume"
				/>
			</a>
		</footer>
	);
};
export default Footer;
