
import {RouteObject} from "react-router-dom";
import About from '@/page/about/About'
import Home from '@/page/home/Home'
const routeConfig:RouteObject[]= [
  {
     path:"/about",
     element:<About/>,
  },
  {
    path:"/home",
    element:<Home/>
  }
 
]

export default routeConfig

