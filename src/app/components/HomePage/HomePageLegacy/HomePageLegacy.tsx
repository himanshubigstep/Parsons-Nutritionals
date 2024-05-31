import React from 'react';
import Recals from '@/app/assets/home-page/zero-product-recalls.png';
import Litigations from '@/app/assets/home-page/zero-litigations.png';
import Churns from '@/app/assets/home-page/zero-customer-churn.png';
import Image from 'next/image';

const HomePageLegacy = () => {
  return (
    <div className='relative w-full max-w-[1280px] mx-auto pb-24'>
      <div className="text-[1rem] text-center text-primary-700 font-text-sm-regular mb-8">
        <div className="text-[2.25rem] tracking-[-0.02em] leading-[2.75rem] font-semibold text-black">
          A legacy with an immaculate reputation
        </div>
      </div>

      <div className='relative w-full flex flex-col md:flex-row justify-evenly items-center gap-4'>
        <div className="w-full md:w-[15rem] h-[12.063rem] flex flex-col justify-center items-center">
          <div className='flex justify-center items-center w-[145px] h-[145px] overflow-hidden object-cover bg-[#0059DF] rounded-full'>
            <Image
              className="overflow-hidden object-cover"
              alt=""
              src={Litigations}
            />
          </div>
          <div className="tracking-[-0.02em] leading-[2.75rem] capitalize font-semibold text-center w-[15rem] h-[2.75rem]">
            Zero Litigations
          </div>
        </div>

        <div className="w-full md:w-[15rem] h-[12.063rem] flex flex-col justify-center items-center mt-4 md:mt-0">
          <div className='flex justify-center items-center w-[145px] h-[145px] overflow-hidden object-cover bg-[#0059DF] rounded-full'>
            <Image
              className="overflow-hidden object-cover"
              alt=""
              src={Churns}
            />
          </div>
          <div className="tracking-[-0.02em] leading-[2.75rem] capitalize font-semibold text-center w-[15rem] h-[2.75rem]">
            Zero customer churn*
          </div>
        </div>

        <div className="w-full md:w-[15rem] h-[12.063rem] flex flex-col justify-center items-center mt-4 md:mt-0">
          <div className='flex justify-center items-center w-[145px] h-[145px] overflow-hidden object-cover bg-[#0059DF] rounded-full'>
            <Image
              className="overflow-hidden object-cover"
              alt=""
              src={Recals}
            />
          </div>
          <div className="tracking-[-0.02em] leading-[2.75rem] capitalize font-semibold text-center w-[15rem] h-[2.75rem]">
            Zero product recalls
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageLegacy;
