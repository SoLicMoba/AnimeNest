import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import Login from './pages/Login';

function RoutesApp() {
    return(
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;