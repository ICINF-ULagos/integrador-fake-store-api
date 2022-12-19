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


    const [datauser, setDataUser]= useState([]);

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
        //const [userName, setUserName] = useState('');
        //const [password, setPassword] = useState('');
        //const [error, setError] = useState('');
        console.log('asdasdasdasdasd')
       
        
        const response = axios({
            url: "https://fakestoreapi.com/auth/login",
            method: "POST",
            data:   user,
        }).then(res=>{
            console.log("REspuesta")
            //setToken(token)
            console.log(res.data.token)
            setDataUser(res.data)
            return res.data.token
           
        }).catch((err)=>{
            console.log(err);
        })
        
        
        return response;
        //const request = await fetch(`${baseUrl}/user/login`, { method: "POST", body: JSON.stringify(user), headers })
        //const response = request.ok ? await response.json() : await response.text();

        /* if (!request.ok) {
            throw new Error(response);
        }

        sessionStorage.setItem("user", JSON.stringify(response.user));
        sessionStorage.setItem("token", response.token);
        setCurrentUser({
            ...response.user,
            token: response.token
        }); */

        
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
        logout: logoutUser
    };
}


export default useUser;