import './App.css'
import Page1 from './Pages/Page1/Page1'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Page2 from './Pages/Page2/Page2';
import React, { createContext, useState } from 'react';

//Theme Declaration
const LightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

// declare datatype of context API
export type DataContextState = {
  dataValue: boolean
  setDataValue: (status: boolean) => void;
};

//default value of context API
const contextDefaultValues: DataContextState = {
  dataValue: false,
  setDataValue: () => {}
};

export const DataContext = React.createContext<DataContextState>(contextDefaultValues)    //context API

function App() {
  const [dataValue,setDataValue] = useState<boolean>(contextDefaultValues.dataValue);   //Context API state initialization
  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
        <div className="App">
          <DataContext.Provider value={{dataValue,setDataValue}}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Page1></Page1>}></Route>
                <Route path='/page2' element={<Page2></Page2>}></Route>
              </Routes>
            </BrowserRouter>
          </DataContext.Provider>
        </div>
    </ThemeProvider>
  )
}

export default App
