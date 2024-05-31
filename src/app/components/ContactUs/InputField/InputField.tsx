import React from 'react';

interface InputProps {
    type: 'text' | 'textarea' | 'email' | 'number';
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    label?: string;
}

const InputField: React.FC<InputProps> = ({ type, placeholder, value, onChange, label }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className='relative w-full mb-4 flex flex-col gap-4'>
            {label && <label className='font-medium text-lg'>{label}</label>}
            {type === 'textarea' ? (
                <textarea
                    className='w-full py-0 px-4 h-[180px] outline-none rounded-lg'
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    required
                />
            ) : (
                <input
                    className='w-full py-0 px-4 h-[60px] outline-none rounded-lg'
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    required
                />
            )}
        </div>
    );
};

export default InputField;
