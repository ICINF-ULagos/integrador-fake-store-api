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

    const [resultsf,setResultsf]=useState([]);



    const [Filter,setFilter] =useState();
    const Buscador = (evento,products)=>{
    
        
    
        setFilter(evento)
        console.log('Si paso por Seach')
        let results = []
    
        if(!Filter){
          
            results = products
        }
        else{
            results=products.filter((dato) => dato.title.toLowerCase().includes(Filter.toLowerCase()))
          }
        setResultsf(results)
        setData(results)
        
        //return{
        //    products,Filter,setFilter
        //}
            
        
    
    }
    
    const [prueba,setPrueba] = useState([])

    const AgregarProducto = (props)=> {
        console.log(props.id)
 
       // props.setAllproducts([...allproducts,props.id])
       setPrueba([...props.allproducts,props.id])
        //console.log(allproducts)
        //console.log('paso Useproduct')
        

    }
    return {
        data,
        setData,
        loading,
        getAll,
        resultsf,
        Buscador,
        AgregarProducto,
        prueba
       // allproducts

    }
    
    
    

};

export default useProduct;