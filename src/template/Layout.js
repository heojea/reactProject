import Header from './Header'
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom';

import Router from "./Router";

function Layout() {
    return (
        <BrowserRouter>
            <Header/>
            <Router/>
            <Footer/>
        </BrowserRouter>
    );
}
export default Layout;