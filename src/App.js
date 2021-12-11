import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

 import {Route,Switch,Redirect}from "react-router-dom";
 import About from "./About";
 import MyProjects from "./Projects";
 import Contact from "./Contact";
 import Home from "./Home";
 import Navbar from "./Navbar";
 import Footer from "./Footer";
 import Carousel from "./Carousel";
 import Gallery from "./Gallery";
import Services from "./Services";
// import {Redirect} from "react-router";
// import Menu from "./Menu";
// import User from "./User";
// import Search from "./Search";
function App(){




 return(
   <>
<Navbar/>


<Switch>

   <Route exact path="/" component={Home} />
   <Route exact path="/contact" component={Contact} />
   <Route exact path="/projects" component={MyProjects} />
   <Route exact path="/gallery" component={Gallery}/>
   <Route exact path="/services" component={Services}/>
   <Route exact path="/about" component={About}/>
  <Redirect to="/"/>


</Switch> 

<Footer/>
</>
 );
}


export default App;


