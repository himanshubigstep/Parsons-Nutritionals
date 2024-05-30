'use client'
import React, { useState } from 'react'
import InputField from '../InputField/InputField';
import Button from '../../Common/Button/Button';

const ContactForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');

    const handleInputChange = (value: string) => {
        setInputValue(value);
    };

    const handleTextareaChange = (value: string) => {
        setTextareaValue(value);
    };

    const handleClick = () => {
        alert('Button clicked!');
      };
    return (
        <div className='relative mb-8 w-[95%] mx-auto md:w-[60%] flex'>
            <div className='w-full flex flex-col'>
                <InputField
                    type="text"
                    label="Name"
                    placeholder="Enter Your Name"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <InputField
                    type="email"
                    label="Email"
                    placeholder="Enter Your Email"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <InputField
                    type="text"
                    label="Mobile Number"
                    placeholder="Enter Your Mobile Number"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <InputField
                    type="text"
                    label="City"
                    placeholder="Enter Your City"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <InputField
                    type="text"
                    label="Country"
                    placeholder="Enter Your Country"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <InputField
                    type="text"
                    label="Company Name"
                    placeholder="Enter Your Company Name"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <InputField
                    type="text"
                    label="Website"
                    placeholder="Enter Your Website"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <InputField
                    type="textarea"
                    label="Describe Your Service Requirements in Detail*"
                    placeholder="Describe Your Service Requirements in Detail*"
                    value={textareaValue}
                    onChange={handleTextareaChange}
                />
                <Button className='mt-16 w-[12rem] h-[60px] bg-[#0059DF] text-white font-bold rounded-lg flex justify-center items-center' onClick={handleClick}>
                    Send Query
                </Button>
            </div>
        </div>
    )
}

export default ContactForm