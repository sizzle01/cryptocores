import React, { useState } from "react";
import './style.css'
import { FirstTab, SecondTab, ThirdTab } from "./Tabs";



const AllTabs = () => {

   //  Functions to handle Tab Switching
 const handleTab1 = () => {
  // update the state to tab1
  setActiveTab("tab1");
};
const handleTab2 = () => {
  // update the state to tab2
  setActiveTab("tab2");
};
const handleTab3 = () => {
  // update the state to tab2
  setActiveTab("tab3");
};


  const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li   onClick={handleTab1} className={activeTab === "tab1" ? "active" : ""}>Phrase</li>
        <li   onClick={handleTab2} className={activeTab === "tab2" ? "active" : ""}>Private Key</li>
        <li  onClick={handleTab3} className={activeTab === "tab3" ? "active" : ""}>KeyStore JSON</li>
      </ul>
      <div className="outlet">
      {(activeTab === "tab1") ? <FirstTab /> : (activeTab ==="tab2") ? <SecondTab /> : (activeTab === "tab3") ? <ThirdTab />: null}
      </div>
    </div>
  );
};
export default AllTabs;