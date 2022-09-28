import React from "react";

function Form(){
    return(
            <form action="">
                <div className="input-container">
                <input type="text" placeholder="ENTER A TODO" className="input-todo"/>
                <button  className="btn-todo">Add</button>
                </div>
            </form>
    )
}

export default Form;