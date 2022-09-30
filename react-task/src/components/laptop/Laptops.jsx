import React from 'react';
// import img from '../image/laptop-4.jpg';
import './Laptop.css';
import Laptop from './Laptop'
import NewLaptop from './newLaptop'

function Laptops(){
    const laptop = [
        {
           "tittle" :"DELL",
            "cost"  :"40,000",
            'year'  :'2016',
            "description":'',
        },
        {
            "tittle" :"LENOVA",
             "cost"  :"60,000",
             'year'  :'2018',
            "description":'',
         },
         {
            "tittle" :"APPLE",
             "cost"  :"1,20,000",
             'year'  :'2020',
            "description":'',
         },
         {
            "tittle" :"HP",
             "cost"  :"25,000",
             'year'  :'2011',
            "description":'',
         },
         {
            "tittle" :"ACER",
             "cost"  :"63,000",
             'year'  :'2022',
            "description":'',
         },
         {
            "tittle" :"DELL",
             "cost"  :"40,000",
             'year'  :'2021',
            "description":'',
         }
    ]
    return(
        <div>
            {/* <div className="new-laptop-cont">
                <NewLaptop/>
            </div> */}
        <div className="container">
             {
              laptop.map((laptop) => {
               return <Laptop laptopdata={laptop} />
           })
           
        }
     </div>
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


