import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project}) => {
    const {id, thumbnail_img, description, title } = project;
    return (
        <div 
               
              className="p-4 md:w-1/3">
              <div className="h-full border-2 rounded-lg overflow-hidden shadow-lg border-slate-300">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={thumbnail_img} alt="blog"/>
                <div className="p-6">
                  
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                  <p className="leading-relaxed mb-3">{description}</p>
                  <div className="flex items-center flex-wrap hover:font-semibold">
                    <Link to={`/projects/${id}`} className="text-blue-600 inline-flex items-center md:mb-2 lg:mb-0">See Details
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default Project;