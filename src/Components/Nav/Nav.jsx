import "./index.scss";
import logo from "../../assets/nissart.png";

const Nav = () => {
   return (
      <div className='navbar'>
         <h1 className='navbar__logo'>
            <img src={logo} alt='Logo' />
         </h1>

         <nav className='navbar__buttons'>
            <ul className='navbar__list'>
               <li className='navbar__item'>
                  <a href='#accueil'>Accueil</a>
               </li>
               <li className='navbar__item'>
                  <a href='#presentation'>Présentation</a>
               </li>
               <li className='navbar__item'>
                  <a href='#galerie'>Galerie</a>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default Nav;
