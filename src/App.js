import React from 'react';
import { DisplayContextProvider } from './store/display-context';
import MainContainer from './components/MainContainer';



function App() {

  
 

  return (
    <DisplayContextProvider>
      <MainContainer />
    </DisplayContextProvider>
  );
}





export default App;
