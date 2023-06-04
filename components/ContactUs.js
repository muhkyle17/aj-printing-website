const ContactUs = () => {
  return (
    <div>
      {/* <form action='https://formsubmit.co/kylereyes_09@yahoo.com' method='POST'> */}
      <form action='https://formsubmit.co/reyesmikyle17@gmail.com' method='POST'>
        <input type='text' name='firstName' placeholder='First Name' required />
        <input type='text' name='lastName' placeholder='Last Name' required />
        <input type='text' name='company' placeholder='Company Name' required />
        <input type='hidden' name='_captcha' value='false' />
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default ContactUs
