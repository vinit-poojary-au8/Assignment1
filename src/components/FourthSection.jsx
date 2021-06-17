import React from 'react'
import img from '../images/img2.png'
import '../css/FourthSection.css'
import Card from 'react-bootstrap/Card'
import unique from '../images/unique.png'
import mobile from '../images/mobile.png'

function FourthSection() {
	return (
		<div className='fourth-container'>
			<div>
				<img className='img-two' src={img} alt='' />
			</div>
			<div className='fourth-content'>
				<h1 className='fourth-h1'>
					It’s everything you’ll ever need.
				</h1>
				<p className='fourth-p'>
					Create custom landing pages with Omega that
					converts more visitors than any website. With lots
					of unique blocks, you can easily build a page
					without coding.
				</p>
				<Card className='shadow-lg p-3 mb-5 bg-white round'>
					<Card.Body className='fourth-card'>
						<img
							className='img-fourth'
							src={unique}
							alt=''
						/>
						<div>
							<Card.Title className='fourth-card-title'>
								50+ Unique Design
								Blocks
							</Card.Title>
							<small>
								with Carefully Coded
							</small>
						</div>
					</Card.Body>
				</Card>
				<Card className='shadow-lg p-3 mb-5 bg-white round'>
					<Card.Body className='fourth-card'>
						<img
							className='img-fourth'
							src={mobile}
							alt=''
						/>
						<div>
							<Card.Title className='fourth-card-title'>
								Mobile First Design
							</Card.Title>
							<small>
								on Every Devices
							</small>
						</div>
					</Card.Body>
				</Card>
			</div>
		</div>
	)
}

export default FourthSection
