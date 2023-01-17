import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/homepage";
import Menu from "./pages/menu";
import Order from "./pages/order";
import UserManager from "./utils/usermanager";
import CreateAccount from "./pages/createaccount";
import LogIn from "./pages/login";
import Lessons from "./pages/lessons";

function App() {
    return <UserManager>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/lessons' element={<Lessons />} />
                <Route path='/order' element={<Order />} />
                <Route path='/create' element={<CreateAccount />} />
                <Route path='/login' element={<LogIn />} />
            </Routes>
        </BrowserRouter>
    </UserManager>
}

export default App;
