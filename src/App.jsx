// Import components
import Landing from "./Pages/Landing/Landing";
import Nice from "./Pages/Nice/Nice";
import Prom from "./Pages/Prom/Prom";
import Gym from "./Pages/Gym/Gym";
import Galerie from "./Pages/Galerie/Galerie";

function App() {
   return (
      <div className='App'>
         <Landing />
         <Galerie />
         <Nice />
         <Prom />
         <Gym />
      </div>
   );
}

export default App;
