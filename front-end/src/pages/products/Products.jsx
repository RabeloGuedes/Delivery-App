import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import NavBar from '../../components/navbar/NavBar';
import CardProduct from '../../components/card-product/CardProduct';
import MainContext from '../../context/MainContext';
import { getAllProducts } from '../../services/APIs';
import StyledProducts from './StyledProducts';

const populateProducts = (products, setCart) => products.map((product) => (
  <CardProduct
    key={ product.id }
    thumbnail={ product.url_image }
    id={ product.id }
    productName={ product.name }
    price={ product.price }
    setCart={ setCart }
  />
));

export default function Products() {
  const {
    products,
    setProducts,
  } = useContext(MainContext);
  const navigate = useNavigate();

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const totalPrice = cart.reduce((acc, curr) => Number(acc) + Number(curr.subTotal), 0);

  useEffect(() => {
    async function getitems() {
      const { data } = await getAllProducts();
      console.log('result', data);
      setProducts(data);
    }
    getitems();
  }, []);

  return (
    <StyledProducts theme="--light-text">
      <NavBar />
      <div className="products-container">
        { populateProducts(products, setCart) }
      </div>
      <button
        type="button"
        onClick={ () => navigate('/customer/checkout') }
        // disabled={ cart.length === 0 }
        disabled={ totalPrice === 0 }
        data-testid="customer_products__button-cart"
      >
        <h3
          data-testid="customer_products__checkout-bottom-value"
        >
          <ShoppingCart size={ 32 } />
          {
            `R$: ${(Number(totalPrice)).toFixed(2).replace('.', ',')}`
          }
        </h3>
      </button>
    </StyledProducts>
  );
}
