'use client'

import React, { useState } from 'react'
import MarkdownIt from 'markdown-it'
import './HomePageTeamSlider.css'

const md = new MarkdownIt();

interface TeamMember {
    name: string;
    position: string;
    attributes: {
        role: string;
        career_highlights: string;
        name: string;
        position: string;
        image: {
            data: {
                attributes: {
                    formats: {
                        medium: {
                            url: string
                        }
                    }
                }
            }
        }
    }
}

const HomePageTeamSlider = ({homePageDataValue, homePageMembersValue}: {homePageDataValue:any, homePageMembersValue:any}) => {
    const TeamSliderTitle = homePageDataValue?.ExperienceSection?.title
    const TeamSliderData = homePageMembersValue
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (index: React.SetStateAction<number>) => {
        setCurrentIndex(index);
    };

    return (
        <div className='relative w-full max-w-[1280px] mx-auto h-full md:h-[42rem] md:py-24 py-8'>
            <div className='w-full flex justify-center items-center text-3xl text-black font-bold'>
                <h1 className='w-[48rem] mb-8 text-center'>
                    {TeamSliderTitle}
                </h1>
            </div>
            <div className='relative w-full h-full flex justify-center items-center gap-4 overflow-x-hidden'>

                {TeamSliderData && TeamSliderData.map((member: TeamMember, index: number) => (
                    <div key={index} onClick={() => handleClick(index)} className={`bg-white h-full rounded-2xl md:w-[70%] w-full flex flex-col md:flex-row justify-between items-center px-4 py-4 gap-4 transition-transform duration-500 ${index === currentIndex ? 'opacity-100 w-[70%]' : 'opacity-20 w-[15%] absolute'}`} style={{ transform: `translateX(${(index - currentIndex) * 100}%)`, marginLeft: index === 0 ? '0' : '1rem', marginRight: index === TeamSliderData.length - 1 ? '0' : '1rem' }}>
                        <div className='w-[95%] md:w-1/3 h-full bg-[#0059D5] rounded-2xl'>
                            <img src={`${member?.attributes?.image?.data?.attributes?.formats?.medium?.url}`} alt='' className='w-full h-full rounded-2xl object-cover' />
                        </div>
                        <div className='w-[95%] md:w-2/3 h-full flex flex-col'>
                            <div className='w-full relative px-4 py-4 marker-list'>
                                <h2 className='text-2xl text-black text-left font-bold w-[48rem] mb-8'>{member?.attributes?.name} <span className='text-gray-400'>{member?.attributes?.position}</span></h2>
                                <p className='text-lg text-left mb-4 text-[#0059D5]'>
                                    {member?.attributes?.role}
                                </p>
                                <ul
                                    className='text-left text-lg text-black list-disc px-4'
                                    dangerouslySetInnerHTML={{ __html: md.render(member?.attributes?.career_highlights) }}
                                >
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className="flex justify-center space-x-2 mt-8">
                {TeamSliderData && TeamSliderData.map((_item: any, index: number) => (
                    <button
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`h-[6px] w-[90px] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-none rounded-br-none ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePageTeamSlider