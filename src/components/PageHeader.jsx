import React from 'react';

const PageHeader = (props) => {
  return (
    <div className='relative mt-30'>
     
      <img 
        className="w-full object-cover h-[35vh] lg:h-[60vh]" 
        src={props.img} 
        alt="Page header" 
      />
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-center text-white">
        <h2 className="lg:text-5xl text-2xl text-nowrap font-bold lg:mb-2">{props.title}</h2>
        <span className='italic'>Awesome & Creative HTML CSS layout by TemplateMo</span>
      </div>
    </div>
  );
}

export default PageHeader;
