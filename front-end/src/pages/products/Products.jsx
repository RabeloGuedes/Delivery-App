import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';
import CardProduct from '../../components/card-product/CardProduct';
import MainContext from '../../context/MainContext';
import { getAllProducts } from '../../services/APIs';

const populateProducts = (products, setCart) => products.map((product) => (
  <div
    key={ product.id }
  >
    <CardProduct
      thumbnail={ product.url_image }
      id={ product.id }
      productName={ product.name }
      price={ product.price }
      setCart={ setCart }
    />
  </div>
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
    <div>
      <NavBar />
      <div className="">
        { populateProducts(products, setCart) }
      </div>
      <h3
        data-testid="customer_products__checkout-bottom-value"
      >
        {
          (Number(totalPrice)).toFixed(2)
        }
      </h3>
      <button
        type="button"
        onClick={ () => navigate('/customer/checkout') }
      >
        checkout
      </button>
    </div>
  );
}
