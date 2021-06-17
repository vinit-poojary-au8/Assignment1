import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import img from '../images/img1.png'
import '../css/ThirdSection.css'

function ThirdSection() {
    return (
        <div className='third-container'>
            <div className='third-content'>
                <h1 className='third-h1'>
                Save tons of time on design & coding.
                </h1>
                <p className='third-p'>
                Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.
                </p>
                <Button>Get Started</Button>
            </div>
            <div>
                <img className='img-one' src={img} alt="" />
            </div>
        </div>
    )
}

export default ThirdSection
