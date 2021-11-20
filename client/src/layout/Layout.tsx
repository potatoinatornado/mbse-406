import React from "react";
import { BrowserRouter as Router} from 'react-router-dom'
import Menu from "../components/Menu";


const Layout:React.FC = ({children}) => {
    return (
        <Router>
            <Menu/>
            <main>{children}</main>
        </Router>
    )
}

export default Layout