import { useNavigate } from 'react-router-dom';
import './style.css'

function DisplayData({ data }) {
    let navigate = useNavigate()
    const handleProduct = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        data?.map((product, index) => {
            return <div className="product" key={index}>
                <div className="image-box">
                    <img className="images" id="image-1" src={product.thumbnail} />
                </div>
                <div className="text-box">
                    <h2 className="item" title={product?.title}>{product?.title?.length > 15 ? product.title.slice(0, 15) : product?.title}...</h2>
                    <h3 className="price">${product.price}</h3>
                    <p className="description" title={product?.description}>{product?.description?.length > 45 ? product?.description.slice(0, 45) : product?.description}...</p>
                    <button type="button" name="item-1-button" id="item-1-button" className='button' onClick={() => handleProduct(product?.id)}>Show More...</button>
                </div>
            </div>
        })
    )
}

export default DisplayData