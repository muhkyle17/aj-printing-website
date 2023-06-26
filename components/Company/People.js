const People = () => {
  const people = [
    {
      name: 'Aj',
      title: 'CEO',
      socials: 'mikylereyes.com',
    },
    {
      name: 'Dave',
      title: 'Staff',
      socials: 'mikylereyes.com',
    },
    {
      name: 'Max',
      title: 'Staff',
      socials: 'mikylereyes.com',
    },
    {
      name: 'Mike',
      title: 'Staff',
      socials: 'mikylereyes.com',
    },
    {
      name: 'John',
      title: 'Staff',
      socials: 'mikylereyes.com',
    },
    {
      name: 'Eric',
      title: 'Staff',
      socials: 'mikylereyes.com',
    },
    {
      name: 'Jude',
      title: 'Staff',
      socials: 'mikylereyes.com',
    },
    {
      name: 'Stephanie',
      title: 'Staff',
      socials: 'mikylereyes.com',
    },
    {
      name: 'Christina',
      title: 'Staff',
      socials: 'mikylereyes.com',
    },
    {
      name: 'Jesse',
      title: 'Staff',
      socials: 'mikylereyes.com',
    },
  ]

  return (
    <div className='flex flex-col gap-6 container mx-auto'>
      <h2 className='text-8xl text-primary font-bold'>Our People.</h2>
      <h3 className='text-2xl text-primary w-2/5 leading-10'>
        The talented individuals behind every design and printer.
      </h3>
      <div className='flex flex-wrap gap-5 text-secondary'>
        {people.map(person => (
          <div
            className='flex flex-col items-center justify-center gap-2 w-52 h-52 bg-primary rounded-lg'
            key={person}>
            <p className='text-2xl font-semibold text-center'>{person.name}</p>
            <p className='text-base bg-red-400 opacity-70 text-center'>{person.title}</p>
            {/* <a href={person.socials}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='ionicon w-6 h-6 text-blue-400'
                viewBox='0 0 512 512'>
                <path d='M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z' />
              </svg>
            </a> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default People
