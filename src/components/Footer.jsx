import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
	return (
		<footer className='footer' >
			<Container>
				<Row>
					<Col className='text-center py-3'>
						<p>Made with ❤️ And React</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
export default Footer;
