import TodoCard from '../../../components/common/TodoCard/TodoCard'

const ProductBoard = ({ products }) => {
    return (
        <main style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
            gridAutoRows: '10rem',
            gridGap: '4rem',
            padding: '2rem 6rem'
            }}>
            {
                products.map((item) =>(
                <TodoCard
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    category={item.category}
                    description={item.description}
                    image={item.image}
                />
                ))
            }
        </main>
    )
}

export default ProductBoard