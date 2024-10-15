/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { preview } from '../assets'

const Form = ({labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
return (
    <div>
            <div className='items-center flex gap-2 mb-2'>
                    <label htmlFor={name} className='text-[#222328] font-medium'>{labelName}</label>
                    {isSurpriseMe && (
                            <button onClick={handleSurpriseMe} className='text-[#6469ff] font-medium border border-[#6469ff] rounded-md px-2 py-1'>Surprise Me</button>
                            
                    )}
                    
            </div>
            <div>
                <input
                type={type}
                id={name}     
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
                className='w-full border border-[#e6ebf4] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6469ff] focus:border-transparent'

                />
            </div>

            
    </div>
)
}

export default Form