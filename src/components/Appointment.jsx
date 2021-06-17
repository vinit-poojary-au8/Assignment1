import React from 'react'
import geeks from '../images/geek.jpg'
import slack from '../images/slack.jpg'
import envato from '../images/envato.jpg'
import usatoday from '../images/usatoday.jpg'
import forbes from '../images/forbes.jpg'
import '../css/Appointment.css'

function Appointment() {
	return (
		<div className='appointment-container'>
			<p className='appointment-p'>
				Popular teams who use Omega for appointments
			</p>
			<div className='appointment-image'>
				<img className='app-img' src={geeks} alt='geeks' />
				<img className='app-img' src={slack} alt='slack' />
				<img className='app-img' src={envato} alt='envanto' />
				<img className='app-img' src={usatoday} alt='usatoday' />
				<img className='app-img' src={forbes} alt='forbes' />
			</div>
		</div>
	)
}

export default Appointment
