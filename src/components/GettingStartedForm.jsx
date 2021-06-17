import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../css/GettingStartedForm.css'

function GettingStartedForm() {
	return (
		<div className='getting-container'>
			<h1 className='getting-h1'>Get started</h1>
			<p className='getting-p'>
				Create custom landing pages with Omega that converts more
				visitors than any website. With lots of unique blocks, you
				can easily build a page without coding.
			</p>
			<Form>
                
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Control
						type='text'
						placeholder='Your name'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Control
						type='email'
						placeholder='Email address'
					/>
				</Form.Group>

				<Button className='button-size' type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	)
}

export default GettingStartedForm
