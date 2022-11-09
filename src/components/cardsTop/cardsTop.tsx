
import productOne from '../../module/products';

function CardsTop() {
    if (!productOne.length) return null;
    
    return (
        <div className='project_container'>
            {productOne.map((product) => (
                <div className='project_card' key={product.id}>

                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.longDescription}</p>
                    
                </div>
            ))}
        </div>
    )
}

export default CardsTop;