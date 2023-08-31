// Import css
import "./index.scss";

// Import component
import Title from "../../Components/Title/Title";

const App = () => {
   return (
      <div className='galerie'>
         <Title name='Nissa' />
         <div className='container'>
            <div
               className='box one'
               style={{
                  "--img":
                     "url(https://images.unsplash.com/photo-1503696967350-ad1874122058?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80)",
               }}
               data-text='Promenade des Anglais'
            ></div>
            <div
               className='box two'
               style={{
                  "--img":
                     "url(https://images.unsplash.com/photo-1631821938224-2dc859e9267e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
               }}
               data-text='I LOVE NICE'
            ></div>
            <div
               className='box three'
               style={{
                  "--img":
                     "url(https://images.unsplash.com/photo-1604440401661-8f6f07c285a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1563&q=80)",
               }}
               data-text='Vieux nice'
            ></div>
            <div
               className='box four'
               style={{
                  "--img":
                     "url(https://images.unsplash.com/photo-1491166617655-0723a0999cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
               }}
               data-text='Promenade du Paillon'
            ></div>
            <div
               className='box five'
               style={{
                  "--img":
                     "url(https://images.unsplash.com/photo-1592889368443-de48cb93ec30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
               }}
               data-text='Negresco'
            ></div>
         </div>
      </div>
   );
};

export default App;
