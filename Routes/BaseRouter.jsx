import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "../src/Footer";
import TabContent from "../src/Tabs";
import Navigation from "../src/Navigation";
import TypeAnimation from "../src/TypeAnimation";
import Projects from "../src/Projects";

const BaseRouter = () => {
	const movies = ["1", "2", "3"];
	return (
		<Router>
			<Navigation />
			<Switch>
				<main>
					<Route exact path="/">
						<TypeAnimation />
						<TabContent />
					</Route>
					<Route path="/Projects" exact>
						<Projects />
					</Route>
				</main>
			</Switch>
			<Footer />
		</Router>
	);
};

export default BaseRouter;
