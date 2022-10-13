import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CustomCard({ imgUrl, title, text, btnLink }) {
	return (
		<Card>
			<Card.Img variant="top" src={`/${imgUrl}`} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{text}</Card.Text>

				<Button href={btnLink} target="_blank" variant="primary">
					Go to Project
				</Button>
			</Card.Body>
		</Card>
	);
}
