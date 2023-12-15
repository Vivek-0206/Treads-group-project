import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PortfolioItem from './PortfolioItem';

const BlogPage = ({ blogPosts }) => {
	return (
		<div>
			<h2 className='text-center'>Blog</h2>
			<hr />
			<Row>
				{blogPosts.map((item, index) => (
					<Col key={index} md={6} lg={4} sm={12}>
						<PortfolioItem title={item.title} description={item.description} imageSrc={item.imageSrc} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default BlogPage;
