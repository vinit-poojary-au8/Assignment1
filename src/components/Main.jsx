import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Phone from '../images/phone.svg'
import '../css/Main.css'
function Main() {
	return (
		<div className='main-container'>
			<div className='main-content'>
				<h1 className='main-h1'>
					Redesigned,how you build landing page!
				</h1>
				<p className='main-p'>
					Create custom landing pages with Omega that
					convert more visitors than any website. With lots
					of unique blocks, you can easily build a page
					without coding.
				</p>
				<Button className='button-css'>Get Started</Button>
				<span>Watch the intro video</span>
			</div>
			<div className='main-img-content'>
				<img className='phone-image' src={Phone} alt='iphone' />
			</div>
		</div>
	)
}

export default Main
