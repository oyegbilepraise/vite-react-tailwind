const Footer = () => {
  return (
    <>
      <div className="flex flex-col mx-auto items-center justify-center" style={{ marginTop: '180px' }}>
        <div className="w-full h-100" style={{ backgroundColor: '#0D1525' }}>
          <div className=" flex flex-col justify-center items-center mx-auto w-4/5 sm:w-1/2 -mt-20 p-5 rounded-lg" style={{ backgroundColor: '#20293C' }}>
            <p className="text-white text-2xl text-center">Get early access today</p>
            <p className="my-5 text-gray-400 text-xs text-center">Lorem, eius? Recusandae eum quo enim reiciendis dignissimos mollitia veniam sunt quibusdam error, ducimusß. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, voluptates.</p>
            <div className="flex flex-col sm:flex-row w-full">
              <input type="text" className="bg-white rounded-full px-6 py-4 w-full" placeholder="email@gmail.com..." />
              <button className="mx-0 sm:mx-5 button px-5 rounded-full text-white text-xs p-3 w-full mt-5 sm:mt-0 py-4">Get Started for Free</button>
            </div>
          </div>
          <div className="mt-10 mx-8 sm:mx-24 text-white text-xl sm:text-xs">
            <img src="https://boring-murdock-cfa48a.netlify.app/src/images/fylo-logo.png" className="h-24 sm:h-12" alt="" />
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-5">
              <div className="flex">
                <div className="ml-0 sm:ml-4"><i class="fa-solid fa-location-dot"></i></div>
                <div className="mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis magnam harum. Officiis commodi totam error dolorem.</div>
              </div>
              <div className="">
                <div className="flex">
                  <div><i class="fas fa-location"></i></div>
                  <div className="mx-5">+234 903 971 9017</div>
                </div>
                <div className="flex mt-3">
                  <i class="fas fa-mail-bulk"></i>
                  <div className="mx-5">oluwadhammieh@gmail.com</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div>
                  <p>About Us</p>
                  <p className="my-3">Jobs</p>
                  <p>Press</p>
                  <p className="my-3">Blog</p>
                </div>
                <div className="ml-0 sm:ml-10">
                  <p>Contact Us</p>
                  <p className="my-3">Terms</p>
                  <p>Privacy</p>
                </div>
              </div>
              <div>
                <span> <i className="fa fa-facebook" aria-hidden="true"></i> </span>
                <span> <i className="fa fa-twitter" aria-hidden="true"></i> </span>
                <span><i className="fa fa-instagram" aria-hidden="true"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer;