import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "../src/Footer";
import TabContent from "../src/Tabs";
import Navigation from "../src/Navigation";
import TypeAnimation from "../src/TypeAnimation";

const BaseRouter = () => {
	return (
		<Router>
			<Navigation />
			<main>
				<TypeAnimation />
				<TabContent />
			</main>
			<Footer />
		</Router>
	);
};

export default BaseRouter;
