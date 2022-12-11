import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProjectDetails = () => {
    let {id} = useParams();
    const projects = useLoaderData();
    console.log(projects, id);

    const specificProject = projects.find(project => project.id === id);
    console.log('new', specificProject);
    return (
        <div style={{ backgroundImage: `url('https://png.pngtree.com/thumb_back/fw800/back_our/20190628/ourmid/pngtree-fresh-wind-blue-geometric-illustration-background-image_280166.jpg')` }}
        className='bg-blue-50 bg-no-repeat bg-cover mx-12 rounded-lg'>
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
  <div class="flex flex-wrap w-full lg:w-1/2 mx-auto">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block border-2 rounded-lg p-4 border-slate-900" src={specificProject.img_1}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block border-2 rounded-lg p-4 border-slate-900" src={specificProject.img_2}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block border-2 rounded-lg p-4 border-slate-900" src={specificProject.img_3}/>
        </div>
      </div>
    <div class="flex w-full mb-20 flex-wrap p-8">
      <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 w-full  mb-4">{specificProject.title} -  <small>{specificProject.description}</small> </h1>
      <span class=" lg:w-1/2 mx-auto  leading-relaxed text-base"><strong>Website Features</strong> <br /> {specificProject.features1} <br /> {specificProject.features2} <br /> <br /><strong>Technologies</strong> <br /> {specificProject.technologies}
      <br />
      <br />
      <span className='flex gap-4 justify-center items-center'>
      <a className='font-semibold' target="_blank" href={specificProject.live_link}>Live Link</a> |
      <a className='font-semibold' target="_blank" href='#'>Client-Side Code</a> |
      <a className='font-semibold' target="_blank" href='#'>Server-Side Code</a>
      </span>
      </span>
      
    </div>
    
  </div>
</section>
        </div>
    );
};

export default ProjectDetails;