import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectMenu } from './features/menu/menuSlice';
import Header from './components/layout/header/Header';
import Menu from './components/layout/menu/Menu';
import { initData } from './features/search/searchSlice';
import Loader from './components/utils/Loader';
// import Disclaimer from './components/utils/Disclaimer';
// import 'swagger-ui-react/swagger-ui.css';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const CentralBanks = lazy(() => import('./pages/CentralBanks'));
const FiatCurrencies = lazy(() => import('./pages/FiatCurrencies'));
const FiatCurrency = lazy(() => import('./pages/FiatCurrency'));
// const Registry = lazy(() => import('./pages/Registry'));
const Cryptocurrencies = lazy(() => import('./pages/Cryptocurrencies'));
const Cryptocurrency = lazy(() => import('./pages/Cryptocurrency'));
const Exchanges = lazy(() => import('./pages/Exchanges'));
const Exchange = lazy(() => import('./pages/Exchange'));
const StockMarket = lazy(() => import('./pages/StockMarket'));

function App() {
  const menuOpen = useSelector(selectMenu);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initData());
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {/* <Disclaimer /> */}
      <Header />
      <Menu />
      <main className='main-content'>
        <div
          className='main-spacing-left'
          style={{ display: menuOpen ? 'block' : 'none' }}
        />
        <div className={`main-content-body${menuOpen ? ' justify-left' : ''}`}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/central-banks' element={<CentralBanks />} />
              <Route
                exact
                path='/fiat-currencies'
                element={<FiatCurrencies />}
              />
              <Route
                exact
                path='/fiat-currencies/:id'
                element={<FiatCurrency />}
              />
              <Route exact path='/registry' element={<Navigate to='/' />} />
              <Route
                exact
                path='/cryptocurrencies'
                element={<Cryptocurrencies />}
              />
              <Route
                exact
                path='/cryptocurrencies/:id'
                element={<Cryptocurrency />}
              />
              <Route exact path='/exchanges' element={<Exchanges />} />
              <Route exact path='/exchanges/:id' element={<Exchange />} />
              <Route exact path='/stock-market' element={<StockMarket />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </Suspense>
        </div>
      </main>
    </>
  );
}

export default App;
