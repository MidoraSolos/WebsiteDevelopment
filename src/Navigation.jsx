import React, { useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./CSS/Navigation.css";

function Navigation() {
	return (
		<Navbar variant="dark" className="Navbar_color">
			<Container>
				<Navbar.Brand href="/">Damanhoury</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="/#skills">About Me</Nav.Link>
					<Nav.Link href="/Projects">Projects</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}
export default Navigation;
