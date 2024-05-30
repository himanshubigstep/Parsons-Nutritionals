import React from 'react'
import './AboutStreangth.css'

const AboutUsStrength = () => {
    return (
        <div className='max-w-[1280px] mx-auto w-full px-8 py-8 flex justify-center items-center mb-8 our-strength'>
            <div className='w-[40%] h-[640px] rounded-3xl bg-black px-8 py-8 mr-[-8%] z-10 flex flex-col gap-8 items-start our-strength-img'>
                <h2 className='text-3xl font-extrabold text-white'>Our Strengths</h2>
                <img
                    src='https://images.pexels.com/photos/17977099/pexels-photo-17977099/free-photo-of-a-stock-chart-and-money.jpeg'
                    alt='infrastructure'
                    className='w-full h-full max-h-[500px] object-cover rounded-3xl'
                />
            </div>
            <div className='w-[60%] rounded-3xl bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] our-strength-content'>
                <div className='w-full h-full pl-36 py-8 our-strength-inner'>
                    <div className='flex flex-col justify-center mt-0 md:mt-8'>
                        <ul className='relative leading-10 max-w-full md:max-w-[80%] list-styles'>
                            <li className='font-medium text-slate-500'>
                                Professional Management With qualified personnel on all key positions
                            </li>
                            <li className='font-medium text-slate-500'>
                                Complete decentralized and empowered team to ensure accountability and smooth operation
                            </li>
                            <li className='font-medium text-slate-500'>
                                All Units are largest Business Partners of their Respective Principles Stable, long term and satisfying relationship with Principles.
                            </li>
                            <li className='font-medium text-slate-500'>
                                Focus on Continuous Improvements, Process Up gradation & Training
                            </li>
                            <li className='font-medium text-slate-500'>
                                In house project execution team of project managers and supporting engineers
                            </li>
                            <li className='font-medium text-slate-500'>
                                Transparent & Ethical working
                            </li>
                            <li className='font-medium text-slate-500'>
                                Corporate compliance – strong ethic of compliance to all laws, rules and regulations. Provide fair employment without any discrimination
                            </li>
                            <li className='font-medium text-slate-500'>
                            Continuous focus on EHS (Employee, Health and Safety) with eco friendly operations and training.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsStrength