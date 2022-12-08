import React from 'react';
import { Provider } from 'react-redux';
import store from './store'

// Create our car context using React.CreateContext()
export const CarContext = React.createContext();

// Creating our car provider. Accepts an argument of `props`
export default function CarProvider(props) {
 

  // The provider component will wrap all other components inside of it that need access to our global state
  return <Provider {...props} store={store}/>;
}
