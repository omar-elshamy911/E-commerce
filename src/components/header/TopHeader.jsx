import  { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../img/download-1.png'
// import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import "./header.css";
import { CartContext } from "../context/CartContext";


import SerachBox from "./SerachBox";

function TopHeader() {
  const { cartItems, favorites } = useContext(CartContext);

  return (
    <div className="top_header">
      <div className="container">
        <Link className="logo" to="/">
          {" "}
          <img src={logo} alt="Logo" />
        </Link>

        <SerachBox />

        <div className="header_icons">
          <div className="icon">
            <Link to="/favorites">
              <FaRegHeart />
              <span className="count">{favorites.length}</span>
            </Link>
          </div>

          <div className="icon">
            <Link to="/cart">
              <TiShoppingCart />
              <span className="count">{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;





// import { Link } from 'react-router-dom' 
// import logo from '../../img/download.png'
// import { FaSearch } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
// import { TiShoppingCart } from "react-icons/ti";
// import './header.css'


// function TopHeader() {
//   return (
//     <div className="top_header">
//       <div className="container">
        
//         <Link className='logo' to="/">
//            <img src={logo} alt="logo" />
//         </Link>
//         <form action="" className='search-box'>
//           <input type="text" name='search' id='search' placeholder='Search for products...' />
//             <button type='submit'><FaSearch /></button>
//         </form>

//         <div className="header-icons">
//           <div className="icons"><FaRegHeart />
//         <samp className='count'>0</samp>
//           </div>

//           <div className="icons"><TiShoppingCart />
//         <samp className='count'>0</samp>
//           </div>


         
//         </div>

//       </div>
//     </div>
//   )
// }

// export default TopHeader

