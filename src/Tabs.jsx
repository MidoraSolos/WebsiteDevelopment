import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./CSS/Tabs.css";
import Container from "react-bootstrap/Container";
import AboutMe from "../src/AboutMe";
import Contact from "../src/ContactMe";
import Skills from "../src/Skills";

function TabContent() {
	return (
		<div>
			<Switch>
				<Container>
					<Tabs
						defaultActiveKey="About"
						id="uncontrolled-tab-example"
						className="mb-3 CenterBox"
					>
						<Tab eventKey="About" title="About">
							<Route path="/" exact>
								<AboutMe />
							</Route>
						</Tab>
						<Tab eventKey="Skills" title="Skills">
							<Route path="/" exact>
								<Skills />
							</Route>
						</Tab>
						<Tab
							// className="d-flex justify-content-center align-items-center"
							eventKey="contact"
							title="Contact"
						>
							<Route path="/" exact>
								<Contact />
							</Route>
						</Tab>
					</Tabs>
				</Container>
			</Switch>
		</div>
	);
}

export default TabContent;
