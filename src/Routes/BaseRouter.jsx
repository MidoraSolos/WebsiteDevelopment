import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "../Footer";
import TabContent from "../Tabs";
import Navigation from "../Navigation";
import TypeAnimation from "../TypeAnimation";
import Projects from "../Projects";

const BaseRouter = () => {
	return (
		<Router>
			<Navigation />
			<Switch>
				<React.Fragment>
					<main>
						<Route exact path="/">
							<TypeAnimation />
							<TabContent />
						</Route>
						<Route exact path="/Projects">
							<Projects />
						</Route>
					</main>
				</React.Fragment>
			</Switch>
			<Footer />
		</Router>
	);
};

export default BaseRouter;
