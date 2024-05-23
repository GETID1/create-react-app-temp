import { useEffect, useState } from 'react';
import axios from 'axios';
import './products.css';
import { FaRegHeart } from "react-icons/fa";
import Star from './Star';

function trimTitle(title, maxLength = 23) {
  if (title.length > maxLength) {
    return title.slice(0, maxLength - 3) + '...';
  }
  return title;
}

function Products() {
  const starsArray = Array.from({ length: 5 });
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log('Error');
      }
    }
    fetchProducts();
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => {
        if (activeCategory === 'clothing') {
          return product.category.includes('clothing');
        }
        return product.category === activeCategory;
      });

  return (
    <section className="products">
      <div className="container">
        <div className='flex sb products-title'>
          <h2>Products</h2>
          <div className='filters'>
            <button 
              onClick={() => handleCategoryClick('all')} 
              className={activeCategory === 'all' ? 'active' : ''}
            >
              All
            </button>
            <button 
              onClick={() => handleCategoryClick('clothing')} 
              className={activeCategory === 'clothing' ? 'active' : ''}
            >
              Clothing
            </button>
            <button 
              onClick={() => handleCategoryClick('electronics')} 
              className={activeCategory === 'electronics' ? 'active' : ''}
            >
              Electronics
            </button>
            <button 
              onClick={() => handleCategoryClick('jewelery')} 
              className={activeCategory === 'jewelery' ? 'active' : ''}
            >
              Jewelery
            </button>
          </div>
        </div>
        <div className='products-grid'>
          {filteredProducts.map(product => 
            <div className='product center' key={product.id}>
              <div className='fav center'>
                <FaRegHeart/>
              </div>
              <figure>
                <img alt={product.image} src={product.image}/>
              </figure>
              <div className='product-info'>
                <h3 className='flex sb'>
                  {trimTitle(product.title)}
                  <span>{`$${product.price}`}</span>
                </h3>
                <p>{product.category}</p>
                <div className='flex'>
                  {starsArray.map((_, index) => (
                    <Star 
                      key={index} 
                      gold={index < product.rating.rate} 
                    />
                  ))}
                  <p>{`(${product.rating.count})`}</p>
                </div>
                <button className='add-to-cart'>
                  Add to Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Products;