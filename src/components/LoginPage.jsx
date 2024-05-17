import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { UserLogin } from "../features/products/productSlice"

const LoginPage = () => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let loginData = useSelector((state) => state.product?.loginData)
    // console.log(loginData);
    let formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validate: (values) => {
            let err = {}
            if (!values.username) {
                err.username = '*Please Enter Username!'
            }
            if (!values.password) {
                err.password = '*Please Enter Password!'
            }
            return err
        },
        onSubmit: (values) => {
            try {
                dispatch(UserLogin(values))
                if (loginData) {
                    localStorage.getItem('token')
                    navigate('/')
                } else {
                    alert('Check your Login Detial')
                }
            } catch (error) {
                console.error(error)
            }
        }
    })
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input type="text" onChange={formik.handleChange} placeholder="Enter Username...."
                        name="username" value={formik.values.username}></input>
                    {formik.errors.username && <p>{formik.errors.username}</p>}
                </div>
                <div>
                    <input type="password" onChange={formik.handleChange} placeholder="Enter Password...."
                        name="password" value={formik.values.password}></input>
                    {formik.errors.password && <p>{formik.errors.password}</p>}
                </div>
                <div>
                    <button type="submit" style={{ padding: '3px 10px' }}>LOGIN</button>
                </div>
            </form>
        </>
    )
}

export default LoginPage