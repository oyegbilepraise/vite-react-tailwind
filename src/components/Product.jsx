import { useState } from "react";

const Product = () => {
  const [first, setfirst] = useState([1, 2, 3])
  return (
    <>
      <div className="flex flex-col md:flex-row mx-5 mt relative">
        <img src="/Images/illustration-stay-productive.png" alt="" width='500px' height='500px' />
        <div className="my-auto pl-5">
          <p className="text-2xl text-white">Stay productive, <br /> wherever you are</p>
          <p className="text-xs text-gray-400 my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, harum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur.</p>
          <p className="text-xs text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, harum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur.</p>
          <p className="my-5 underline" style={{ color: '#43B1D1' }}>See how fylo works fa-arrow</p>
        </div>
      </div>
      <img src="/Images/bg-quotes.png" alt="" style={{ position: 'absolute', marginTop: '50px' }} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt">
        {first.map(m => (
          <div className="card p-5" style={{ backgroundColor: '#20293C' }} key={m}>
            <p className="text-gray-200 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet aspernatur amet omnis fuga commodi aperiam porro quibusdam facilis, dignissimos ut architecto, enim veritatis, magnam ipsam non dolores eos molestiae! Quod!?</p>
            <div className="flex my-3">
              <img src="/Images/profile-1.jpg" width='40' height='40' className="rounded-full" alt="" />
              <div className="mx-5">
                <p className="text-white">Oyegbile Praise</p>
                <p className="text-xs mt-2 text-gray-400">Software Engineer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Product;