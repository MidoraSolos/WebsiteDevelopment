import React, { useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Navigation() {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">Damanhoury</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#home">About Me</Nav.Link>
					<Nav.Link href="#features">Projects</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}
export default Navigation;
