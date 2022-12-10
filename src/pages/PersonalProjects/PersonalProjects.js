import React from 'react';
import { Link } from 'react-router-dom';
import swapcars from '../../assets/swapcars.PNG';
import ankan from '../../assets/ankan.PNG';
import pedagog from '../../assets/pedagog.PNG';

const PersonalProjects = () => {
    return (
        <div
        style={{backgroundImage: `url('https://png.pngtree.com/thumb_back/fw800/back_our/20190628/ourmid/pngtree-fresh-wind-blue-geometric-illustration-background-image_280166.jpg')`}}
        className='bg-blue-50 bg-no-repeat bg-cover mx-12 rounded-lg'
        >
            <h2 className="text-3xl text-center pt-12 font-semibold">Personal Projects</h2>
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2  rounded-lg overflow-hidden shadow-lg border-blue-200">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={swapcars} alt="blog"/>
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Swapcars</h1>
            <p className="leading-relaxed mb-3">Used cars resale web application.</p>
            <div className="flex items-center flex-wrap ">
              <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2  rounded-lg overflow-hidden shadow-lg border-blue-200">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={ankan} alt="blog"/>
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Ankan</h1>
            <p className="leading-relaxed mb-3">A personal Screen printing service selling web application.</p>
            <div className="flex items-center flex-wrap">
              <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 rounded-lg overflow-hidden shadow-lg border-blue-200">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={pedagog} alt="blog"/>
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Pedagog</h1>
            <p className="leading-relaxed mb-3">A learning platform web application.</p>
            <div className="flex items-center flex-wrap ">
              <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default PersonalProjects;