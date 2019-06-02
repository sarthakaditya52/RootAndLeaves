/*
IMPORT'S
 */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { appTheme } from 'common/src/theme/app';
import { GlobalStyle, AppWrapper } from 'common/src/containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from 'common/src/containers/App/Navbar';
import Footer from 'common/src/containers/App/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FAQ from './faq';
import About from './about';
import PopC from './popc';
import Blog from './blog';
import Home from './home';
import Policy from './policy';
import Career from './career';

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

export default () => {
  const size = process.browser && useWindowSize();
  return (
    <Router>
      <ThemeProvider theme={appTheme}>
        <>
          <Head>
            <title>Roots And Leaves</title>
            <meta name="Description" content="React next landing page" />
            <meta name="theme-color" content="#ec5555" />
            <link
              href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"
              rel="stylesheet"
            />
          </Head>

          <ResetCSS />
          <GlobalStyle />

          <AppWrapper>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
              <DrawerProvider>
                <Navbar />
              </DrawerProvider>
            </Sticky>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/about" component={About} />
            <Route exact path="/popc" component={PopC} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/policy" component={Policy} />
            <Route exact path="/career" component={Career} />
            <Footer />
          </AppWrapper>
        </>
      </ThemeProvider>
    </Router>
  );
};
