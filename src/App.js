import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/homepage";
import Menu from "./pages/menu";
import Order from "./pages/order";
import UserManager from "./utils/usermanager";
import {useRef} from "react";
import CreateAccount from "./pages/createaccount";

function App() {
    const userManagerRef = useRef(null);

    return <UserManager ref={userManagerRef}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/order' element={<Order />} />
                <Route path='/create' element={<CreateAccount />} />
            </Routes>
        </BrowserRouter>
    </UserManager>
}

export default App;
