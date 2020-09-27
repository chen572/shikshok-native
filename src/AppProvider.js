import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import Router from './routes';
import store from './store/store';

function AppProvider() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <Router />
      </PaperProvider>
    </StoreProvider>
  );
}

export default AppProvider;
