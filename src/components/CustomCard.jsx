import React from 'react'
import Card from 'react-bootstrap/Card'
import '../css/CustomCard.css'
function CustomCard({ id, image, title, des }) {
	return (
		<Card id={id} className='custom-card shadow-lg p-3 mb-5 bg-white round'>
			<Card.Body>
				<img className='img-card' src={image} alt='' />
				<Card.Title>{title}</Card.Title>
				<small>{des}</small>
			</Card.Body>
		</Card>
	)
}

export default CustomCard
