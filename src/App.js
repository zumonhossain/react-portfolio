import React from 'react';
import HomePage from "./pages/HomePage";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import PageTop from "./components/PageTop/PageTop";

function App() {
  return (
    <div>
         <TopNavigation/> 
         <PageTop pagetitle="About Me" /> 
    </div>
  );
}

export default App;
