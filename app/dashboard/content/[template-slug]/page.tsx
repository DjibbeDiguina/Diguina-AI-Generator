"use client"
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import ListTemplate from '@/app/(data)/ListTemplate'
import { TEMPLATE } from '../../_components/CartList'
import Link from 'next/link'
import { ArrowBigLeft} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'


 interface PROPS{
  params:{
    'template-slug':string
  }
}

const ContentSlug = (props:PROPS) => {

  const selectTemplate:any= ListTemplate?.find((item)=> item.slug == props.params['template-slug']);
  
  const[loading, setLoading] = useState(false)
  const[aiOutput, setAiOutput] =useState<string>("")
  const{user}=useUser();
  
  
  const GenerateAIContent = async(formData:any)=>{
    setLoading(true)
    const SelectedPrompt = selectTemplate?.aiPrompt;
    const FinalAIPrompt = JSON.stringify(formData)+","+SelectedPrompt;

    const result = await chatSession.sendMessage(FinalAIPrompt);
    console.log(result.response.text());
    setAiOutput(result.response.text());

    await SaveInDb(formData, selectTemplate?.slug, result.response.text(), user)

    setLoading(false)
   }

   const SaveInDb = async (formData: any, slug: any, aiRes: any, user:any) => {
    const resultDb = await db.insert(AIOutput).values({
        formData: formData,
        templateSlug: slug,
        aiResponse: aiRes,
        createBy: user?.primaryEmailAddress?.emailAddress, // Ensure this is defined
        createAt: moment().format('DD/MM/YYYY'), // Corrected date format
    });

}

  return (
    <div className='py-2'>
    <Link 
    href={'/dashboard'}>
      <Button className='mx-2 text-blue-950  mt-2'><ArrowBigLeft /> Back</Button>
    </Link>

    <div className='grid grid-cols-1 lg:grid-cols-3  lg:gap-5 p-2'>

      {/* FormSection */}
      <FormSection  loading={loading} 
       selectTemplate={selectTemplate} 
       userFormInput={(v:any)=>GenerateAIContent(v)}  />
      {/* OutputSection */}
      <div className='lg:grid lg:col-span-2 '>
      <OutputSection aiOutput={aiOutput} />
      </div>
     
    </div>
    </div>
  )
}

export default ContentSlug