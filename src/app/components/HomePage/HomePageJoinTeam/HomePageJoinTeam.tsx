import React from 'react'
import Link from 'next/link'

const HomePageJoinTeam = ({homePageDataValue}: {homePageDataValue:any}) => {
    const JoinTeamData = homePageDataValue?.JoinTeam
  return (
    <div className='w-full relative my-24 h-[480px]'>
        <img src={`${JoinTeamData?.media?.data?.attributes?.formats?.large?.url}`} alt="Join Team" className='w-full h-full object-cover absolute left-0 right-0 tob-0 bottom-0' />
        <div className='w-full max-w-[1280px] mx-auto absolute left-0 right-0 tob-0 bottom-0 h-full'>
            <div className='px-8 flex justify-center items-center flex-col absolute right-0 top-[50%] translate-y-[-50%] bg-[#0059DF] w-[95%] md:w-[40%] h-[80%] md:h-[300px] rounded-3xl'>
                <h1 className='text-3xl text-white font-bold mb-2'>
                    Join Our Team 
                </h1>
                <p className='text-white text-lg font-normal text-center'>
                    {JoinTeamData?.content}
                </p>
                <Link href='/contact-us' className='text-center text-black text-lg font-bold bg-white px-2 py-2 rounded-lg w-[10rem] mt-4'>{JoinTeamData?.btn_text}</Link>
            </div>
        </div>
    </div>
  )
}

export default HomePageJoinTeam