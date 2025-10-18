import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { use, useRef } from "react";

const Agenses = () => {
  const imgarr =['https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6','https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/Claire_640X960.jpg?w=640&h=960&s=8db7275995c2d79210fcf8641b5792fc',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6'

]
console.log(imgarr);
  const  imageDiveRef =useRef(null);
  const imgRef =useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function()
{
   gsap.to(imageDiveRef.current,{
    x:50,
    scrollTrigger:{
      trigger:imageDiveRef.current,
      markers:true,
      start:'top 20%',
      end:'top -100%',
      scrub:true,
      pin:true,
      onUpdate:(elem)=>{
         const imageindex =(Math.floor(elem.progress * imgarr.length));
         
         imgRef.current.src=imgarr[imageindex];
         console.log(imgRef.src);



      }
    } 

   })
})
  return (
    <div className="font-[font2]">
      <div   ref={imageDiveRef} className=" absolute h-[20vw] w-[15vw]  top-30 left-30">
        <img  className=" absolute overflow-hidden h-[45vh] rounded-3xl ml-[30vw]" ref={imgRef} src="https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6"></img>
      </div>
      <div className=" relative mt-[55vh] ">
        <h1 className="text-[20vw] uppercase leading-[15vw] text-center">
          Soixan7 <br></br>
          Twelve
        </h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem quo animi fugiat iste harum vitae, enim odit dolor, corporis maxime, molestias culpa. Placeat quidem earum pariatur repudiandae obcaecati nihil!
      
      </div>
    </div>
  );
};

export default Agenses;
