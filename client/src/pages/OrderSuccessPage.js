import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { resetCart } from '../features/cart/CartAPI'
import { resetFromCartAsync } from '../features/cart/CartSlice'
import { selectLoggedInUser } from '../features/auth/authSlice'
import { resetOrder } from '../features/order/orderSlice'

const OrderSuccessPage = (props) => {
    
    const dispatch=useDispatch();
    const params=useParams()
    const user=useSelector(selectLoggedInUser)
    const data=useSelector((store)=> store.formData
    )

    console.log(data)
    useEffect(()=>{
      dispatch(resetFromCartAsync(user.id))
      dispatch(resetOrder())
    
    },[dispatch,user])


  return (
          <div>
                       {/* {!params.id && <Navigate to='/' replace={true}></Navigate>} */}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base text-[76px]  font-bold text-green-600">Order Successfully Placed </p>
          <h1 className="mt-[42px] text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Order has Been placed for #{params?.id}</h1>
          <p className="mt-6 text-base leading-7 text-gray-600 font-sm">Dear {props.add.name},Thank You for Your Time and Patience</p>
          <p className="mt-6 text-base leading-7 text-gray-600"></p>
          
          <h2 className='font-sm font-bold text-2xl'>Order will be placed at the below address...</h2>
          <p>{props.add.street}</p>
          <p>{props.add.city}</p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>

          </div>
        </div>
      </main> 
    </div>
    
  )
}

export default OrderSuccessPage
