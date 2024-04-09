import style from './App.module.css';
import { useEffect, useState } from 'react';
import getProducts from '../../Api/Products';
import Product from '../Product/Product';

export default function App() {

  const [products, setProducts] = useState([]);
  useEffect( () => {
    async function get() {
      setProducts(await getProducts())
    }
    get()
  }, [])


  return (
    <div className={style.app}>
      <div className={style.header}></div>
      <div className={style.container}>
        {products.map((product, index) => <Product key={index} product={product} />)}
      </div>
    </div>
  );
}
