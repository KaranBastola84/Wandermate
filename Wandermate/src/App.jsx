import './App.css';
import Login from "./assets/Login";
  import { BrowserRouter , Routes ,Route} from "react-router-dom";
import SignUpp from "./SignUpp";
import SetupPage from "./SetupPage";
import Hotels from "./Hotels";
import Landing from "./Landing";
import Destination from './Destination';
import HomeNav from './HomeNav';
import TopHotels from './TopHotels';
import Home from './Home';
import TopTravelPackage from './TopTravelPackage';
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SetupPage />} />
        <Route path="/SignUpp" element={<Login />} />
        <Route path="/Login" element={<SignUpp />} />
        <Route path="/Hotels" element={<Hotels />} />
        <Route path="/Hotels/:id" element={<Hotels />} />
        <Route path="/HomeNav" element={<HomeNav />} /> 
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/TopHotels" element={<TopHotels/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/TopHotels" element={<TopHotels />} />
        <Route path="/TopTravelPackage" element={<TopTravelPackage/>} />
      </Routes>
      </BrowserRouter> 
        
    </>
  )
}

export default App;