import Img from '../image/laptop-4.jpg';


function Laptop(props){
    // console.log(props.isLaptop,props.laptopdata);
    return(
       

        <div className="laptop-list">
        <img src={Img} alt="" width={100}/>
        <li>{props.laptopdata.tittle}</li>
        <li>{props.laptopdata.cost}</li>
        </div>
    
    );
}
 
export default Laptop;