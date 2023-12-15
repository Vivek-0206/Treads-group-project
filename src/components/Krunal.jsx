import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { NavLink, Route, Routes, Outlet } from 'react-router-dom';
import ProjectPage from './ProjectPage';
import BlogPage from './BlogPage';
import AboutPage from './AboutPage';
import ContactUs from './ContactUs';

const Vivek = () => {
	const portfolioItems = [
		{
			title: 'Project 1',
			description: 'Description of project 1',
			imageSrc: 'https://via.placeholder.com/300', // Replace with actual image URL
		},
		{
			title: 'Project 2',
			description: 'Description of project 2',
			imageSrc: 'https://via.placeholder.com/300', // Replace with actual image URL
		},
	];

	const blogPosts = [
		{
			title: 'Blog Post 1',
			description: 'Content of blog post 1',
			imageSrc: 'https://via.placeholder.com/300', // Replace with actual image URL
		},
		{
			title: 'Blog Post 2',
			description: 'Content of blog post 2',
			imageSrc: 'https://via.placeholder.com/300', // Replace with actual image URL
		},
	];

	return (
		<Row>
			<Col xs={3} md={2} className="sidebar bg-dark" style={{ minHeight: '80vh' }}>
				<ul className="nav flex-column">
					<li className="nav-item">
						<NavLink to="/vivek" className="nav-link text-white" activeClassName="active">
							About
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/vivek/projects" className="nav-link text-white" activeClassName="active">
							Projects
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/vivek/blog" className="nav-link text-white" activeClassName="active">
							Blog
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/vivek/contact" className="nav-link text-white" activeClassName="active">
							Contact
						</NavLink>
					</li>
				</ul>
			</Col>
			<Col xs={9} md={10} className="content">
				<Outlet />
				<Routes>
					<Route path="/" element={<AboutPage />} />
					<Route path="projects" element={<ProjectPage portfolioItems={portfolioItems} />} />
					<Route path="blog" element={<BlogPage blogPosts={blogPosts} />} />
					<Route path="contact" element={<ContactUs />} />
				</Routes>
			</Col>
		</Row>
	);
};

export default Vivek;
