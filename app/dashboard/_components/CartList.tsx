import React, { useEffect, useState } from 'react'
import ListTemplate from '../../(data)/ListTemplate'
import CartTemplate from './CartTemplate'
import { link } from 'fs'


export interface TEMPLATE{
    name:string,
    desc:string,
    icon:string,
    category:string,
    slug:string,
    aiprompt:string,
    form?:FORM[]

}
export interface FORM{
    label:string,
    field:string,
    name:string,
    required?:boolean,
}

const CartList = ({userSearchInput}:any) => {
    const[templateList, setTemplateList]=useState(ListTemplate);
    useEffect(()=>{
        console.log(userSearchInput)
        if(userSearchInput){
            const filterData = ListTemplate.filter(item =>(
                item.name.toLocaleLowerCase().includes(userSearchInput.toLocaleLowerCase())
            ));
             setTemplateList(filterData)
        }else{
            setTemplateList(ListTemplate)
        }
    },[userSearchInput])

  return (
   
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 gap-7'>
        {templateList.map((item, index:number) =>{
            return (
                <div key={index}>
                    <CartTemplate aiprompt={''} {...item} />
                </div>

            )
        })}
    </div>
 
  )
}

export default CartList