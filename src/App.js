
import {
  BrowserRouter ,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import List from './pages/List/list'
import New from './pages/New/new'
import Single from './pages/Single/single'
import Register from './pages/Register/register'
import { productInputs, userInputs } from "./formSource";
import './style/dark.scss'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {

const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" :'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='users'>
               <Route index element ={<List/>}/>
               <Route path="login" element={<Login/>} />
               <Route path="new" element={<New input={userInputs} title='Add New User'/>}/>
               <Route path=":userId" element={<Single/>} />
               <Route path="register" element={<Register/>} />
          </Route>
          <Route path='products'>
               <Route index element ={<List/>}/>
               <Route path="login" element={<Login/>} />
               <Route path="new" element={<New input={productInputs} title='Add New Product'/>}/>
               <Route path=":producstId" element={<Single/>} />
               <Route path="register" element={<Register/>} />
          </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

