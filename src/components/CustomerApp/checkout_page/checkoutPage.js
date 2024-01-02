import InvoiceCopy from '../store_page/basket_components/invoiceCopy';
import './checkoutPage.css';
import React, { useEffect, useState } from 'react';

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

      const handleClick1 = () => {
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
                        <form className='checkout-form'>
                            <input type="text" id="first-name" name="first-email" placeholder='...' className='input-field-checkout' />
                        </form>
                    </div>
                    <div>
                        <p className="text-checkout">Last Name</p>
                        <form className='checkout-form'>
                            <input type="text" id="last-name" name="last-name" placeholder='...' className='input-field-checkout'/>
                        </form>
                    </div>
                </div>

                <p className="text-checkout">Address </p>
                <form className='checkout-form'>
                    <input type="text" id="address" name="address" placeholder='...' className='input-field-checkout'/>
                </form>

                <div className='grid-equal'>
                    <div>
                        <p className="text-checkout">City</p>
                        <form className='checkout-form'>
                            <input type="text" id="city" name="city" placeholder='...' className='input-field-checkout'/>
                        </form>
                    </div>
                    <div>
                        <p className="text-checkout">Postcode</p>
                        <form className='checkout-form'>
                            <input type="text" id="postcode" name="postcode" placeholder='...' className='input-field-checkout'/>
                        </form>
                    </div>
                </div>

                <p className="text-checkout">Phone Number </p>
                <form className='checkout-form'>
                    <input type="text" id="phone-number" name="phone-number" placeholder='...' className='input-field-shorter'/>
                </form>
                
                <h3 className="text-checkout" style={{paddingTop :20}}>Payment Method </h3>
                <p className='text-checkout'>Pay With Card</p>

                <div style = {{alignContent: 'center'}}>
                    <p className="text-checkout">Name On Card </p>
                    <form className='checkout-form'>
                        <input type="text" id="card-name" name="card-name" placeholder='Card holder' className='input-field-shorter' />
                    </form>
                </div>
                    <p className="text-checkout">Card Number </p>
                    <form className='checkout-form'>
                        <input type="number" id="card-number" name="card-number" placeholder='...' className='input-field-shorter'/>
                    </form>
                    
                    <p className="text-checkout">Expiry date </p>
                    <form className='checkout-form'>
                        <input type="number" id="address" name="address" placeholder='...' className='input-field-shorter'/>
                    </form>
                    <p className="text-checkout">Security Code </p>
                    <form className='checkout-form'>
                        <input type="number" id="" name="address" placeholder='...' className='input-field-shorter'/>
                    </form>
          </div>
      
          {/* <div className='center-items'>
            <button className="button-checkout">Confirm Purchase</button>    
          </div> */}
      
          <div className='invoice-1'>
            <InvoiceCopy products={products} quantities={quantities} />
          </div>
          
          <button className='checkout-button' onClick={handleClick1}>
            Checkout and go back to Home
          </button>
        </div>
      )
}

export default CheckoutPage;