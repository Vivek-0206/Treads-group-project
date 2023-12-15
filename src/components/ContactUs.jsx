import React, { useState } from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactUs = ({ links }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// check if form data is valid
		if (!formData.name || !formData.email || !formData.message) {
			alert('Please fill out all fields');
			return;
		}

		// Implement logic to handle form submission (e.g., sending data to backend)
		console.log(formData);
		// Reset form fields after submission
		setFormData({
			name: '',
			email: '',
			message: '',
		});
	};

	return (
		<div>

			{/* show social  media link here*/}
			<h2>Social Media Links</h2>
			<ListGroup>
				<Row>
					{links.map((link, index) => (
						<Col key={index} xs={4}> {/* Adjust the 'xs' value to fit your layout */}
							<ListGroup.Item className='text-center'>
								{link.title === 'GitHub' && <FaGithub />}
								{link.title === 'Twitter' && <FaTwitter />}
								{link.title === 'Linkedin' && <FaLinkedin />}
								<a href={link.url} style={{ marginLeft: '0.5rem' }}>{link.title}</a>
							</ListGroup.Item>
						</Col>
					))}
				</Row>
			</ListGroup>

			<h2 className='mt-3' >Contact Me</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="message" className="form-label">
						Message
					</label>
					<textarea
						className="form-control"
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
					></textarea>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default ContactUs;
