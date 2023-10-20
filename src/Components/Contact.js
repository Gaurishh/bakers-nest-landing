import React from 'react'

const Contact = React.forwardRef((props, ref) => {
  return (
    <div className='contact-page-wrapper' ref={ref}>
        <h1 className='primary-heading'>Have a question in mind?</h1>
        <h1 className='primary-heading'>Let us help you!</h1>
        <div className='contact-form-container'>
            {/* <input type="text" placeholder='yourmail@email.com' /> */}
            <button className='contact-button' id='removed'><a href='mailto:bakersnest2022@gmail.com?subject=Query%20regarding%20orders'>Send us an Email!</a></button>
        </div>
    </div>
  )
})

export default Contact