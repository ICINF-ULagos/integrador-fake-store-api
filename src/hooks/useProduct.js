import {useState} from 'react'
import axios from "axios";

const url = "https://fakestoreapi.com";

const useProduct = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


   

    const getAll = () => {
        setLoading(true);

        
        axios.get(`${url}/products`)
            .then((response) =>{
                setData(response.data);
            })
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));

    }



    return {    

        data,
        setData,
        loading,
        getAll
    }

    

};

export default useProduct;