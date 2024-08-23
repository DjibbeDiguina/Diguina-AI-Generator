"use client"
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/CartList'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowBigLeft, Loader, Loader2Icon, LoaderCircleIcon } from 'lucide-react'

interface PROPS{
    selectTemplate:TEMPLATE,
    userFormInput: any,
    loading:boolean,
    
}

const FormSection = ({ selectTemplate, userFormInput, loading }: PROPS) => {

    const[formData, setFormData]=useState<any>();

    const handleInputChange =(event:any)=>{
        const{name, value}= event.target;
        setFormData({...formData,[name]:value})
    }

    const Onsubmit = (e:any) =>{
        e.preventDefault();
        userFormInput(formData);
    }


  return (

    <div className='border-2 shadow-md shadow-blue-950 p-8 py-12 rounded-lg mt-4'>
        <Image src={selectTemplate?.icon} width={64} height={64}
        alt='Djibbe Christian Diguina | Software Engineering AI Generator' />
        <h2 className='font-bold text-red-700 text-2xl mt-4'>
            {selectTemplate?.name}
        </h2>
        <p className='text-sm text-gray-700'>{selectTemplate?.desc}</p>

        <form className='mt-4' onSubmit={Onsubmit}>
            {selectTemplate?.form?.map((item:any, index:number) => (
                <div key={index} className='text-blue-950'>
                    <label className='font-bold'>{item.label}</label>
                    {item.field == 'input'?
                        <Input onChange={handleInputChange} name={item.name} required={item?.required} /> : item?.field == 'textarea'?
                        <Textarea onChange={handleInputChange} name={item.name} required={item?.required}  /> :null
                    }
                </div>
            ))}
            <Button type="submit" 
            className='mt-4 w-full py-6 font-bold text-blue-950'
            disabled={loading}
            >
                {loading&&<Loader className='animate-spin'/>}
                Generate Content</Button>
        </form>
    </div>
  )
}

export default FormSection