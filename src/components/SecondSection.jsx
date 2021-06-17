import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import CustomCard from './CustomCard'
import bookmark from '../images/bookmark.png'
import chat from '../images/chat.png'
import layout from '../images/layout.png'
import sidebar from '../images/sidebar.png'
import '../css/SecondSection.css'

function SecondSection() {
	return (
		<div className='second-container'>
			<div></div>
			<div className='second-inner'>
                <div className='card-adjust'>
				<div className='card-layout'>
					<CustomCard
						id='one'
						image={layout}
						title='Multiple Layouts'
						des='With lots of unique blocks, you can easily build a page without coding.'
					/>
					<CustomCard
						id='two'
						image={sidebar}
						title='Fully Responsive'
						des='With lots of unique blocks, you can easily build a page without coding.'
					/>
				</div>
				<div className='card-layout'>
					<CustomCard
						id='three'
						image={bookmark}
						title='Well Documented'
						des='With lots of unique blocks, you can easily build a page without coding.'
					/>
					<CustomCard
						id='four'
						image={chat}
						title='Great Support'
						des='With lots of unique blocks, you can easily build a page without coding.'
					/>
				</div>
                </div>
				<div className='second-content'>
					<h1 className='second-h1'>Build a perfect landing page fast.</h1>
					<p className='second-p'>
						Create custom landing pages with Omega
						that converts more visitors than any
						website. With lots of unique blocks, you
						can easily build a page without coding.
					</p>
					<Button variant='outline-light'>Check all features</Button>
				</div>
			</div>
		</div>
	)
}

export default SecondSection
