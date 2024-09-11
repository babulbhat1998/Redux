import { useSelector } from "react-redux";
import { fetcherrorUser, fetchpendingUser, fetchsuccessUser } from "../redux/action";

const ApiFormuser = async () => {
    const host = `http://localhost:8000`;
    // const mystate = useSelector((state)=>state.allInput);
    // console.log(mystate);
    
    const response = await fetch(`${host}/api/forminput/formvalue`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(),
    });
    const json = await response.json();
    return json;

}

export default ApiFormuser;