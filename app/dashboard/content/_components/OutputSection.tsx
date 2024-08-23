
import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface PROPS{
  aiOutput:string,
}

const OutputSection = ({aiOutput}:PROPS) => {
  const editorRef:any= useRef();

  useEffect(()=>{
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  },[aiOutput])

  return (
    <div className='mt-8 lg:mt-4 rounded-lg border-2 shadow-lg shadow-blue-950 p-2'>
      <div className='flex items-center justify-between py-2'>
        <h2 className='text-blue-950 font-bold'>Your Result...</h2>
        <Button onClick={()=>navigator.clipboard.writeText(aiOutput)}
        className='gap-2 text-blue-950'> <Copy/> Copy </Button>
      </div>
      
    <Editor
    ref={editorRef}
    initialValue="Your Result will apear here ...."
    height="600px"
    initialEditType="wysiwyg"
    useCommandShortcut={true}
    onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
  />

    </div>
  )
}

export default OutputSection