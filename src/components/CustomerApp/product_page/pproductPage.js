import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './productPage.css';
import location from '../navbar/location.png';
import productsArray from '../store_page/products';
import { useRouteMatch } from 'react-router-dom';
import categoryImages from '../mapfinder/categoryimage';

function PharmacistProductPage  () {
  
  const [pproduct, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  let match = useRouteMatch("/pproduct/:ProductId");
  let ProductId = match?.params?.ProductId;

  useEffect(() => {
    console.log('ProductId:', ProductId); // Check the value of ProductId

    const foundProduct = productsArray.find((pproduct) => pproduct.ID === Number(ProductId));
    console.log('foundProduct:', foundProduct); // Check the value of foundProduct
   
    // Simulate an asynchronous API call
    const fetchData = async () => {
      try {
       
        const foundProduct = productsArray.find((pproduct) => pproduct.ID === Number(ProductId));

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.error(`Product with ID ${ProductId} not found`);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    };

    fetchData(); // Invoke the function to fetch data
  }, [ProductId]);

  if (loading) {
    return <p>Loading...</p>; // or a loading spinner
  }

  if (!pproduct) {
    return <p>Product not found</p>; // or redirect to a 404 page
  }

  const categoryImage = categoryImages[pproduct.CATEGORY]; // Get category image

  return (
    <div>
      <div className="grid-top-product">
        {/* Brand Info on the Left */}
        <div>
          <div>
          <img
                src={require(`../store_page/product-inventory/phab_img/${pproduct.ID}.jpg`)}
                alt={pproduct.BRAND}
                className='image'
                
              />
          <img src={categoryImage} alt={pproduct.CATEGORY} className="category-image" />
          </div>
        </div>

        <div className='middle-product'>
        <h1 className="products-title">{`${pproduct.BRAND} ${pproduct.TYPE}`}</h1>
          <h3 className="text-product">{`£${pproduct.SPRICE.toFixed(2)}`}</h3>
          <p className="text-product">{`Available: ${pproduct.STOCK}`} </p>

          <p className="text-product" style={{paddingTop: 10}}>
            <img src={location} className="location-product" alt="location" />
            Find in store 
          </p>
          
          
        </div>
      </div>

      <hr className="solid" />


      <div class="grid-bottom-product">
        <div class="grid-item-product">
          <p className="text-product">Product details:</p>
          {pproduct.DETAILS.split('\n').map((paragraph, index) => (
          <p className="small-text-product"style ={{textAlign: 'justify', paddingBottom: '5px'}} key={index}>{paragraph}</p>
        ))}
        </div>

        <div class="grid-item-product">
          <p className="text-product">Ingredients:</p>
          {pproduct.INGREDIENTS.split('\n').map((paragraph, index) => (
          <p className="small-text-product"style ={{textAlign: 'justify', paddingBottom: '5px'}} key={index}>{paragraph}</p>
        ))}
        </div>

        <div class="grid-item-product">
          <p className="text-product">Contraindications:</p>
          {pproduct.CONTRAINDICATIONS.split('\n').map((paragraph, index) => (
          <p className="small-text-product"style ={{textAlign: 'justify' , paddingBottom: '5px'}} key={index}>{paragraph}</p>
        ))}
        </div>  
      </div>

    </div>
   
  
  );
};

export default PharmacistProductPage;