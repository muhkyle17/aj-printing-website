const People = () => {
  const people = [
    {
      name: 'Aj',
      title: 'CEO',
      socials: 'LinkedIn',
    },
    {
      name: 'Dave',
      title: 'Staff',
      socials: 'LinkedIn',
    },
    {
      name: 'Max',
      title: 'Staff',
      socials: 'LinkedIn',
    },
    {
      name: 'Mike',
      title: 'Staff',
      socials: 'LinkedIn',
    },
    {
      name: 'John',
      title: 'Staff',
      socials: 'LinkedIn',
    },
    {
      name: 'Eric',
      title: 'Staff',
      socials: 'LinkedIn',
    },
    {
      name: 'Jude',
      title: 'Staff',
      socials: 'LinkedIn',
    },
    {
      name: 'Stephanie',
      title: 'Staff',
      socials: 'LinkedIn',
    },
    {
      name: 'Christina',
      title: 'Staff',
      socials: 'LinkedIn',
    },
    {
      name: 'Jesse',
      title: 'Staff',
      socials: 'LinkedIn',
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
            className='flex flex-col items-center justify-center gap-2 w-52 h-52 p-10 bg-primary'
            key={person}>
            <p className='text-2xl font-semibold text-center'>{person.name}</p>
            <p className='text-sm opacity-70'>{person.title}</p>
            <p className='text-sm'>{person.socials}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default People
