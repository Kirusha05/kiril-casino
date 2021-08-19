import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import Auth from './components/Auth/Auth';

import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';

import WheelPage from './pages/WheelPage';

function App() {
  const authIsActive = useSelector((state) => state.auth.authModalIsActive);

  useEffect(() => {
    document.title = 'CSGO Spark - CSGO Skins Gambling';
  }, []);

  return (
    <Layout>
      {authIsActive && <Auth />}
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/wheel">
          <WheelPage />
        </Route>
        <Route path="/crash">
          <h1>Crash Game</h1>
        </Route>
        <Route path="/dice">
          <h1>Dice Game</h1>
        </Route>
        <Route path="/coinflip">
          <h1>Coinflip Game</h1>
        </Route>
        <Route path="/rewards">
          <h1>Rewards Page</h1>
        </Route>
        <Route path="/affiliates">
          <h1>Affiliates Page</h1>
        </Route>
        <Route path="/terms-of-service">
          <h1>Terms Of Service Page</h1>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
