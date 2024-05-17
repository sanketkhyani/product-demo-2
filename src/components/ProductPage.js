import { useParams } from "react-router-dom"
import './ProductPage.css'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getData } from "../features/products/productSlice"


export const ProductPage = () => {
    let dispatch = useDispatch()
    const singleProductData = useSelector((state) => state.product.singleProductData)
    console.log(singleProductData);
    let { id } = useParams()
    useEffect(() => {
        dispatch(getData(id))
    }, [id])
    return (
        <>
            <div className="card-wrapper">
                <div className="card">
                    <div className="product-imgs">
                        <div className="img-display">
                            <div className="img-showcase">
                                <img src={singleProductData?.thumbnail} alt={singleProductData?.title} />
                                <img src={singleProductData?.thumbnail} alt={singleProductData?.title} />
                                <img src={singleProductData?.thumbnail} alt={singleProductData?.title} />
                                <img src={singleProductData?.thumbnail} alt={singleProductData?.title} />
                            </div>
                        </div>
                        <div className="img-select">
                            {
                                singleProductData?.images?.map((image, index) => (

                                    <div className="img-item">
                                        <a href="#" data-id={index + 1}>
                                            <img src={image} alt="shoe image" />
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* <div className="img-item">
                                <a href="#" data-id="2">
                                    <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt="shoe image" />
                                </a>
                            </div>
                            <div className="img-item">
                                <a href="#" data-id="3">
                                    <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt="shoe image" />
                                </a>
                            </div>
                            <div className="img-item">
                                <a href="#" data-id="4">
                                    <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt="shoe image" />
                                </a>
                            </div> */}
                    <div className="product-content">
                        <h2 className="product-title">{singleProductData?.title}</h2>
                        <a href="#" className="product-link">visit {singleProductData?.brand} store</a>
                        <div className="product-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <span>{singleProductData?.rating?.toFixed(1)}({singleProductData?.stock})</span>
                        </div>

                        <div className="product-price">
                            <p className="last-price">Old Price: <span>${singleProductData?.price}</span></p>
                            <p className="new-price">New Price: <span>${(singleProductData?.price) - (singleProductData?.discountPercentage * singleProductData?.price / 100).toFixed(2)} ({singleProductData?.discountPercentage})</span></p>
                        </div>

                        <div className="product-detail">
                            <h2>about this item: </h2>
                            <p>{singleProductData?.description}</p>
                            <ul>
                                <li>Available: <span>{singleProductData?.stock > 0 ? `in stock` : `out of stock`}</span></li>
                                <li>Category: <span>{singleProductData?.category}</span></li>
                                <li>Shipping Area: <span>All over the world</span></li>
                                <li>Shipping Fee: <span>Free</span></li>
                            </ul>
                        </div>

                        <div className="purchase-info">
                            <input type="number" min="0" value="1" />
                            <button type="button" className="btn">
                                Add to Cart <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
