import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white flex items-center justify-between px-6 py-4  w-[1440px] h-[86.98px] mx-auto">
      <div className="flex">
        <div className=" flex items-center justify-between gap-[15.86px] w-[214.75px] h-[42px] cursor-pointer">
          <img src="/src/assets/images/Logo.svg" alt="" />
          <h1 className='text-1xl  w-[168px] h-[19.02px] text-[#20DDA4]'>iTeach Programming</h1>
        </div>
        <img className='mt-[5px] cursor-pointer' src="/src/assets/images/burger.svg" alt="" />
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2  w-[213px] h-[45px] rounded-[48px] flex items-center justify-center gap-[14.5px] cursor-pointer">
          <img src="/src/assets/images/calc.svg" alt="" />

          Kalkulyator
        </button>
        <div className="flex items-center w-[160px] h-[33px] gap-[11px]">
          <img src="/src/assets/images/phone.svg" alt="" />
          <h2 className='text-sm'>+9998976282882</h2>
        </div>
        <div className="bg-gray-800 text-white flex items-center justify-center gap-[10px] w-[121px] h-[49px] border-2 border-solid border-[#07BA9A] rounded-sm cursor-pointer">
          <div>
            <img src="/src/assets/images/Globus.svg" alt="" />
          </div>
          <div>
            <option value="uz">UZ</option>
          </div>
          <div>
            <img src="/src/assets/images/prev.svg" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
