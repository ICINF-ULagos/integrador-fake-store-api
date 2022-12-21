import axios from 'axios';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';


const useUser = () => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [token, setToken]= useState("");

    const baseUrl = "https://api-nodejs-todolist.herokuapp.com";
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + currentUser?.token ?? ""
    }


    const [datauser, setDataUser]= useState([]);

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
            setToken(res.data.token)
            console.log(res.data.token)
            setDataUser(res.data)
            return res.data.token
           
        }).catch((err)=>{
            console.log(err);
        })
        
        
        return response;
       
        
    }

    const logoutUser = async () => {
        localStorage.removeItem("Token");
        Navigate("/login")
    }

    return {
        currentUser,
        datauser,
        token,
        setCurrentUser,
        loading,
        login: loginUser,
        logout: logoutUser
    };
}


export default useUser;