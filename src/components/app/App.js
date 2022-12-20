import React from 'react';
import Header from '../UI/header.jsx';
import Footer from '../UI/footer.jsx';
import Index from '../pages/index.jsx';
import SignUp from '../pages/sign-up.jsx';
import SignIn from '../pages/sign-in.jsx';
import Trip from '../pages/trip';
import Bookings from '../pages/bookings.jsx';
import '../../assets/css/style.css';
import { Route, Routes} from "react-router-dom";


const App = () => (
  <>
    <Header />
      <Routes>
         <Route path='../pages/sign-up' element={<SignUp />} />
         <Route path='../pages/sign-in' element={<SignIn />} />
         <Route path='/main' element={<Index />} />
         <Route path='/trip/:tripId' element={<Trip />} />
         <Route path='/bookings' element={<Bookings />} />
         <Route path='*' element={<Index />} />
       </Routes>
    <Footer />
  </>
      
);

export default App;