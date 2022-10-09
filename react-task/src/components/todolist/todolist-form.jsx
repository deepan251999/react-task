import React,{useState} from "react";
function Form(){
    const [add,setAdd]=useState('');
    const [cliadd,setCliadd]=useState('');
    const addHandler=((eve)=>{
        setAdd(eve.target.value);
    } );
    // clickHandler=((e)=>{
    //     console.log(add);

    // }
    // )
    return(
            <form action="">
                <div className="input-container">
                    <input type="text" placeholder="ENTER A TODO" value={add} onChange={addHandler} className="input-todo"/>
                    <button  className="btn-todo" >Add</button>
                </div>
            </form>
    )
}

export default Form;
