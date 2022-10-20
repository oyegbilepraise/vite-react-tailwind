const Footer = () => {
  return (
    <>
      <div className="w-100 h-72 mt relative" style={{backgroundColor: '#0D1525'}}>
        <div className="absolute flex flex-col justify-center items-center mx-auto w-1/2 -mt-20"  style={{ backgroundColor: '#20293C' }}>
          <p>Get early access today</p>
          <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, eius? Recusandae eum quo enim reiciendis dignissimos mollitia veniam sunt quibusdam error, ducimus ipsa sed nostrum corporis sequi autem quasi cumque?</p>
          <div className="flex">
            <input type="text" />
            <button>Get Started for Free</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer