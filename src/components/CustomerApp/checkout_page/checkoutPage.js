import InvoiceCopy from '../store_page/basket_components/invoiceCopy';
import './checkoutPage.css';
import React, { useContext, useState } from 'react';
import { SalesContext } from '../../SalesContext';
import productsArray from '../store_page/products';
import { useAppState } from '../store_page/AppStateContext';
import { useHistory } from 'react-router-dom';

const CheckoutPage = () => {
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
      const handleConfirmPurchase = () => {
          // Assuming you have a way to calculate the total cost of the basket
          const totalCost = calculateTotalCost(); // This function should be implemented
  
          // Record the transaction
          recordSale({
              date: new Date(),
              totalCost: totalCost
          });
  
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
                    
                    <button className='checkout-button' onClick={handleConfirmPurchase}>
                Confirm Purchase
                </button>
                </div>
  );
};

export default CheckoutPage;