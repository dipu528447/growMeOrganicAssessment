import { useState } from 'react'
import './App.css'
import Page1 from './Pages/Page1/Page1'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Page2 from './Pages/Page2/Page2';

const LightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});
function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Page1></Page1>}></Route>
            <Route path='/page2' element={<Page2></Page2>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
