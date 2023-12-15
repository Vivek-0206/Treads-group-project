import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Home = () => {
	const people = [
		{ name: 'Vivek', link: '/vivek' },
		{ name: 'Yatharth', link: '/yatharth' },
		{ name: 'Om', link: '/om' },
		{ name: 'Krunal', link: '/krunal' },
	];

	const cardStyle = {
		boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
		transition: 'transform 0.3s ease',
		marginBottom: '1.5rem',
	};

	return (
		<Container className="mt-5">
			<h1 className='text-center mb-4'>Group Members</h1>
			<Row className="justify-content-center">
				{people.map((person, index) => (
					<Col key={index} xs={12} sm={6} md={4} lg={3}>
						<Card
							style={cardStyle}
							className="text-center"
							onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
							onMouseOut={(e) => e.currentTarget.style.transform = ''}
						>
							<Card.Body>
								<Card.Title>{person.name}</Card.Title>
								<Card.Text>
									Some description or information about {person.name}.
								</Card.Text>
								<a href={person.link} className="btn btn-primary">
									Visit {person.name}
								</a>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Home;
