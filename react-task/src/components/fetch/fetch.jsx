import React,{useState,useEffect} from 'react';

function Fetch(){
   const [fet,setFet]=useState('');
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then((data)=>data.json()).then((data)=>{
        setFet(data);
    })
   },[])
    return(
        <div>
            <div>
          {
            (fet)?
            (
                <ul>
                    {
                        fet.map(para=>{
                            return<li>{para.title}</li>
                        })
                       
                    }
                </ul>):<h2>Loading...</h2>
          }
                
            </div>
        </div>
    )

}


export default Fetch;