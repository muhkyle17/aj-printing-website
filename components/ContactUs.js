const ContactUs = () => {
  return (
    <div>
      {/* <form action='https://formsubmit.co/kylereyes_09@yahoo.com' method='POST'> */}
      <form
        action='https://formsubmit.co/reyesmikyle17@gmail.com'
        method='POST'
        className='container mx-auto w-8/12 flex flex-col gap-10'>
        <div className='flex flex-row'>
          <input type='text' name='firstName' placeholder='First Name' required />
          <input type='text' name='lastName' placeholder='Last Name' required />
        </div>
        <div>
          <input type='email' name='email' placeholder='email' />
          <input type='text' name='company' placeholder='Company Name' required />
        </div>
        <textarea type='text' rows='4' cols='50' />
        <input type='hidden' name='_captcha' value='false' />
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default ContactUs
