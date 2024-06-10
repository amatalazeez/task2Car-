import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "./Components/Partials/Loader";
import PageTitle from "./Components/PageTitle";
import CarDetails  from "./pages/CarDetail";
import  CarList from './pages/CarList';
import  datacars from '../data/datacars';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
    
      <Routes>
 
        <Route
          path="/"
          index
          element={
            <>
              <PageTitle title="CarList" />
              <CarList />
            </>
          }
        />
        <Route
          path="/CarDetail/:id"
          index
          element={
            <>
              <PageTitle title="CarDetail" />
              
              <CarDetails cars={datacars} />
            </>
          }
        />
      
      </Routes>
    </>
  );
}

export default App;
