import React, { useState } from 'react';
import InputField from '../InputField/InputField';
import Button from '../../Common/Button/Button';
import { ContactPagePostForm } from '@/app/Api/Api';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        city: '',
        country: '',
        company_name: '',
        website: '',
        service_requirements: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleInputChange = (key: string) => (value: string) => {
        setFormData((prevState) => ({
            ...prevState,
            [key]: value
        }));
        setErrors((prevState) => ({
            ...prevState,
            [key]: ''
        }));
    };

    const handleClick = async () => {
        const emptyFields = Object.entries(formData).filter(([key, value]) => value.trim() === '').map(([key]) => key);
        
        if (emptyFields.length > 0) {
            const fieldWithError = emptyFields[0];
            setErrors((prevState) => ({
                ...prevState,
                [fieldWithError]: `${fieldWithError} field is required`
            }));
            return;
        }
    
        try {
            const responseData = await ContactPagePostForm(formData);
            console.log('Form data submitted successfully:', responseData);
            setFormData({
                name: '',
                email: '',
                mobile: '',
                city: '',
                country: '',
                company_name: '',
                website: '',
                service_requirements: ''
            });
        } catch (error: any) {
            console.error('Error submitting form data:', error);
            if (error.response) {
                // Check if the error is related to the email field
                if (error.response.data.error && error.response.data.error.field === 'email') {
                    // Display the specific error message for the email field
                    setErrors((prevState) => ({
                        ...prevState,
                        email: error.response.data.error.message
                    }));
                } else {
                    console.error('Error response:', error.response.data.error.message);
                }
            }
        }
    };
    
    const inputFields: {
        name: string;
        type: "number" | "email" | "text" | "textarea";
        label: string;
        placeholder: string;
        value: string;
        onChange: (value: string) => void;
        required: boolean;
    }[] = [
        { name: 'name', type: "text", label: "Name", placeholder: "Enter Your Name", value: formData.name, onChange: handleInputChange('name'), required: true },
        { name: 'email', type: "email", label: "Email", placeholder: "Enter Your Email", value: formData.email, onChange: handleInputChange('email'), required: true },
        { name: 'mobile', type: "text", label: "Mobile Number", placeholder: "Enter Your Mobile Number", value: formData.mobile, onChange: handleInputChange('mobile'), required: true },
        { name: 'city', type: "text", label: "City", placeholder: "Enter Your City", value: formData.city, onChange: handleInputChange('city'), required: true },
        { name: 'country', type: "text", label: "Country", placeholder: "Enter Your Country", value: formData.country, onChange: handleInputChange('country'), required: true },
        { name: 'company_name', type: "text", label: "Company Name", placeholder: "Enter Your Company Name", value: formData.company_name, onChange: handleInputChange('company_name'), required: true },
        { name: 'website', type: "text", label: "Website", placeholder: "Enter Your Website", value: formData.website, onChange: handleInputChange('website'), required: true },
        { name: 'service_requirements', type: "textarea", label: "Describe Your Service Requirements in Detail*", placeholder: "Describe Your Service Requirements in Detail*", value: formData.service_requirements, onChange: handleInputChange('service_requirements'), required: true }
    ];
    return (
        <div className='relative mb-8 w-[95%] mx-auto md:w-[60%] flex'>
            <div className='w-full flex flex-col'>
                {inputFields.map((field, index) => (
                    <div key={index} className="mb-4">
                    {field.required && <span className="text-red-500">* Required</span>}
                        <InputField
                            type={field.type}
                            label={field.label}
                            placeholder={field.placeholder}
                            value={field.value}
                            onChange={field.onChange}
                        />
                        {errors[field.name] && <span className="text-red-500">{errors[field.name]}</span>}
                    </div>
                ))}
                <Button className='mt-16 w-[12rem] h-[60px] bg-[#0059DF] text-white font-bold rounded-lg flex justify-center items-center' onClick={handleClick}>
                    Send Query
                </Button>
            </div>
        </div>
    );
};

export default ContactForm;
