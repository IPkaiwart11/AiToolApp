
import './App.css'
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  useLocation,
  Routes
} from "react-router-dom";
import Home from './pages/home/Home';
import Newtool from './pages/newTool/NewTool';
function App() {

  return (
    <>
     <Router>
    {/* <Switch> */}
    <Routes  path="/">
      <Route index element={<Home/>}>
    </Route>
    </Routes> 
    <Routes  >
      <Route path="new"  element={<Newtool/>}>
    </Route>
    </Routes> 
    {/* </Switch> */}
  </Router>
    </>
  )
}

export default App
