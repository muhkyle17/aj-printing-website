const History = () => {
  return (
    <div className='mx-auto container relative'>
      <div className='text-primary flex flex-col gap-5 w-[85%] mb-44'>
        <h3 className='text-5xl font-bold leading-[3.5rem] z-10'>
          North Graphic Supplies was founded in 2008 as a small scale printing company, providing
          labels and prints for local businesses and start-ups alike
        </h3>
        <p className='text-lg z-10'>
          Fourteen years later, we still abide by the same core principles - client focus, elite
          engineering talent, and unbeatable value through responsible use of cutting-edge
          technology
        </p>
        <p className='text-lg z-10'>
          Through our experience in launching over 400 different websites and mobile applications,
          we have developed a highly refined product process. The goal - solutions that deliver
          excellence for every industry, every niche, and every organization size all the way from
          start-up to enterprise.
        </p>
      </div>
      <div
        className='absolute opacity-90 w-2/5 min-h-[24rem] bottom-[-70px] rounded-md right-[-90px] bg-cover bg-no-repeat bg-right'
        style={{
          backgroundImage: `url('/company-founded-image.jpeg')`,
        }}
      />
    </div>
  )
}

export default History
