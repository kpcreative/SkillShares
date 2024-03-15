
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";


function App() {
  const currentUser=false;
  const Layout=()=>{
    return (
      <div>
        <Home/>
      </div>
    );

  };

  const router = createBrowserRouter([
    {
      path:"/",
      element:
      <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
      ]
    },
   
  ]);
 
    return <div >
       <RouterProvider router={router} />
    </div>;
  } 

export default App