import React from 'react'
import '../css/Footer.css'

function Footer() {
	return (
		<div>
			<div className='footer'>
				<div className='contain'>
					<div className='col'>
						<h5 className='h-color'>Omega</h5>
					</div>
					<div className='col'>
						<h5 className='h-color'>About</h5>
						<ul>
							<li>Our mission</li>
							<li>Our story</li>
							<li>Team Members</li>
						</ul>
					</div>
					<div className='col'>
						<h5 className='h-color'>Learn</h5>
						<ul>
							<li>Tutorials</li>
							<li>How it works</li>
							<li>F.A.Q</li>
						</ul>
					</div>
					<div className='col'>
						<h5 className='h-color'>Stories</h5>
						<ul>
							<li>Blog</li>
							<li>Tech stories</li>
						</ul>
					</div>
					<div className='col'>
						<h5 className='h-color'>Hire</h5>
						<ul>
							<li>Career</li>
							<li>Freelancer</li>
							<li>Trainee</li>
						</ul>
					</div>
				</div>
			</div>
            <div className="solid"></div>
			<div className='footer end-footer'><small>© 2020 UXTheme, All Rights Reserved</small></div>
		</div>
	)
}

export default Footer
