import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { NavLink, Route, Routes, Outlet } from 'react-router-dom';
import ProjectPage from './ProjectPage';
import BlogPage from './BlogPage';
import AboutPage from './AboutPage';
import ContactUs from './ContactUs';

const Vivek = () => {

	const aboutMe = {
		name: 'Vivek Patel',
		description: 'I am a student at Conestoga College, studying Software Engineering Technology. I am passionate about web development and I love to learn new technologies. I am a team player and I love to work in a team. I am a quick learner and I am always ready to learn new things.',
		imageSrc: 'https://vivek-0206.me/static/media/vivek-0206.86791492fe4e90ef0c1f.jpg',
		webSiteLink: 'https://www.linkedin.com/in/vivekp0206/',
	}

	const portfolioItems = [
		{
			title: 'Market-Hub',
			description: 'Market Hub: A multi-vendor marketplace on GitHub. We created a user-friendly platform with React, CSS, and React Bootstrap. I built a powerful server-side solution with NodeJS and Express, and we chose MongoDB for data management.',
			imageSrc: 'https://market-hub.onrender.com/static/media/cover.2fa6fd21252216ec5073.png',
			url: 'https://market-hub.onrender',
		},
		{
			title: 'Project 2',
			description: 'Description of project 2',
			imageSrc: 'https://via.placeholder.com/300',
		},
	];

	const blogPosts = [
		{
			title: 'End-to-End CNN using TensorFlow',
			description: 'How to create an End-to-End deep learning solution from data gathering to deploy the model into Heroku.',
			imageSrc: 'https://miro.medium.com/v2/resize:fit:2000/format:webp/0*AySO__dqK3PsJICJ',
			link: 'https://towardsdatascience.com/end-to-end-cnn-using-tensorflow-4c7d9af3ca4c',
		},
		{
			title: 'Convert Your Jupyter-notebook to Github pages with Github-action',
			description: 'How cool if you convert that notebook into a blog within less than 5 min?',
			imageSrc: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*g7Q-1NaCr0-e1mo9',
			link: "https://medium.com/analytics-vidhya/convert-your-jupyter-notebook-to-github-pages-with-github-action-fa2ce9b4182a"
		},
	];

	// Social media links
	const links = [
		{
			title: 'Linkedin',
			url: 'https://www.linkedin.com/in/vivekp0206/',
		},
		{
			title: 'GitHub',
			url: 'https://www.github.com/Vivek-0206',
		},
		{
			title: 'Twitter',
			url: 'https://twitter.com/Vivek0206_',
		},
	]


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
					<Route path="/" element={<AboutPage aboutMe={aboutMe} />} />
					<Route path="projects" element={<ProjectPage portfolioItems={portfolioItems} />} />
					<Route path="blog" element={<BlogPage blogPosts={blogPosts} />} />
					<Route path="contact" element={<ContactUs links={links} />} />
				</Routes>
			</Col>
		</Row>
	);
};

export default Vivek;
