import Standout from "./components/Standout";
import Imperess from "./components/Impession";
import Customers from "./components/Customers";
import Products from "./components/Products";
import Business from "./components/Business";
import Slider from "./components/Slider";
import Show from "./components/Show";
import Questions from "./components/Questions";
/* eslint-disable react/jsx-pascal-case */

export default function App() {
    return(
      <div>
        <Standout/>
        <Imperess/>
        <Customers/>    
        <Products/>
        <Business/>
              <Slider/>  
        <Show/>
        <Questions/>
      </div>
    )
}