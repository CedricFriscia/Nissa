// Import component
import Title from "../../Components/Title/Title";

// Import css
import "./index.scss";

// Import IMG
import logo from "../../assets/ogcnice.png";

const Gym = () => {
   return (
      <div className='gym'>
         <Title name='OGCNICE' />
         <section className='gym__container'>
            <img className='gym__logo' src={logo} alt="Le logo de l'ogcnice" />
            <p>
               Une passion en rouge et noir au cœur de la Côte d'Azur. Ce club
               de football historique incarne l'esprit sportif et l'engouement
               des Niçois pour le jeu beau et rythmé.
            </p>
         </section>
      </div>
   );
};
