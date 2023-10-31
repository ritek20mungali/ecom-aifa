import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  
    fetchLoggedInOrdersAsync,
  selectCount,
  selectUserOrders,
} from '../UserSlice';
import { selectLoggedInUser } from '../../auth/authSlice';
import { selectCurrentOrder } from '../../order/orderSlice';


export function UserOrder() {
//   const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const user=useSelector(selectLoggedInUser);
  const orders=useSelector(selectUserOrders)

  useEffect(()=>{
     dispatch(fetchLoggedInOrdersAsync(user.id))
  },[])


  return (
    <div>
{orders.map((order)=>
<div>

<div className="mx-auto mt-7 bg-blue-100 max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* <h1 className='text-5xl text-center font-bold'>CART</h1> */}
      <h1 className="p-4 text-5xl text-center font-bold tracking-tight text-gray-900">Order Number is : {order.id}</h1>
      <h3 className="p-4 text-2xl text-center font-bold tracking-tight text-gray-900">Order Status : Completed</h3>

       <div className="mt-8 border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {order.items.map((item) => (
                              <li key={item.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={item.href}>{item.title}</a>
                                      </h3>
                                      <p className="ml-4">${item.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty :{item.quantity}
                                    </p>

                                    <div className="flex">
                                      
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                    

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${order.totalAmount}</p>
                      </div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Totals Items in Cart</p>
                        <p>{order.totalItem} Items</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      
                      
                    </div>
    </div>
    </div>
   )}
    </div>
  )
}
