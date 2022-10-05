import {useState, useEffect} from 'react';
import '../form/Login.css'

function Login(props) {
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [valid,setValid]=useState(false); 
     const emailHandler = (e) => {
        setEmail(e.target.value);
        console.log(e);
    }
    useEffect(()=>{
        if(email.includes('@')&&(passwd.length>=6)){
            setValid(true);
        }
    },[email,passwd])
    const passwdHandler = (eve) => {
        setPasswd(eve.target.value);
        console.log(eve.target.value);
    }

    const loginHandler = (event) => {
        event.preventDefault();
        console.log(email, passwd);
        
        if(email && passwd){
            props.isLogin(true);
        }
    }
    
    return (<div className="login-container">
        <form className='login-form' onSubmit={loginHandler}>
            <label className='login-label'>Enter email:
                <input className='login-input'type="text" placeholder="email" value={email} onChange={emailHandler} />
            </label>
            
            <label className='login-label'>Enter password:
                <input className='login-input'type="password" placeholder="password" value={passwd} onChange={passwdHandler}/>
            </label>
            {valid?<button className='login-btn'>Submit</button>:<button className='login-btn' disabled='true'>Submit</button>}
            {/* <button className='login-btn'>Submit</button> */}
        </form>
    </div>);
}

export default Login;