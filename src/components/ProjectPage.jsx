import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PortfolioItem from './PortfolioItem';

const ProjectPage = ({ portfolioItems }) => {
	return (
		<div>
			<h2 className='text-center'>Projects</h2>
			<hr />
			{/* Display project-related content here */}
			<Row>
				{portfolioItems.map((item, index) => (
					<Col key={index} md={6} lg={4} sm={12}>
						<PortfolioItem title={item.title} description={item.description} imageSrc={item.imageSrc} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default ProjectPage;
