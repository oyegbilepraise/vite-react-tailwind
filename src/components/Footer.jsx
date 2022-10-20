const Footer = () => {
  return (
    <>
      <div className="flex mx-auto items-center justify-center bg-red-200" style={{marginTop: '180px'}}>
        <div className="w-full h-72" style={{ backgroundColor: '#0D1525' }}>
          <div className=" flex flex-col justify-center items-center mx-auto w-1/2 -mt-20 p-5" style={{ backgroundColor: '#20293C' }}>
            <p className="text-white text-2xl">Get early access today</p>
            <p className="my-4 text-gray-400 text-xs text-center">Lorem, eius? Recusandae eum quo enim reiciendis dignissimos mollitia veniam sunt quibusdam error, ducimusß. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, voluptates.</p>
            <div className="flex">
              <input type="text" className="bg-white rounded-full px-6" placeholder="email@gmail.com..." />
              <button className="mx-5 button px-5 rounded-full text-white text-xs">Get Started for Free</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer;