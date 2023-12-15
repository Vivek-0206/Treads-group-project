import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

const AboutPage = ({ aboutMe }) => {
	const { name, description, imageSrc, webSiteLink } = aboutMe;

	return (
		<Container>
			<Row className="justify-content-center mt-5">
				<Col xs={12} md={9} >
					<h1 className="text-center">{name}</h1>
					<hr />
					<Row>
						<Col>
							<div className="d-flex justify-content-center mb-3">
								<Image src={imageSrc} alt={name} style={{
									maxWidth: '500px',
									width: '100%',
									boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.5)'
								}} />
							</div>
						</Col>
						<Col className='ms-3'>
							<p>{description}</p>
							<div>
								<p>
									Want to know more about me?  Visit my website{' '}
								</p>
								<Button variant='primary' href={webSiteLink}>
									{name}'s Website
								</Button>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default AboutPage;
