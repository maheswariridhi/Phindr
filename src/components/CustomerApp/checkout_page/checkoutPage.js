import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SalesContext } from '../../SalesContext';
import productsArray from '../store_page/products';
import { useAppState } from '../store_page/AppStateContext';
import InvoiceCopy from '../store_page/basket_components/invoiceCopy';
import './checkoutPage.css';

const CheckoutPage = () => {
    // Context for recording sales and app state for basket items
    const { recordSale } = useContext(SalesContext);
    const { itemAddedToBasket } = useAppState();
    const history = useHistory();

    // State for product quantities in the basket
    const [quantities, setQuantities] = useState(() => {
        const initialQuantities = {};
        productsArray.forEach((product) => {
            initialQuantities[product.ID] = 0;
        });
        return initialQuantities;
    });

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

    // Function to calculate the total cost of items in the basket
    const calculateTotalCost = () => {
        return productsArray.reduce((total, product) => {
            return total + (product.SPRICE * (quantities[product.ID] || 0));
        }, 0);
    };
    
    // Get an array of products that are added to the basket
    const products = productsArray.filter(product => 
        Object.keys(itemAddedToBasket).includes(product.ID.toString())
    );

    // Handler for the form submission
    const handleConfirmPurchase = (event) => {
        event.preventDefault();

        // Check for empty fields and show error message if any are found
        if (!email || !firstName || !lastName || !address || !city || !postcode || !phoneNumber) {
            setShowErrorMessage(true);
            return; // Stop the function if fields are missing
        }

        setShowErrorMessage(false); // Hide error message if all fields are filled
        setIsLoading(true); // Show loading message and disable check out button

        // Calculate the total cost, set time of transaction, isDelivery and status
        const totalCost = calculateTotalCost();
        const date = new Date()
        const isDelivery = true;
        const status = "Paid";

        // Create object that stores all the data of the sale
        const record = {
            address,
            cardName,
            cardNumber,
            city,
            date,
            email,
            expiryMonth,
            expiryYear,
            firstName,
            isDelivery,
            lastName,
            phoneNumber,
            postcode,
            quantities,
            securityCode,
            status,
            totalCost
        };

        // Record the sale to the database
        fetch('http://localhost:8000/customerOrderRecords', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(record)
        }).then(() => {
            console.log("New data added");
            setIsLoading(false);
        })
        

        // Redirect to confirmation page
        history.push('/confirmation');
    };

    // JSX for the checkout page
    return (
        <div className='grid-container1'>
            <form className='checkout-form' onSubmit={handleConfirmPurchase}>
                {/* Contact Information Section */}
                <h3 className="text-checkout" style={{ paddingTop: 40 }}>Contact</h3>
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
                <h3 className="text-checkout" style={{ paddingTop: 20 }}>Shipping address</h3>
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
                    type="text"
                    id="address"
                    name="address"
                    placeholder='Address'
                    className='input-field-checkout'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <div className='grid-equal'>
                    <div>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder='City'
                            className='input-field-checkout'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="postcode"
                            name="postcode"
                            placeholder='Postcode'
                            className='input-field-checkout'
                            value={postcode}
                            onChange={(e) => setPostcode(e.target.value)}
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
                <h3 className="text-checkout" style={{paddingTop :20}}>Payment Method</h3>
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

                {/* Display error message if fields are not filled */}
                { !showErrorMessage && (<div className="error-message"></div>) }
                { showErrorMessage && (
                    <div className="error-message">
                        Please enter all fields.
                    </div>
                ) }

                {/* Checkout button */}
                { !isLoading && <button className='checkout-button'>Confirm Purchase</button> }
                { isLoading && <button className='checkout-button' disabled>Processing...</button> }
            </form>

            {/* Invoice Copy Component */}
            <div className='invoice-1'>
                    <InvoiceCopy products={products} quantities={quantities} />
            </div>
        </div>
    );
};

export default CheckoutPage;
