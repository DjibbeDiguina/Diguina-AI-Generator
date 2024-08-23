import React from 'react'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { Table } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { CopyCheckIcon } from 'lucide-react';







const HistoryPage = async () => {
    const data = await db.select().from(AIOutput).execute();

  return (
    <div className=' p-2'>
        <div className='shadow-md shadow-blue-950  rounded-md'>
            <h2 className='p-2 py-4 bg-red-700 my-4 
            text-xl font-extrabold text-blue-950
            rounded-t-md shadow-md shadow-blue-950'>
                Your History .....
            </h2>
        {data.map((item)=>(
            <div className='mt-8'>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='font-extrabold text-[15px] text-blue-950'>
        <th>ID</th>
        <th>FormData</th>
        <th>Slug</th>
        <th>CreatedBy</th>
        <th>CreatedAt</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{item.id}</th>
        <td>{item.formData}</td>
        <td>{item.templateSlug}</td>
        <td>{item.createBy}</td>
        <td>{item.createAt}</td>
        <td><Button> <CopyCheckIcon /> Copy </Button></td>
      </tr>
    </tbody>
  </table>
</div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default HistoryPage