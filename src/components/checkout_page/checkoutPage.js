import './checkoutPage.css';

const CheckoutPage = () => {
    return (
        <div className='grid-container'>
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


            <div className='grid-basket'>
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
    )
}

export default CheckoutPage;