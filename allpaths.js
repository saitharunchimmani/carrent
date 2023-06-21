import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Content from "./Content";
import Footer from "./Footer";
import About from "./About";
import Ride from "./Ride"
import SignupForm from "./SignupForm";
import Book from "./Book";

function Allpaths(){
    return(
        <BrowserRouter>
        <Routes>
           <Route path="/" element={<SignupForm/>}></Route>
           <Route path="/Navbar" element={<Navbar/>}></Route>
           <Route path="/Content" element={<Content/>}></Route>
           <Route path="/Footer" element={<Footer/>}></Route>
           <Route path="/Login" element={<Login/>}></Route>
           <Route path="/About" element={<About/>}></Route>
           <Route path="/Ride" element={<Ride/>}></Route>
            <Route path="/SignupForm" element={<SignupForm/>}></Route>
             <Route path="/book-page" element={<Book/>}></Route> 
         </Routes>
        </BrowserRouter>
    )
}
export default Allpaths;