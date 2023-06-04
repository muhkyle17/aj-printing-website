const ContactUs = () => {
  return (
    <div>
      {/* <form action='https://formsubmit.co/kylereyes_09@yahoo.com' method='POST'> */}
      <form
        action='https://formsubmit.co/reyesmikyle17@gmail.com'
        method='POST'
        className='container mx-auto w-8/12 flex flex-col gap-10'>
        <div className='flex flex-row gap-24'>
          <label htmlFor='firstName' className='w-full flex flex-col'>
            First Name
            <input type='text' name='firstName' placeholder='First Name' required />
          </label>
          <label htmlFor='lastName' className='w-full flex flex-col'>
            Last Name
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              className='w-full'
              required
            />
          </label>
        </div>
        <div className='flex flex-row gap-24'>
          <label htmlFor='email' className='w-full flex flex-col'>
            Email Address
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              className='w-full'
              required
            />
          </label>
          <label htmlFor='company' className='w-full flex flex-col'>
            Company Name
            <input
              type='text'
              name='company'
              placeholder='Company Name'
              className='w-full'
              required
            />
          </label>
        </div>
        <label htmlFor='message' className='flex flex-col'>
          Message
          <textarea type='text' name='message' rows='4' cols='50' />
        </label>
        <input type='hidden' name='_captcha' value='false' />
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default ContactUs
