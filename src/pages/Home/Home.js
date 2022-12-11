import React from 'react';
import { BsGithub, BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';


const Home = () => {
    return (
        <div 
        style={{backgroundImage: `url('https://png.pngtree.com/thumb_back/fw800/back_our/20190628/ourmid/pngtree-fresh-wind-blue-geometric-illustration-background-image_280166.jpg')`}}
        className='bg-blue-50 bg-no-repeat bg-cover mx-12 rounded-lg' >
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <h2 className="text-4xl text-black font-semibold"><Typewriter
      options={{
        strings: ["Hello! I'm Syed Abdul Hakim"],
        autoStart: true,
        loop: true,
      }}
  onInit={(typewriter) => {
    typewriter.typeString("Hello! I'm Syed Abdul Hakim")
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .pasteString("Hello! I'm Syed Abdul Hakim")
      .start();
      
  }}
/>
</h2>
      <br />
      <h4 className='text-2xl'>Junior Web Developer</h4>
      <br />
      <h4 className='lg:text-2xl'>Email: s.abdulhakim10@gmail.com</h4>
      <span class="inline-block h-1 w-16 rounded bg-slate-500 mt-8 mb-6"></span>
     <div className='flex gap-6 justify-center items-center'>
     <h2 class="text-slate-900 text-3xl"><BsGithub/></h2>
      <h2 class="text-slate-900 text-3xl"><BsTwitter/></h2>
      <h2 class="text-slate-900 text-3xl"><BsLinkedin/></h2>
      <h2 class="text-slate-900 text-3xl"><BsFacebook/></h2>
     </div>
      
    </div>
  </div>
</section>
        </div>
    );
};

export default Home;