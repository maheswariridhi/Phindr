import InvoiceCopy from '../store_page/basket_components/invoiceCopy';
import './checkoutPage.css';

import React, { useState } from 'react';
import productsArray from '../store_page/products'
import { useAppState } from '../store_page/AppStateContext';
import { useHistory } from 'react-router-dom';

const StoreCheckoutPage = () => {
    
      const { itemAddedToBasket, quantities, onAddToBasket, onSetQuantities } = useAppState();
      console.log(quantities)
      
      const indexesArray = Object.keys(itemAddedToBasket).map(Number);
      const products = productsArray.filter((product) => indexesArray.includes(product.ID));


      const history = useHistory();

      const handleClick = () => {
        history.push('/map'); // Replace '/another-page' with the path of the page you want to navigate to
      };

      // State for customer details
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postcode, setPostcode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [securityCode, setSecurityCode] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false); // New state for error message visibility

 

    // JSX for the checkout page  
    return (
        <div className='grid-container1'>
            <div className='form-container1'>
                <form className='checkout-form'>
                    {/* Contact Information Section */}
                    <h3 className="text-checkout" style={{paddingTop: 40}}>Contact</h3>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder='Email'
                        className='input-field-shorter'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {/* Shipping Address Section */}
                    <h3 className="text-checkout" style={{paddingTop :20}}>Shipping address </h3>
                    <div className='grid-equal'>
                        <div>
                            <input
                                type="text"
                                id="first-name"
                                name="firstName"
                                placeholder='First Name'
                                className='input-field-checkout'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="last-name"
                                name="lastName"
                                placeholder='Last Name'
                                className='input-field-checkout'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <input
                        type="tel"
                        id="phone-number"
                        name="phoneNumber"
                        placeholder='Phone Number'
                        className='input-field-shorter'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />

                    {/* Bank Details Section */}
                    <h3 className="text-checkout" style={{paddingTop :20}}>Payment Method </h3>
                    <p className='text-checkout'>Pay With Card</p>
                    <div style = {{alignContent: 'center'}}>
                        <input 
                            type="text" 
                            id="card-name" 
                            name="cardName" 
                            placeholder='Name On Card' 
                            className='input-field-shorter' 
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                        />
                    </div>
                    <input 
                        type="number" 
                        id="card-number" 
                        name="cardNumber" 
                        placeholder='Card Number' 
                        className='input-field-shorter'
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                    <p className="text-checkout">Expiry date </p>
                    <input 
                        type="number" 
                        id="exp-month" 
                        name="expiryMonth" 
                        placeholder='MM'
                        maxLength={2} 
                        className='input-field-shorter'
                        value={expiryMonth}
                        onChange={(e) => setExpiryMonth(e.target.value)}
                    />
                    <p>/</p>
                    <input 
                        type="number" 
                        id="exp-year" 
                        name="expiryYear" 
                        placeholder='YY'
                        maxLength={2} 
                        className='input-field-shorter'
                        value={expiryYear}
                        onChange={(e) => setExpiryYear(e.target.value)}
                    />
                    <input 
                        type="number" 
                        id="security-code" 
                        name="securityCode" 
                        placeholder='000'
                        maxLength={3} 
                        className='input-field-shorter'
                        value={securityCode}
                        onChange={(e) => setSecurityCode(e.target.value)}
                    />

                    {/* Checkout button */}
                    { !isLoading && <button className='checkout-button'>Checkout and View Store Map</button> }
                    { isLoading && <button className='checkout-button' disabled>Processing...</button> }
                </form>
            </div>


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
                
            
            </div> */}

        <div className='invoice-1'>
            <InvoiceCopy products={products} quantities={quantities} />
        </div>
        
        {/* <button className='checkout-button' onClick={handleClick}>
            Checkout and View Store Map
        </button>
        */}
        </div>
    )
}

export default StoreCheckoutPage;