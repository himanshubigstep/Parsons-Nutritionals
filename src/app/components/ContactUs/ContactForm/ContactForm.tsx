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
    const [serviceError, setServiceError] = useState<string>('');

    const validateMobile = (mobile: string) => {
        const mobilePattern = /^\d{10}$/; // Assumes a 10-digit mobile number
        return mobilePattern.test(mobile);
    };

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

        if (!validateMobile(formData.mobile)) {
            setErrors((prevState) => ({
                ...prevState,
                mobile: 'Please enter a valid mobile number'
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
                if (error.response.data.error && error.response.data.error.field === 'email') {
                    setServiceError('Please enter a valid email address');
                } else {
                    console.error('Error response:', error.response.data.error.message);
                    setServiceError(error.response.data.error.message)
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
    }[] = [
        { name: 'name', type: "text", label: "Name", placeholder: "Enter Your Name", value: formData.name, onChange: handleInputChange('name') },
        { name: 'email', type: "email", label: "Email", placeholder: "Enter Your Email", value: formData.email, onChange: handleInputChange('email') },
        { name: 'mobile', type: "text", label: "Mobile Number", placeholder: "Enter Your Mobile Number", value: formData.mobile, onChange: handleInputChange('mobile') },
        { name: 'city', type: "text", label: "City", placeholder: "Enter Your City", value: formData.city, onChange: handleInputChange('city') },
        { name: 'country', type: "text", label: "Country", placeholder: "Enter Your Country", value: formData.country, onChange: handleInputChange('country') },
        { name: 'company_name', type: "text", label: "Company Name", placeholder: "Enter Your Company Name", value: formData.company_name, onChange: handleInputChange('company_name') },
        { name: 'website', type: "text", label: "Website", placeholder: "Enter Your Website", value: formData.website, onChange: handleInputChange('website') },
        { name: 'service_requirements', type: "textarea", label: "Describe Your Service Requirements in Detail*", placeholder: "Describe Your Service Requirements in Detail*", value: formData.service_requirements, onChange: handleInputChange('service_requirements') }
    ];
    return (
        <div className='relative mb-8 w-[95%] mx-auto md:w-[60%] flex'>
            <div className='w-full flex flex-col'>
                {inputFields.map((field, index) => (
                    <div key={index} className="mb-4">
                        <InputField
                            type={field.type}
                            label={field.label}
                            placeholder={field.placeholder}
                            value={field.value}
                            onChange={field.onChange}
                        />
                        {errors[field.name] && <span className="text-red-500">{errors[field.name]}</span>}
                        {serviceError && field.name === 'email' && <span className="text-red-500">{serviceError}</span>}
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
