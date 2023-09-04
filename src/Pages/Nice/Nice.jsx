/// Import scss
import "./index.scss";

// Import img
import vieux from "../../assets/vieux-nice.jpg";

// Import components
import Title from "../../Components/Title/Title";

const Nice = () => {
   return (
      <div className='nice'>
         <Title name='Le vieux nice' />
         <section className='nice__old'>
            <p>
               En plein cœur de Nice, le Vieux Nice vous invite à un voyage dans
               le temps. Les ruelles étroites enchevêtrées, les façades aux
               teintes vives, et l'atmosphère animée font de ce quartier une
               véritable fenêtre sur le passé. Le Vieux Nice est une fusion
               captivante de cultures, mêlant l'influence italienne à l'identité
               niçoise.
            </p>
         </section>

         <img className='nice__image' src={vieux} alt='vieux nice' />
      </div>
   );
};

export default Nice;
