import React from 'react';
import Recals from '@/app/assets/home-page/zero-product-recalls.png';
import Litigations from '@/app/assets/home-page/zero-litigations.png';
import Churns from '@/app/assets/home-page/zero-customer-churn.png';
import Image from 'next/image';

const HomePageLegacy = () => {
  return (
    <div className='relative w-full max-w-[1280px] mx-auto pb-24'>
      <div className="text-[1rem] text-center text-primary-700 font-text-sm-regular mb-8">
        <div className="md:text-2xl text-2xl font-semibold text-black dark:text-white">
          A legacy with an immaculate reputation
        </div>
      </div>

      <div className='relative w-full flex flex-row justify-evenly items-center gap-4'>
        <div className="w-[5rem] md:[5rem] md:w-[15rem] h-[12.063rem] flex flex-col justify-center items-center">
          <div className='flex justify-center items-center md:w-[145px] md:h-[145px] w-[5rem] h-[5rem] overflow-hidden object-cover bg-[#0059DF] rounded-full'>
            <Image
              className="overflow-hidden object-cover p-4"
              alt=""
              src={Litigations}
            />
          </div>
          <div className="text-xl   font-semibold text-center md:w-[15rem] md:h-[2.75rem] mt-2">
            Zero Litigations
          </div>
        </div>

        <div className="w-[5rem] md:[5rem] md:w-[15rem] h-[12.063rem] flex flex-col justify-center items-center mt-4 md:mt-0">
          <div className='flex justify-center items-center md:w-[145px] md:h-[145px] w-[5rem] h-[5rem] overflow-hidden object-cover bg-[#0059DF] rounded-full'>
            <Image
              className="overflow-hidden object-cover p-4"
              alt=""
              src={Churns}
            />
          </div>
          <div className="text-xl   font-semibold text-center md:w-[15rem] md:h-[2.75rem] mt-2">
            Zero customer churn*
          </div>
        </div>

        <div className="w-[5rem] md:[5rem] md:w-[15rem] h-[12.063rem] flex flex-col justify-center items-center mt-4 md:mt-0">
          <div className='flex justify-center items-center md:w-[145px] md:h-[145px] w-[5rem] h-[5rem] overflow-hidden object-cover bg-[#0059DF] rounded-full'>
            <Image
              className="overflow-hidden object-cover p-4"
              alt=""
              src={Recals}
            />
          </div>
          <div className="text-xl   font-semibold text-center md:w-[15rem] md:h-[2.75rem] mt-2">
            Zero product recalls
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageLegacy;
