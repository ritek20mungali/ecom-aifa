import React from 'react'
import ProductDetails from '../features/product-list/components/ProductDetails'
import Navbar from '../features/navbar/Navbar'
import { UserOrder } from '../features/user/component/UserOrder'

const UserOrderPage= () => {
  return (
    <div>
        <Navbar>
        <h1 className='mx-auto text-2xl font-semibold'>My Orders</h1>

          <UserOrder/>
        </Navbar>
        
      
    </div>
  )
}

export default UserOrderPage
