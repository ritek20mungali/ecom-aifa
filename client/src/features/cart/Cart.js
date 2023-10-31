import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItemFromCartAsync, selectItems, updateCartAsync } from './CartSlice';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from './CartSlice';

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-item-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-item-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

export function Cart() {
  // const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true)
  const items=useSelector(selectItems);
  console.log({items})
  const totalAmount=items.reduce((amount,item)=>item.product.price*item.quantity+amount,0)
  const totalItem=items.reduce((total,item)=>item.quantity+total,0)
  
  const handleQuantity=(e,item)=>{
    const updatedItem = {
      id: item.id,
      quantity: +e.target.value,
    };

    dispatch(updateCartAsync(updatedItem))
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleRemove=(e,id)=>{
    dispatch(deleteItemFromCartAsync(id)) 
  }
  
  // if(!items){
  //   return (<>
  //   <h1>LOADING....</h1></>)
  // }

  return (
    <>
     {!items.length && <Navigate to='/' replace={true}></Navigate>}
     <div className="mx-auto mt-7 bg-blue-100 max-w-7xl px-4 sm:px-6 lg:px-8 rounded-2xl">
      {/* <h1 className='text-5xl text-center font-bold'>CART</h1> */}
      <h1 className="p-4 text-5xl text-center font-bold tracking-tight text-gray-900 border-b-[5px] rounded-2xl border-blue-950" >CART</h1>

       <div className="mt-8 border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {items.map((item) => (
                              <li key={item.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={item.product.thumbnail}
                                    alt={item.product.title}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={item.product.href}>{item.product.title}</a>
                                      </h3>
                                      <p className="ml-4">${item.product.price}</p>
                                      
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{item.product.brand}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                  <div className="text-gray-500">Qty
            <select
              onChange={(e) => handleQuantity(e, item)}
              value={item.quantity}
              className='ml-3 rounded-lg'
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>

                                    <div className=" flex ">
                                      <button
                                        type="button"
                                        onClick={(e)=>handleRemove(e,item.id)}
                                        className="font-medium rounded-lg p-2 text-white hover:text-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                                      >
                                        Remove
                                      </button>
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
                        <p>${totalAmount}</p>
                      </div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Totals Items in Cart</p>
                        <p>{totalItem} Items</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <Link
                          to="/checkout"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                       <Link to="/">
                       
                       <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Or Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                          </Link>
                          
                        </p>
                      </div>
                    </div>
    </div>
    </>
   
  );
}
