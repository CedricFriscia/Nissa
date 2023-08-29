/// Import scss
import "./index.scss";

// Import img
import vieux from "../../assets/vieux-nice.jpg";

const Nice = () => {
   return (
      <div className='nice'>
         <h1 className='nice__title'>Le vieux nice</h1>
         <section className='nice__old'>
            <p>
               En plein cœur de Nice, le Vieux Nice vous invite à un voyage dans
               le temps. Les ruelles étroites enchevêtrées, les façades aux
               teintes vives, et l'atmosphère animée font de ce quartier une
               véritable fenêtre sur le passé. Le Vieux Nice est une fusion
               captivante de cultures, mêlant l'influence italienne à l'identité
               niçoise.
            </p>
            <p>
               Le Vieux Nice abrite également d'importantes églises et monuments
               historiques. La Cathédrale Sainte-Réparate, avec son intérieur
               baroque orné, est un exemple remarquable de l'architecture
               religieuse locale. Les petites places, comme la Place Rossetti,
               deviennent des centres de vie animés, avec des terrasses de café
               et une atmosphère conviviale.
            </p>
         </section>

         <img className='nice__image' src={vieux} alt='vieux nice' />
      </div>
   );
};

export default Nice;
