import React from "react";
import "./CSS/ContactMe.css";

const Contact = (props) => {
	return (
		<div className="Holder">
			<section className="Form_Container">
				<form method="post" action="https://formspree.io/f/xgeppwlj">
					<div className="Form_Header heading_color">
						<h1 id="CenterName">Contact Me</h1>
					</div>

					<div className="Form_content">
						<label for="full name">Name:</label>
						<br />
						<input
							className="Name_Container"
							id="Contact_info"
							type="text"
							name="user_name"
							placeholder="Enter Your Name"
							required="required"
						/>
						<br />

						<label for="Email">Email:</label>
						<br />
						<input
							className="Email_Container"
							id="Contact_info"
							type="email"
							name="_replyto"
							placeholder="Enter Your Email"
							required="required"
						/>
						<br />

						<label for="full name">Message:</label>
						<br />
						<textarea
							className="Message_Container"
							id="Contact_info2"
							type="text"
							id="message"
							name="user_message"
							placeholder="Send Me A Message"
							required="required"
						></textarea>
						<br />

						<input
							type="hidden"
							name="_next"
							value="https://midorasolos.github.io/"
						/>
						<input
							type="hidden"
							name="_subject"
							value="New Submission from Website!"
						/>
						{/* <input type="text" name="_gotcha" className="hidden" /> */}

						<button type="submit" id="formSubmit">
							Submit
						</button>
					</div>
				</form>
			</section>
		</div>
	);
};
export default Contact;
