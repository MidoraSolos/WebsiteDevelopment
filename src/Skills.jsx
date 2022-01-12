import React from "react";
import "./CSS/Skills.css";

const Skills = (props) => {
	return (
		<article>
			<div class="Skills_content">
				<p>
					<h2 class="skills_color">Programming:</h2>

					<span>React</span>
					<br />
					<span>JavaScript</span>
					<br />
					<span>HTML</span>
					<br />
					<span>CSS</span>
					<br />
					<span>Bootstrap</span>
					<br />
					<span>Java</span>
				</p>
			</div>

			<div class="Skills_content">
				<p>
					<h2 class="skills_color">Development:</h2>
					<span>Linux CLI</span>
					<br />
					<span>Data Structure</span>
					<br />
					<span>OOP</span>
					<br />
					<span>Git</span>
					<br />
					<span>NPM</span>
					<br />
				</p>
			</div>

			<div class="Skills_content">
				<p>
					<h2 class="skills_color">Languages:</h2>
					<span>English</span>
					<br />
					<span>Arabic</span>
					<br />
				</p>
			</div>
		</article>
	);
};
export default Skills;
