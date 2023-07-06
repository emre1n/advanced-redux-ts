import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { RootState } from './libs/types';

import Notification from './components/UI/Notification';
import { useAppDispatch, useAppSelector } from './hooks/useTypedSelector';
import { cartActions } from './store/slices/cart.store';
import { fetchCartData } from './store/slices/cart.store/actions';

// let isInitial = true;

function App() {
  const dispatch = useAppDispatch();
  const showCart = useSelector((state: RootState) => state.ui.cartIsVisible);
  // const cart = useSelector((state: RootState) => state.cart);
  const cart = useAppSelector(state => state.cart);

  const notification = useSelector((state: RootState) => state.ui.notification);

  useEffect(() => {
    const getDataFromDB = async () => {
      const data = await dispatch(fetchCartData());
      console.log('useEffectData', data.payload);
      return data.payload;
    };
    const dataFromDB = getDataFromDB();
    dispatch(cartActions.replaceCart(dataFromDB));
  }, [dispatch]);

  // useEffect(() => {
  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }
  //   const dispatchData = async () => {
  //     await dispatch(sendCartData(cart));
  //   };
  //   dispatchData();
  // }, [cart, dispatch]);

  console.log('cart', cart);
  console.log('notification', notification);

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
