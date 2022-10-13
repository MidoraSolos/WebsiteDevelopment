import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./CSS/Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
	return (
		<Navbar variant="dark" className="Navbar_color">
			<Container>
				<Navbar.Brand href="/">Damanhoury</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link as={Link} to="/Projects">
						Projects
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}
export default Navigation;
