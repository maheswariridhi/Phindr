import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import productsArray from '../store_page/products'; // Import your products array

import A from './A.png';
import B from './B.png';
import C from './C.png';
import D from './D.png';
import E from './E.png';
import F from './F.png';

const categoryImages = {
  'Cold and Flu': F,
  'Skincare': B,
  'First Aid': A,
  'Headaches and pain relief': C,
  'Digestion': D,
  'Allergy': E,
};



const CategoryMapImage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { category: urlCategory } = useParams();
  const match = useRouteMatch("/pharmacist-map/:ProductCategory");
  const ProductCategory = match?.params?.ProductCategory;



  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming you have a unique identifier like ID for products
        const foundProduct = productsArray.find((p) => p.CATEGORY === ProductCategory);

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.error(`Product with category ${ProductCategory} not found`);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [ProductCategory]);


  console.log('ProductCategory:', ProductCategory);

  let image = null;

  if (ProductCategory in categoryImages) {
    // Use the categoryImages object for mapping
    image = categoryImages[ProductCategory];
  } else {
    // If the category is not found, set image to null or a default image
    image = null;
  }

  return (
    <div>
      <h2>{`Map for ${ProductCategory}`}</h2>
      {image && <img src={image} alt="image" />}
    </div>
  );
}; 

export default CategoryMapImage;