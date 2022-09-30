
import {useState} from 'react';


function NewLaptop() {
    const [newLaptop, setNewLaptop] = useState({
        tittle:'',
        cost:'',
        year:'',
        description:''
    });


    const inputHandler =(e)=>{
        // console.log(newLaptop);

        // setNewLaptop((previousState) =>{
        //     return { ...previousState, ...{[e.target.tittle]: e.target.value}}
        // });
        setNewLaptop({[e.target.tittle]: e.target.value})
        console.log(e.target.tittle, e.target.value);
         console.log(newLaptop);
    }
    const newLaptopHandler =(e) =>{
        // e.preventDefault();
        console.log(newLaptop);

    };

    return (
    <div className="login-container">
    <form className='login-form' onSubmit={newLaptopHandler}>
        <label className='login-label'>Enter tittle:
            <input className='login-input' type="text" placeholder="name" name='tittle' value={newLaptop.tittle} onChange={inputHandler} />
        </label>
        
        <label className='login-label'>Enter cost:
            <input className='login-input' type="text" placeholder="cost" name='cost' value={newLaptop.cost} onChange={inputHandler}/>
        </label>

        <label className='login-label'>Enter year:
            <input className='login-input' type="text" placeholder="text" name='year' value={newLaptop.year} onChange={inputHandler}/>
        </label>

        <label className='login-label'>Enter description:
            <input className='login-input' type="text" placeholder="text" name='description' value={newLaptop.description} onChange={inputHandler}/>
        </label>

        <button className='login-btn'>Submit</button>
    </form>
</div>
);
}


export default NewLaptop;