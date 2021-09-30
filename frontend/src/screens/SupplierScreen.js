import Header from '../components/Header'
import {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
const SupplierScreen = (props) => {

    

    const userSignin = useSelector((store) => store.userSignin)
    const { name } = userSignin
    const [username, setUsername] = useState(name)
    return(
        <div>    
        <Header title="Supplier Screen"></Header>
        <h1>Hello {username}</h1>
    </div>
    )
}


export default SupplierScreen