import InvoiceCopy from '../store_page/basket_components/invoiceCopy';
import './checkoutPage.css';
import React, { useContext, useState } from 'react';
import { SalesContext } from '../../SalesContext';
import productsArray from '../store_page/products';
import { useAppState } from '../store_page/AppStateContext';
import { useHistory } from 'react-router-dom';

const CheckoutPage = () => {
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


    const { recordSale } = useContext(SalesContext); // This should be inside the component

    const [quantities, setQuantities] = useState(() => {
        const initialQuantities = {};
    
        productsArray.forEach((product) => {
          initialQuantities[product.ID] = 0;
        });
    
        return initialQuantities;
    });
    
    const calculateTotalCost = (items) => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    };     
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        /* // Assuming you have a way to calculate the total cost of the basket
        const totalCost = calculateTotalCost(); // This function should be implemented */
        const totalCost = 12.34;

        const date = new Date();

        const isDelivery = true;
        const status = "Paid";

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
            securityCode,
            status,
            totalCost
        };

        // Record the transaction
        recordSale({
            items: itemAddedToBasket, // Include details of items sold
            totalCost: totalCost,
            timestamp: new Date() // You can also put this logic inside recordSale method
          });

        fetch('http://localhost:8000/customerOrderRecords', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(record)
        }).then(() => {
            console.log("New data added");
            setIsLoading(false);
        })

        // Redirect to confirmation page or display a success message
        history.push('/confirmation'); // Update with the correct path
    };

    const { itemAddedToBasket } = useAppState();

    const indexesArray = Object.keys(itemAddedToBasket).map(Number);
    const products = productsArray.filter((product) => indexesArray.includes(product.ID));
    
    const history = useHistory();

    const handleClick1 = () => {
    history.push('/home'); // Replace '/another-page' with the path of the page you want to navigate to
    };


    return (
        <div className="grid-container1">
            <form className='checkout-form' onSubmit={handleSubmit}>
                <h3 className="text-checkout" style={{paddingTop: 40}}>Contact</h3>
                <label>Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder='...'
                    className='input-field-shorter'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                
                <h3 className="text-checkout" style={{paddingTop :20}}>Shipping address </h3>
                <div className='grid-equal'>
                    <div>
                        <label>First Name</label>
                        <input 
                            type="text"
                            id="first-name"
                            name="firstName"
                            placeholder='...'
                            className='input-field-checkout'
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input 
                            type="text" 
                            id="last-name"
                            name="lastName"
                            placeholder='...'
                            className='input-field-checkout'
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <label>Address</label>
                <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    placeholder='...' 
                    className='input-field-checkout'
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <div className='grid-equal'>
                    <div>
                        <label>City</label>
                        <input 
                            type="text" 
                            id="city" 
                            name="city" 
                            placeholder='...' 
                            className='input-field-checkout'
                            required
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Postcode</label>
                        <input 
                            type="text" 
                            id="postcode" 
                            name="postcode" 
                            placeholder='...' 
                            className='input-field-checkout'
                            required
                            value={postcode}
                            onChange={(e) => setPostcode(e.target.value)}
                        />
                    </div>
                </div>
                <label>Phone Number</label>
                <input 
                    type="tel" 
                    id="phone-number" 
                    name="phoneNumber" 
                    placeholder='...'
                    className='input-field-shorter'
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <h3 className="text-checkout" style={{paddingTop :20}}>Payment Method</h3>
                <p className='text-checkout'>Pay With Card</p>
                <div style = {{alignContent: 'center'}}>
                    <label>Name On Card</label>
                    <input 
                        type="text" 
                        id="card-name" 
                        name="cardName" 
                        placeholder='Card holder' 
                        className='input-field-shorter' 
                        required
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                    />
                </div>
                <label>Card Number</label>
                <input 
                    type="number" 
                    id="card-number" 
                    name="cardNumber" 
                    placeholder='...' 
                    className='input-field-shorter'
                    required
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                />
                <label>Expiry date</label>
                <input 
                    type="number" 
                    id="exp-month" 
                    name="expiryMonth" 
                    placeholder='MM' 
                    className='input-field-shorter'
                    required
                    value={expiryMonth}
                    onChange={(e) => setExpiryMonth(e.target.value)}
                />
                <p>/</p>
                <input 
                    type="number" 
                    id="exp-year" 
                    name="expiryYear" 
                    placeholder='YY' 
                    className='input-field-shorter'
                    required
                    value={expiryYear}
                    onChange={(e) => setExpiryYear(e.target.value)}
                />
                <label>Security Code</label>
                <input 
                    type="number" 
                    id="security-code" 
                    name="securityCode" 
                    placeholder='000' 
                    className='input-field-shorter'
                    required
                    value={securityCode}
                    onChange={(e) => setSecurityCode(e.target.value)}
                />
                { !isLoading && <button className='checkout-button'>Confirm Purchase</button> }
                { isLoading && <button className='checkout-button' disabled>Processing...</button> }
            </form>
            <div className='invoice-1'>
                    <InvoiceCopy products={products} quantities={quantities} />
            </div>
        </div>
    );
};

export default CheckoutPage;