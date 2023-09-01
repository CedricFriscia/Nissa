// Import css
import "./index.scss";

// Import IMG
import logo from "../../assets/nissart.png";

const Nav = () => {
   return (
      <div className='navbar'>
         <h1 className='navbar__logo'>
            <img src={logo} alt='Logo' />
         </h1>
      </div>
   );
};

export default Nav;
