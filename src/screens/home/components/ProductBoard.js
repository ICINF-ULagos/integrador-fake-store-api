import { useState } from 'react'
import TodoCard from '../../../components/common/TodoCard/TodoCard'
import './CardProduct.css'


const ProductBoard = ({ products }) => {
    const [allproducts,setAllproducts] = useState([])
    return (
        <div className='cardBody'>
            
                    {
                        products.map((item) =>
                            <TodoCard allproducts={allproducts} setAllproducts={setAllproducts}
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                category={item.category}
                                description={item.description}
                                image={item.image}
                            />
                        )
                    }
            
        </div>
    )
}

export default ProductBoard
