import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { RootState } from './libs/types';

import Notification from './components/UI/Notification';
import { useAppDispatch, useAppSelector } from './hooks/useTypedSelector';
import { sendCartData } from './store/slices/cart.store';

let isInitial = true;

function App() {
  const dispatch = useAppDispatch();
  const showCart = useSelector((state: RootState) => state.ui.cartIsVisible);
  // const cart = useSelector((state: RootState) => state.cart);
  const cart = useAppSelector(state => state.cart);
  const notification = useSelector((state: RootState) => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('http://localhost:5000/cart/', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     const data = await response.json();
  //     console.log('response', data);
  //   };
  //   fetchData();
  // }, [cart]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
