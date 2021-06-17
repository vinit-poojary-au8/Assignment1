import React from 'react'
import '../css/Customer.css'
import TweetCustomCard from './TweetCustomCard'

function Customer() {
	return (
		<div className='tweet-container'>
			<h1 className='customer-h1'>Customers are loving our Omega</h1>
            <div className='tweet-content'>
			<TweetCustomCard
				image='https://randomuser.me/api/portraits/lego/0.jpg'
				name='Jonathan Taylor'
				des='CEO at Creativex'
				tweet='OMG! I cannot believe that I have got a brand new landing page after getting @Omega…'
			/>
			<TweetCustomCard
				image='https://randomuser.me/api/portraits/lego/7.jpg'
				name='Gavin Park'
				des='CEO at Orbital'
				tweet='@Omega is great for creating landing pages within minutes! It actually takes less time…'
			/>
			<TweetCustomCard
				image='https://randomuser.me/api/portraits/lego/3.jpg'
				name='Betty Norton'
				des='Freelance Designer'
				tweet='Whenever I need to create a new landing page for clients, @Omega is my solution…'
			/>
            </div>
            <h6>See all testimonials</h6>
		</div>
	)
}

export default Customer
