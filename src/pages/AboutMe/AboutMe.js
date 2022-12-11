import React from 'react';

const AboutMe = () => {
    return (
        <div 
        style={{backgroundImage: `url('https://png.pngtree.com/thumb_back/fw800/back_our/20190628/ourmid/pngtree-fresh-wind-blue-geometric-illustration-background-image_280166.jpg')`}}
        className='bg-blue-50 bg-no-repeat bg-cover mx-12 rounded-lg'>
                <div className="container mx-auto flex px-5 justify-center p-2 lg:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full flex justify-center md:w-full w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded lg:block md:block hidden" alt="hero" src="https://i.ibb.co/0j8M6ZF/me-removebg-preview.png" />
                    </div>
                    <div className="lg:flex-grow md:w-full lg:pl-8 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center p-4">
                        <h2 className="text-3xl mb-4 font-semibold">About Me</h2>
                        <p className="mb-8 leading-relaxed text-md">Hi! I'm Syed Abdul Hakim. A junior web developer. I have done the Complete Web Development course at Programming Hero. I have a deep interest in web development and Programming in general. I have completed three projects using React js, Node js, and so on. I tried many things But I couldn't find my passion until I tried Web Development. After learning some basic HTML, CSS, and JS, I feel like I'm falling in love with programming. In this journey, I realized that I need to improve a lot of things rapidly, so I enrolled in Programming Hero's Complete Web Development course. Now I am constantly learning new things and evolving every day.</p>
                        <span className='text-md'>Skills:

                            <p>•Comfortable: React js, Javascript(ES6), Firebase, Bootstrap CSS, Tailwind CSS. </p>
                            <p>•Familiar: With node js, Express js, and MongoDB.</p>
                            <p>•Tools: Git, Webpack, Chrome Dev Tool, VS Code.</p>
                        </span>
                    </div>
                </div>
          
        </div>
    );
};

export default AboutMe;