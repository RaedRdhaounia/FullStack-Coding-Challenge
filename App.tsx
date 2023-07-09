// ==============================|| App module ||============================== //

// ==============================|| IMPORTS
import React from 'react';

//-- navigation component imports
import {AppNavigator} from './src/navigation';

//-- redux provider imports
import {Provider} from 'react-redux';

//-- store imports
import store from './src/redux/store';
import {FavoritesProvider} from './src/hooks/';

// ==============================|| App component ||============================== //

/**
 * main component for the our app
 * @name App
 * @returns {JSX.Element}
 * @example
 * registerRootComponent(App);
 */
export default function App(): JSX.Element {
  return (
    <FavoritesProvider>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </FavoritesProvider>
  );
}
