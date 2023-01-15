


import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Timezone from "./pages/timezone";
import Company from "./pages/company";
import NotFound from "./pages/not_found";

const Content = () => {

    return (
      
        <Router>
            <Routes>
                <Route path="/" element={ <Navigate to="/timezone" /> } />
                <Route path="/timezone" element={ <Timezone /> } />
                <Route path="/company" element={ <Company /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </Router>
        
    );

}

export default Content;


