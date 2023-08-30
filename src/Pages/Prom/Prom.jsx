// Import component
import Title from "../../Components/Title/Title";

// Import IMG
import prom from "../../assets/prom.jpg";

// Import css
import "./index.scss";

const Prom = () => {
   return (
      <div className='prom'>
         <Title name='La Prom' />
         <section className='prom__container'>
            <p className='prom__presentation'>
               Que ce soit pour une balade romantique au coucher du soleil, une
               séance de jogging revitalisante au lever du jour ou simplement
               contempler la mer, la promenade des Anglais incarne le charme
               intemporel de la Côte d'Azur. Une combinaison parfaite entre la
               nature, la culture et la douceur de vivre qui caractérisent si
               bien cette région.
            </p>
            <img
               className='prom__img'
               src={prom}
               alt='La promenade des anglais'
            />
         </section>
      </div>
   );
};

export default Prom;
