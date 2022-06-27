import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/root.css";
import "./App.css";
import { dataAsso } from "@pages/Associations/dataAsso";
import SliderAssociations from "@pages/Associations/SliderAssociations";
import NotreBelleHistoire from "@pages/NotreBelleHistoire/NotreBelleHistoire";
import Home from "@pages/Home/Home";
import Contact from "@components/Contact/Contact";
import Admin from "@pages/dashboard/Admin/Admin";
import CreationEvenement from "@components/CreationEvenement/CreationEvenement";
import Philanthrokids from "@pages/Philanthrokids/Philanthrokids";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div className="containerContainWebsite">
              <Home />
            </div>
          }
        />
        <Route
          path="/histoire"
          element={
            <div className="containerContainWebsite">
              <NotreBelleHistoire />
            </div>
          }
        />
        <Route
          path="/associations"
          element={
            <div className="containerContainWebsite">
              <SliderAssociations dataAsso={dataAsso} />
            </div>
          }
        />
        <Route path="/creationEvenement" element={
        <div className="containerContainWebsite">
        <CreationEvenement />
        </div>
      } />
        <Route path="/contact" element={
        <div className="containerContainWebsite">
        <Contact />
        </div>
      } />
        <Route path="/admin/users" element={
        <div className="containerContainWebsite">
         <Admin content="users" />
         </div>} />
        <Route path="/admin/posts" element={
        <div className="containerContainWebsite">
        <Admin content="posts" />
        </div>
      } />
        <Route path="/Philanthrokids" element={
         <div className="containerContainWebsite">
        <Philanthrokids />
        </div>
      } />
      </Routes>
    </div>
  );
}

export default App;
