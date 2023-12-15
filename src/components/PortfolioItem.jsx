import React from 'react';
import { Button, Card } from 'react-bootstrap';

const PortfolioItem = ({ title, description, imageSrc }) => {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src={imageSrc} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>

				<Button variant="primary"
					onClick={() => window.open('https://market-hub.onrender.com/', '_blank')}
				>Visit</Button>
			</Card.Body>
		</Card>
	);
};

export default PortfolioItem;
