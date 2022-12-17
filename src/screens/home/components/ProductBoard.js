import TodoCard from '../../../components/common/TodoCard/TodoCard'

const ProductBoard = ({ products }) => {
    return (
        
        <main>
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
        </main>
    )
}

export default ProductBoard
