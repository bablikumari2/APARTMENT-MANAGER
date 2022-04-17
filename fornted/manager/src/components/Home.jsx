import "./Home.css"
import { useNavigate} from "react-router-dom";

export const Home = () =>{
    const navigate = useNavigate();
    const handleClick = ()=>{
    navigate("/login")
    }

    return (<div id="homeMain">
        <div id="homeDiv_1">
        <h1 id="homeHead">Welcome to Dream House</h1>
        <p>Dream house</p>
        <button onClick={handleClick}>visit now..</button>
        
     
        </div>
        
      
    </div>)
}