import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import theme from './ui/theme';
import { serviceOptions, routes } from '../utils/config';
import Header from './ui/header/Header';
import Footer from './ui/footer/Footer';

function App() {
  const [tabValue, setTabValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const optionExists = serviceOptions.findIndex(
      option => option.path === window.location.pathname
    );

    if (optionExists) {
      setTabValue(1);
      setSelectedIndex(optionExists);
    }
    routes.forEach((tab, index) => {
      if (window.location.pathname === tab.path && tabValue !== index) {
        setTabValue(index);
      }
    });

    return () => {
      setTabValue(0);
    };

    // eslint-disable-next-line
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          tabValue={tabValue}
          selectedIndex={selectedIndex}
          setTabValue={setTabValue}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path='/'
            component={() => <div style={{ minHeight: '100vh' }}>Home</div>}
          />
          <Route
            exact
            path='/services'
            component={() => <div style={{ minHeight: '100vh' }}>Services</div>}
          />
          <Route
            exact
            path='/custom-software'
            component={() => (
              <div style={{ minHeight: '100vh' }}>Custom software</div>
            )}
          />
          <Route
            exact
            path='/mobile-apps'
            component={() => (
              <div style={{ minHeight: '100vh' }}>Mobile apps</div>
            )}
          />
          <Route
            exact
            path='/websites'
            component={() => <div style={{ minHeight: '100vh' }}>Websites</div>}
          />
          <Route
            exact
            path='/revolutions'
            component={() => (
              <div style={{ minHeight: '100vh' }}>Revolutions</div>
            )}
          />
          <Route
            exact
            path='/about'
            component={() => <div style={{ minHeight: '100vh' }}>About</div>}
          />
          <Route
            exact
            path='/contact'
            component={() => <div style={{ minHeight: '100vh' }}>Contact</div>}
          />
          <Route
            exact
            path='/estimate'
            component={() => <div style={{ minHeight: '100vh' }}>Estimate</div>}
          />
          <Route
            render={() => <div style={{ minHeight: '100vh' }}>Not found</div>}
          />
        </Switch>
        <Footer
          tabValue={tabValue}
          selectedIndex={selectedIndex}
          setTabValue={setTabValue}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
