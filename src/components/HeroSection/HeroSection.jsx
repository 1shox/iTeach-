import React from 'react';
import './HeroSection.css';
import illustration from "../../assets/images/ullustration.png";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white content  h-[807px]  px-4 py-12 ">
         <div className="container mx-auto w-[1440px] flex flex-col md:flex-row items-center justify-around gap-[33px]">
         <div className="max-w-lg mb-8 md:mb-0 w-[486px] h-[273px]">
        <h1 className="text-4xl font-bold mb-4">
          O'z kelajagingizni <span className="text-green-500">ITeach</span> bilan birga quring!
        </h1>
        <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 mt-4 w-[162px] h-[62px] rounded-[48px]">
          Xizmatlar
        </button>
      </div>
      <div className="max-w-md w-[662px] h-[662px] mr-[270px]">
        <div className="w-[662px] h-[662px] rounded-full bg-[#111926] border-4 border-[#01AB78] relative overflow-hidden">
          <img
            src={illustration}
            alt="Illustration"
            className="w-[568px] h-[568px] object-cover absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"
          />
        </div>
      </div>
         </div>

    </section>

 
  );
};

export default HeroSection;
