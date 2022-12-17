import TodoCard from '../../../components/common/TodoCard/TodoCard'

const ProductBoard = ({ products }) => {
    return (
<<<<<<< HEAD
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
=======
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
                    key= {item.id}
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
>>>>>>> Diego-Alvarez
    )
}

export default ProductBoard
