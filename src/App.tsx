import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { RootState } from './libs/types';

import Notification from './components/UI/Notification';
import { useAppDispatch, useAppSelector } from './hooks/useTypedSelector';
// import { cartActions } from './store/slices/cart.store';
import { fetchCartData, sendCartData } from './store/slices/cart.store/actions';
import { uiActions } from './store/slices/ui.store';

// let isInitial = true;

function App() {
  const dispatch = useAppDispatch();
  const showCart = useSelector((state: RootState) => state.ui.cartIsVisible);
  // const cart = useSelector((state: RootState) => state.cart);
  const cart = useAppSelector(state => state.cart);
  const cartUpdated = useAppSelector(state => state.ui.isCartUpdated);

  const notification = useSelector((state: RootState) => state.ui.notification);

  // dispatch(cartActions.replaceCart(cart));

  // TO GET THE INITIAL DATA FROM BACKEND

  useEffect(() => {
    const initialDispatch = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Loading...',
          message: 'Connecting to server!',
        })
      );

      try {
        await dispatch(fetchCartData());
        dispatch(
          uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Cart data received successfully!',
          })
        );
      } catch (error) {
        throw new Error('Cannot fetch!');
      }
    };

    initialDispatch();

    // Return a cleanup function that does nothing
    return () => {
      // This function intentionally left empty
    };
  }, [dispatch]);

  // TO UPDATE BACKEND

  useEffect(() => {
    if (cartUpdated) {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Loading...',
          message: 'Connecting to server!',
        })
      );

      try {
        dispatch(sendCartData(cart));
        dispatch(uiActions.setCartUpdated(false));
        dispatch(
          uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent cart data successfully!',
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending cart data failed!',
          })
        );
      }
    }
  }, [cart, cartUpdated, dispatch]);

  // useEffect(() => {
  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }
  //   const dispatchData = async () => {
  //     // await dispatch(sendCartData(cart));
  //   };

  //   dispatchData();
  // }, [cart, dispatch]);

  console.log('cartState(App)', cart);
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
