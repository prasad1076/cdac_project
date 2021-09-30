import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { signin } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'



const SigninScreen = (props) => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userSignin = useSelector((store) => store.userSignin)
  const { loading, erro, response, role,id } = userSignin

  const dispatch = useDispatch()
  const onSignin = () => {
    dispatch(signin(email, password))
  }

  useEffect(() => {
    if (role ==='ADMIN') {
      //sessionStorage.setItem('token', id)
      props.history.push('/admin')
    }else if(role ==='CUSTOMER'){
     // sessionStorage.setItem('token', id)
      props.history.push('/home')
    }else if(role ==='EMPLOYEE'){
      //sessionStorage.setItem('token', id)
      props.history.push('/EMPLOYEE')
    }
     else if (response && response.status === 'error') {
      alert(response.error)
    } else if (erro) {
      alert(erro)
    }
  }, [loading, erro, response,role,id])
    return(
        <div className= "login-form">
            <Header title="Login" />
        <div className="form ">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            className="form-control"
            placeholder="test@test.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="form-control"
            placeholder="*****"></input>
        </div>
        <div className="mb-3">
          
          <button onClick={onSignin} className="btn btn-success">
            Singin
          </button>
          
          <div className="float-end">
            <h4>New User?</h4>
             <Link to="/registration-customer" className="signup-color"><h4>Signup here</h4></Link>
          </div>
        </div>
      </div>
    </div>
    )
}


export default SigninScreen