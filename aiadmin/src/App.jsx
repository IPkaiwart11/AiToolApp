
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/home/Home';
import Newtool from './pages/newTool/NewTool';
import SignIn from './pages/signin/SignIn'
import SignUp from './pages/Signup/SignUp'
function App() {

  return (
    <>
     <Router>
    <Routes  path="/">
      <Route index element={<Home/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="new"  element={<Newtool/>}/>
    </Routes> 
  </Router>
    </>
  )
}

export default App
