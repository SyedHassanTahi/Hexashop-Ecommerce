import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import CartData from '../components/CartData';

const AddCartPage = () => {
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("CartItems")) || [];
        setCartItem(savedCart);
    }, []);

    //    Increase Quantity
    const increaseQty = (id) => {
        const updatedCart = cartItem.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        setCartItem(updatedCart);
        localStorage.setItem("CartItems", JSON.stringify(updatedCart));
    };

    // Decrease Quantity
    const decreaseQty = (id) => {
        const updatedCart = cartItem.map(item =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setCartItem(updatedCart);
        localStorage.setItem("CartItems", JSON.stringify(updatedCart));
    };

    // Delete Item
    const deleteItem = (id) => {
        const updatedCart = cartItem.filter(item => item.id !== id);
        setCartItem(updatedCart);
        localStorage.setItem("CartItems", JSON.stringify(updatedCart));
    };

    // TOTAL PRICE 
    const totalPrice = cartItem.reduce(
        (total, item) => total + Number(item.price) * item.quantity,
        0
    );

    return (
        <div>
            <Navbar />

            <div className='flex flex-col items-center gap-6 my-5 mx-5 py-25'>
                {cartItem.length === 0 ? (
                    <h2 className="text-xl font-semibold">Your cart is empty</h2>
                ) : (
                    <>
                        {cartItem.map(item => (
                            <CartData
                                key={item.id}
                                item={item}
                                increaseQty={increaseQty}
                                decreaseQty={decreaseQty}
                                deleteItem={deleteItem}
                            />
                        ))}

                        {/* TOTAL PRICE */}
                        <div className="w-full max-w-xl border-t pt-4 text-right">
                            <h3 className="text-xl font-bold">
                                Total: <span>${totalPrice.toFixed(2)}</span>
                            </h3>
                        </div>
                    </>
                )}
            </div>

            <Footer/>
        </div>
    );
};

export default AddCartPage;
