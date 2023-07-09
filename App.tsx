// ==============================|| App module ||============================== //

// ==============================|| IMPORTS
import React from 'react';

//-- navigation component imports
import {AppNavigator} from './src/navigation';

//-- redux provider imports
import {Provider} from 'react-redux';

//-- store imports
import store from './src/redux/store';

//-- import Provider
import {FavoritesProvider} from './src/hooks/';

// ==============================|| App component ||============================== //

/**
 * as the conception of the redux-persist we used a context power by AsyncStorage to save data
 * @name App
 * @provier FavoritesProvider
 * @stateManagment Provider {redux}
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
