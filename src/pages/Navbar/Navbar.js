import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../../assets/resume.pdf'
import { BsDownload } from 'react-icons/bs';

const Navbar = () => {

    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(resume).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <div>
            <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-xl text-blue-600 font-semibold">S A Hakim</span>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-blue-600 hover:font-semibold" to='/'>Home</Link>
      <Link className="mr-5 hover:text-blue-600 hover:font-semibold" to='/aboutme'>About Me</Link>
      <Link className="mr-5 hover:text-blue-600 hover:font-semibold" to='/personalprojects'>Personal Projects</Link>
      <Link className="mr-5 hover:text-blue-600 hover:font-semibold" to='/contact'>Contact Me</Link>
      
    </nav>
    <button onClick={onButtonClick} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-300 hover:text-white rounded text-base mt-4 md:mt-0">
    Resume <BsDownload className='ml-2'/>
    </button>
  </div>
</header>
        </div>
    );
};

export default Navbar;