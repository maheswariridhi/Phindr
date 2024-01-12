import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import './productPage.css';
import location from '../navbar/location.png';
import productsArray from '../store_page/products';
import categoryImages from '../mapfinder/categoryimage';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function PharmacistProductPage() {
  const [pproduct, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMap, setShowMap] = useState(false); // State to control map visibility

  const toggleMapVisibility = () => {
    setShowMap(!showMap);
  };
  
  let match = useRouteMatch("/pproduct/:ProductId");
  let ProductId = match?.params?.ProductId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const foundProduct = productsArray.find((p) => p.ID === Number(ProductId));

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

    fetchData();
  }, [ProductId]);



  if (loading) {
    return <p>Loading...</p>;
  }

  if (!pproduct) {
    return <p>Product not found</p>;
  }

  const categoryImage = categoryImages[pproduct.CATEGORY];
  
  return (
    <div>
      <div className="grid-top-product">
        <div>
          <img
            src={require(`../store_page/product-inventory/phab_img/${pproduct.ID}.jpg`)}
            alt={pproduct.BRAND}
            className='image'
          />
        </div>

        <div className='middle-product'>
          <h1 className="products-title">{`${pproduct.BRAND} ${pproduct.TYPE}`}</h1>
          <h3 className="text-product">{`£${pproduct.SPRICE.toFixed(2)}`}</h3>
          <p className="text-product">{`Available: ${pproduct.STOCK}`} </p>

          <Link key={pproduct.CATEGORY} to={`/pharmacist-map/${pproduct.CATEGORY}`}>
            <p className="text-product" style={{ paddingTop: 10 }} onClick={toggleMapVisibility}>
              <img src={location} className="location-product" alt="location" />
              Find in store
            </p>
          </Link>
          
        </div>
      </div>

      <hr className="solid" />

      <div className="grid-bottom-product">
        {/* Product Details */}
        <div className="grid-item-product">
          <p className="text-product">Product details:</p>
          {pproduct.DETAILS.split('\n').map((paragraph, index) => (
            <p className="small-text-product" style={{textAlign: 'justify', paddingBottom: '5px'}} key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Ingredients */}
        <div className="grid-item-product">
          <p className="text-product">Ingredients:</p>
          {pproduct.INGREDIENTS.split('\n').map((paragraph, index) => (
            <p className="small-text-product" style={{textAlign: 'justify', paddingBottom: '5px'}} key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Contraindications */}
        <div className="grid-item-product">
          <p className="text-product">Contraindications:</p>
          {pproduct.CONTRAINDICATIONS.split('\n').map((paragraph, index) => (
            <p className="small-text-product" style={{textAlign: 'justify' , paddingBottom: '5px'}} key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Category Map - Conditionally Rendered */}
      {showMap && (
        <div className="map-container">
          <img src={categoryImage} alt="Category Map" className="category-map-image" />
        </div>
      )}
    </div>
  );
}

export default PharmacistProductPage;
