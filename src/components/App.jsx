import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import theme from './ui/theme';
import { serviceOptions, routes } from '../utils/config';
import Header from './ui/header/Header';
import Footer from './ui/footer/Footer';
import LandingPage from './ui/pages/landing-page/LandingPage';
import ServicePage from './ui/pages/service-page/ServicePage';
import CustomSoftware from './ui/pages/service-page/CustomSoftware';
import MobileApps from './ui/pages/service-page/MobileApps';
import Websites from './ui/pages/service-page/Websites';
import RevolutionsPage from './ui/pages/revolutions-page/RevolutionsPage';
import AboutPage from './ui/pages/about-page/About';
import ContactPage from './ui/pages/contact-page/Contact';
import EstimatePage from './ui/pages/estimate-page/Estimate';

function App() {
  const [tabValue, setTabValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isEstimatePage, setIsEstimatePage] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/estimate') {
      setIsEstimatePage(true);
    } else {
      const optionExists = serviceOptions.findIndex(
        option => option.path === window.location.pathname
      );

      if (optionExists >= 0) {
        setTabValue(1);
        setSelectedIndex(optionExists);
      }
      routes.forEach((tab, index) => {
        if (window.location.pathname === tab.path && tabValue !== index) {
          setTabValue(index);
        }
      });
    }

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
          isEstimatePage={isEstimatePage}
        />
        <Switch>
          <Route
            exact
            path='/'
            component={() => <LandingPage setTabValue={setTabValue} />}
          />
          <Route
            exact
            path='/services'
            component={() => (
              <ServicePage
                setTabValue={setTabValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path='/custom-software'
            component={() => (
              <CustomSoftware
                setTabValue={setTabValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path='/mobile-apps'
            component={() => (
              <MobileApps
                setTabValue={setTabValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path='/websites'
            component={() => (
              <Websites
                setTabValue={setTabValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path='/revolutions'
            component={() => <RevolutionsPage setTabValue={setTabValue} />}
          />
          <Route
            exact
            path='/about'
            component={() => <AboutPage setTabValue={setTabValue} />}
          />
          <Route
            exact
            path='/contact'
            component={() => <ContactPage setTabValue={setTabValue} />}
          />
          <Route
            exact
            path='/estimate'
            component={() => <EstimatePage setTabValue={setTabValue} />}
          />
          <Route
            render={() => <div style={{ minHeight: '100vh' }}>Not found</div>}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
