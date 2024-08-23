import React from 'react'
import { MacbookScroll } from '@/components/ui/macbook-scroll';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Link from "next/link";
import Image from 'next/image';
import { Badge, ChevronRight, Copy, MoveRight, Play, TabletSmartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center'>

<div className="flex flex-col overflow-hidden  ">
      <ContainerScroll
        titleComponent={
          <div className='mb-4 -mt-40 md:-mt-60 justify-center flex flex-col items-center'>
            <h1 className="text-xl text-white md:text-[6rem] font-extrabold mt-1 leading-none">
              <span className='text-red-700'> Diguina AI</span> Generator
            </h1>
             <p className=" md:text-lg  p-4  text-white ">
               Effortlessly generate high-quality content with the power of AI. From text to visuals, diguina-Ai transforms your ideas into polished content in seconds—no coding, no hassle.
              </p>

              <Link href={"dashboard/"} title='AI-Powered Content Creation by Diguina AI Generator'>
<div className='m-8'>
  <button className='bg-red-700 p-4 px-10 rounded-xl text-white font-bold flex items-center gap-2 shadow-sm shadow-white cursor-pointer hover:scale-105'>
    Get Started Now<Play /> </button>
</div>

</Link>
          </div>
          
        }
      >
        <Image
          src='/hero.png'
          alt="AI-Powered Content Creation by Diguina AI Generator"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top "
          draggable={false}
        />
      </ContainerScroll>

      
</div>


<div className='-mt-[180px] md:-mt-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 '>

  <div className='bg-white shadow-blue-950 hover:scale-105 transition-all shadow-sm border-l-4 border-blue-950 w-[315px] p-8 rounded-xl h-[400px] flex flex-col gap-5  '>
    <div className='bg-red-700 p-2 rounded-md w-[40px]'>
    <TabletSmartphone className='text-3xl' />
    </div>
    <h2 className='font-extrabold text-xl text-blue-950'>Instant Content Creation</h2>
    <p>
      Say goodbye to writer's block. Our AI generates unique and relevant 
      content based on your input, helping you meet deadlines and maintain
      a consistent output.
    </p>
    <h3 className='flex gap-2 items-center text-red-700 font-bold'>Learn More <ChevronRight/></h3>
  </div>

  {/* card 2 */}
  
  <div className='bg-white shadow-blue-950 hover:scale-105 transition-all  shadow-sm border-l-4 border-blue-950 w-[315px] p-8 rounded-xl h-[400px] flex flex-col gap-5  '>
    <div className='bg-red-700 p-2 rounded-md w-[40px]'>
    <TabletSmartphone className='text-3xl' />
    </div>
    <h2 className='font-extrabold text-xl text-blue-950'>Versatile and Adaptive</h2>
    <p>
    Whether you need blog posts, social media content, product descriptions, or creative visuals,
    our AI adapts to your needs and delivers content that aligns with your brand's voice and tone.
    </p>
    <h3 className='flex gap-2 items-center text-red-700 font-bold'>Learn More <ChevronRight/></h3>
  </div>

    {/* card 3 */}
  
    <div className='bg-white shadow-blue-950 hover:scale-105 transition-all  shadow-sm border-l-4 border-blue-950 w-[315px] p-8 rounded-xl h-[400px] flex flex-col gap-5  '>
    <div className='bg-red-700 p-2 rounded-md w-[40px]'>
    <TabletSmartphone className='text-3xl' />
    </div>
    <h2 className='font-extrabold text-xl text-blue-950'>Natural-Language Prompts</h2>
    <p>
    Simply describe your content needs in everyday language, and let our AI do the rest. From brainstorming to final edits,
    we make the content creation process effortless
    </p>
    <h3 className='flex gap-2 items-center text-red-700 font-bold'>Learn More <ChevronRight/></h3>
  </div>

      {/* card 4 */}
  
      <div className='bg-white shadow-blue-950 hover:scale-105 transition-all  shadow-sm border-l-4 border-blue-950 w-[315px] p-8 rounded-xl h-[400px] flex flex-col gap-5  '>
    <div className='bg-red-700 p-2 rounded-md w-[40px]'>
    <TabletSmartphone className='text-3xl' />
    </div>
    <h2 className='font-extrabold text-xl text-blue-950'>Customizable Outputs</h2>
    <p>
    Fine-tune the AI-generated content to fit your exact specifications. With our platform, you’re always in control, ensuring
    every piece of content is perfect.
    </p>
    <h3 className='flex gap-2 items-center text-red-700 font-bold'>Learn More <ChevronRight/></h3>
  </div>

</div>




    </div>
  )
}


export default Hero