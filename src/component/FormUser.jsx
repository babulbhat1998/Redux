import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './redux/fetchuser'

const FormUser = () => {
    const [input, setInput] = useState({
        username: "",
        password: ""
    })
    
    
    const dispatch = useDispatch();
    const onchange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input, [name] : value
        })
    }

    const mystate = useSelector((state)=>state.allInput);
    // console.log(mystate);
    const saveFunc = () => {
        dispatch(fetchUsers())
    }
    return (
        <>
            <div>
                <label>Username</label>
                <input type='text' name='username' onChange={onchange} />
            </div>
            <div>
                <label>Password</label>
                <input type='text' name='password' onChange={onchange} />
            </div>
            <button onClick={saveFunc}>Save</button>
        </>
    )
}

export default FormUser