import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from './App.module.scss';
import { NavHeader } from './components/nav-header/nav-header';

import   HomePage  from "./pages/HomePage";
import  ContactPage  from "./pages/ContactPage";
import { NavHeaderDialogica } from "./components/nav-header-dialogica/nav-header-dialogica";

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                 <NavHeaderDialogica />
                    <Routes>
                    <Route path='/' element={<HomePage />}/>
                 
                    <Route path='/contact' element={<ContactPage />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;