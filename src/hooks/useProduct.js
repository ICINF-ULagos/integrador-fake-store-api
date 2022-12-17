import {useState} from 'react'
import axios from "axios";

const url = "https://fakestoreapi.com";

const useProduct = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

<<<<<<< HEAD
    const getAll = () => {
        setLoading(true);
=======
    const getAll =  () => {
        //setLoading(true);
>>>>>>> Diego-Alvarez
        
        axios.get(`${url}/products`)
            .then((response) =>{
                setData(response.data);
            })
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));

    }

<<<<<<< HEAD
    return {    
=======
    return {
>>>>>>> Diego-Alvarez
        data,
        setData,
        loading,
        getAll
    }
<<<<<<< HEAD
    
    
=======
>>>>>>> Diego-Alvarez

};

export default useProduct;