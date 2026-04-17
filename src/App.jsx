import React from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router';


const App = () => {
  return (
 
       <main >
           <header>
              <Navbar></Navbar>
           </header>

            <Outlet />

           
               <Footer></Footer>
        
       </main>

  );
};

export default App;