import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "./productSlice"
import loader from '../../assets/loader.gif'
import DisplayData from "../../components/DisplayData"
import { useNavigate } from "react-router-dom"

const Products = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loading = useSelector((state) => state.product.loading)
    const data = useSelector((state) => state.product.data)
    let token = localStorage.getItem('token')
    // const token = localStorage.getItem('token')
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    const handleLog = () => {
        if (token) {
            localStorage.removeItem('token')
            navigate('/')
        } else {
            navigate('/login')
        }
    }
    return (
        <>
            <nav style={{ display: 'flex', justifyContent: "center", gap: '25px', marginTop: '15px' }}>
                <h1>All Products</h1>
                <button onClick={handleLog} style={{ padding: '7px 15px' }}> {!token ? `LOGIN` : `LOGOUT`} </button>
            </nav>
            {
                loading ? <img src={loader} width={600} style={{ display: "block", margin: "auto" }} /> :
                    data?.products?.length > 0 ? <div className="listing-section"> <DisplayData data={data?.products} /> </div>
                        :
                        <h1>No products Found.</h1>
            }
        </>
    )
}

export default Products