
import CarDetails  from "../pages/CarDetail";
import CarList from "../pages/CarList";

const routes = [



  {
    path: "//CarDetail/:id",
    title: "CarDetail",
    component: <CarDetails />,
  },
  
 
  {
    path: "/",
    title: "CarList",
    component: <CarList/>,
  },
];

export default routes;
