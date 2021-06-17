import React from 'react'
import Card from 'react-bootstrap/Card'
import tweetImage from '../images/tweet.png'
import '../css/TweetCustomCard.css'

function TweetCustomCard({ image, name, des, tweet }) {
	return (
		<div>
			<Card id='1' className='tweet-card shadow-lg p-3 mb-5 bg-white round'>
				<Card.Body>
					<div className='tweet-prof'>
						<img
							className='img-tweet'
							src={image}
							alt=''
						/>
						<div className='tweet-inner'>
							<Card.Title className='tweet-name'>
								{name}
							</Card.Title>
							<small className='tweet-des'>{des}</small>
						</div>
						<img
							className='img-tweet'
							src={tweetImage}
							alt=''
						/>
					</div>
					<Card.Text className='tweet'>{tweet}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	)
}

export default TweetCustomCard
