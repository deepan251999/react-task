import React from 'react';
// import img from '../image/laptop-4.jpg';
import './Laptop.css';
import Laptop from './Laptop'


function Laptops(){
    const laptop = [
        {
           "tittle" :"DELL",
            "cost"  :"40,000",
        },
        {
            "tittle" :"LENOVA",
             "cost"  :"60,000",
         },
         {
            "tittle" :"APPLE",
             "cost"  :"1,20,000",
         },
         {
            "tittle" :"HP",
             "cost"  :"25,000",
         },
         {
            "tittle" :"ACER",
             "cost"  :"63,000",
         },
         {
            "tittle" :"DELL",
             "cost"  :"40,000",
         }
    ]
    return(
        <div className="container">
             {
              laptop.map((laptop) => {
               return <Laptop laptopdata={laptop} isLaptop={"deepan"}/>
           })
           
           }
        </div>


        // <div className="container">
        //     {
        //     [0,1,2,3].map(() => {
        //         return <Laptop/>
        //     })}
        // </div>


        // <div className="container">
        // <Laptop/>
        // <Laptop/>
        // <Laptop/>
        // <Laptop/>
        // <Laptop/>
        // <Laptop/>
        // </div>




        // <div className='container'>
        // <div className="laptop-list">
        //     <img src={img} alt="" width={100}/>
        //     <li>tittle</li>
        //     <li>cost</li>
        // </div>
        // <div className="laptop-list">
        //     <img src={img} alt="" width={100}/>
        //     <li>tittle</li>
        //     <li>cost</li>
        // </div>
        // <div className="laptop-list">
        //     <img src={img} alt="" width={100}/>
        //     <li>tittle</li>
        //     <li>cost</li>
        // </div>
        // <div className="laptop-list">
        //     <img src={img} alt="" width={100}/>
        //     <li>tittle</li>
        //     <li>cost</li>
        // </div>
        // <div className="laptop-list">
        //     <img src={img} alt="" width={100}/>
        //     <li>tittle</li>
        //     <li>cost</li>
        // </div>
        // <div className="laptop-list">
        //     <img src={img} alt="" width={100}/>
        //     <li>tittle</li>
        //     <li>cost</li>
        // </div>
        // </div>



    )
}
export default Laptops;


