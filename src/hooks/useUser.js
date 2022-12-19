import axios from 'axios';
import { useState } from 'react';


const useUser = () => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const baseUrl = "https://api-nodejs-todolist.herokuapp.com";
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + currentUser?.token ?? ""
    }


    const [datauser, setDataUser]= useState("");

    const create = async (user) => {
        const request = await fetch(`${baseUrl}/user/register`, { method: 'POST', headers, body: JSON.stringify(user) });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);

        return response.token; // ????? REVISAR
    }

    const remove = async () => {
        const request = await fetch(`${baseUrl}/user/me`, { method: 'DELETE', headers });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);
    }

    const updateUser = async (user) => {
        const request = await fetch(`${baseUrl}/user/me`, { method: 'PUT', headers, body: JSON.stringify(user) });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);
    }

    const loginUser = async (user) => {

        
        await axios({
            url: "https://fakestoreapi.com/auth/login",
            method: "POST",
            data:  user,
        }).then(res=>{
            console.log(res.data.token)
           //console.log(res.data)
            setDataUser(res.data)

        }).catch((err)=>{
            console.log('esto es un error de hook');
        })

        
    }

    const logoutUser = async () => {
        const request = await fetch(`${baseUrl}/user/logout`, { method: 'POST', headers });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response)
    }

    return {
        currentUser,
        datauser,
        setCurrentUser,
        loading,
        create,
        remove,
        update: updateUser,
        login: loginUser,
        
    };
}


export default useUser;