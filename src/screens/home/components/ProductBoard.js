import TodoCard from '../../../components/common/TodoCard/TodoCard'

const ProductBoard = ({ products }) => {
    return (
        <div className='conteiner'>
            <div className='row'>
                <div className='card-group mt-3 md.3'>
                    {
                        products.map((item) =>
                            <TodoCard
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
            </div>
        </div>
    )
}

export default ProductBoard
