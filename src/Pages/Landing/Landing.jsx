// Import Component
import Nav from "../../Components/Nav/Nav";

// Import MUI
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

// Import scss
import "./index.scss";

const Landing = () => {
   return (
      <div className='landing'>
         <Nav />
         <section className='landing__introduction'>
            <aside className='landing__aside'>Une ville magnifique</aside>
            <h2 className='landing__title'>
               <span className='landing__quote'>"</span> Entre le bleu de la
               Méditerranée et les sommets des montagnes, Nice vous réserve une
               expérience imprégnée d'authenticité italienne{" "}
               <span className='landing__quote'>"</span>
            </h2>
         </section>
         <footer className='landing__footer'>
            <p>Découvre Nice</p>
            <KeyboardDoubleArrowDownIcon style={{ color: "red" }} />
         </footer>
      </div>
   );
};

export default Landing;
