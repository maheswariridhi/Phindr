import InvoiceCopy from '../store_page/basket_components/invoiceCopy';
import './checkoutPage.css';
import React, { useEffect, useState } from 'react';

import React, { useState } from 'react';
import productsArray from '../store_page/products'
import { useAppState } from '../store_page/AppStateContext';
import { useHistory } from 'react-router-dom';

const CheckoutPage = () => {
    
    //below doesnt work
    // const [email, setEmail] = useState('');
    // const [firstname, setFirstName] = useState('');
    // const [lastname, setLastName] = useState('');
    // const [address, setAddress] = useState('');
    // const [city, setCity] = useState('');
    // const [postcode, setPostcode] = useState('');
    // const [phonenumber, setPhoneNumber] = useState('');
    // const [cardname, setCardName] = useState('');
    // const [cardnumber, setCardNumber] = useState('');
    // const [expirydate, setExpiryDate] = useState('');
    // const [securitycode, setSecurityCode] = useState('');

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const customerDetails = {
    //         email,
    //         firstname,
    //         lastname,
    //         address,
    //         city,
    //         postcode,
    //         phonenumber,
    //         cardname,
    //         cardnumber,
    //         expirydate,
    //         securitycode
    //     };
    
    //     try {
    //         const response = await fetch('http://localhost:8000/customerDetails', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(customerDetails)
    //         });
    
    //         if (response.ok) {
    //             console.log('Customer details added successfully');
    //             // You may perform additional actions here if needed
    //         } else {
    //             console.error('Failed to add customer details');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }

    //     console.log(customerDetails);
    // };

    // useEffect(() => {
    //     const form = document.querySelector('form');
    //     const createCustomer = async (e) => {
    //         e.preventDefault();
    //         const customer = {
    //             email: form.email.value,
    //             firstname: form.firstname.value,
    //             lastname: form.lastname.value,
    //             address: form.address.value,
    //             city: form.city.value,
    //             postcode: form.postcode.value,
    //             phonenumber: form.phonenumber.value,
    //             cardname: form.cardname.value,
    //             cardnumber: form.cardnumber.value,
    //             expirydate: form.expirydate.value,
    //             securitycode: form.securitycode.value
    //         }
    //         await fetch('http://localhost:3000/checkout', {
    //             method: 'POST',
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(customer)
    //         })
    //         window.location.replace('/');
    //     }

    //     form.addEventListener('submit', createCustomer);

    //     return () => {
    //         form.removeEventListener('submit', createCustomer);
    //     }
    // }, []);
    // // above doesn't work
    


    const [quantities, setQuantities] = useState(() => {
        const initialQuantities = {};
    
        productsArray.forEach((product) => {
          initialQuantities[product.ID] = 0;
        });
    
        return initialQuantities;
      });
    
      const { itemAddedToBasket } = useAppState();
    
      const indexesArray = Object.keys(itemAddedToBasket).map(Number);
      const products = productsArray.filter((product) => indexesArray.includes(product.ID));
      
      const history = useHistory();

      const handleClick = () => {
        history.push('/home'); // Replace '/another-page' with the path of the page you want to navigate to
      };


    return (
        <div className='grid-container1'>
            <div>

                <h3 className="text-checkout" style={{paddingTop: 40}}>Contact</h3>
                <p className="text-checkout">Email</p>
                <form className='checkout-form'>
                    <input type="text" id="email" name="email" placeholder='...' className='input-field-shorter'/>
                </form>
           

                    <h3 className="text-checkout" style={{paddingTop :20}}>Shipping address </h3>
                    <div className='grid-equal'>
                        <div>
                            <p className="text-checkout">First Name</p>
                           
                                <input 
                                type="text" 
                                className='input-field-checkout'
                                value = {firstname}
                                onChange={(e) =>(setFirstName(e.target.value))} 
                                />
                            
                        </div>
                        <div>
                            <p className="text-checkout">Last Name</p>
                            
                                <input type="text" 
                                className='input-field-checkout'
                                value = {lastname}
                                onChange={(e) =>(setLastName(e.target.value))}
                                />
                          
                        </div>
                    </div>

                    <p className="text-checkout">Address </p>
                   
                        <input type="text" 
                        className='input-field-checkout'
                        value = {address}
                        onChange={(e) =>(setAddress(e.target.value))}
                        />
                   

                    <div className='grid-equal'>
                        <div>
                            <p className="text-checkout">City</p>
                            
                                <input type="text"
                                className='input-field-checkout'
                                value = {city}
                                onChange={(e) =>(setCity(e.target.value))}
                                />
                           
                        </div>
                        <div>
                            <p className="text-checkout">Postcode</p>
                           
                                <input type="text" 
                                className='input-field-checkout'
                                value = {postcode}
                                onChange={(e) =>(setPostcode(e.target.value))}
                                />
                            
                        </div>
                    </div>

                    <p className="text-checkout">Phone Number </p>
                   
                        <input type="text"
                        className='input-field-shorter'
                        value = {phonenumber}
                        onChange={(e) =>(setPhoneNumber(e.target.value))}
                        />
                    
                    
                    <h3 className="text-checkout" style={{paddingTop :20}}>Payment Method </h3>
                    <p className='text-checkout'>Pay With Card</p>

                    <div style = {{alignContent: 'center'}}>
                        <p className="text-checkout">Name On Card </p>
                        
                            <input type="text" 
                            className='input-field-shorter'
                            value = {cardname}
                            onChange={(e) =>(setCardName(e.target.value))}
                            />
                        
                    </div>
                        <p className="text-checkout">Card Number </p>
                        
                            <input type="number" 
                            className='input-field-shorter'
                            value = {cardnumber}
                            onChange={(e) =>(setCardNumber(e.target.value))}
                            />
                        
                        
                        <p className="text-checkout">Expiry date </p>
                        
                            <input type="number"
                            className='input-field-shorter'
                            value = {expirydate}
                            onChange={(e) =>(setExpiryDate(e.target.value))}
                            />
                        

                        <p className="text-checkout">Security Code </p>
                        
                            <input type="number" 
                            className='input-field-shorter'
                            value = {securitycode}
                            onChange={(e) =>(setSecurityCode(e.target.value))}
                            />
                       
                    
                    <p>{email}</p>
                </div>
                <div className='center-items'>
                    <button className="button-checkout">Confirm Purchase</button>    
                </div>
            </form>


            {/* <div className='grid-basket'>
                <div>
                    <h3 className="text-checkout" style={{paddingTop: 40}}>Your Basket </h3> 
                    <div className='grid-basket-product'>
                        <p className="text-checkout">Product Name</p>
                        <p className="text-checkout">£</p>
                        <p className='text-checkout'>Quantity: </p> 

                    </div> 
                    <hr className="solid-small" />  
                </div>

                <div className='center-items'>
                    <button className="button-checkout">Confirm Purchase</button>    
                </div>
                
            
            </div>
        </div>
    );
}

export default CheckoutPage;