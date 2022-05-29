import { useContext } from 'react';
import ProductCard from '../../components/product-card';

import { ProductsContext } from '../../context/products.context';

import './shop.styles.sass';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className='products-container'>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
